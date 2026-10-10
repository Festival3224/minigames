import { formatLikesCount, formatRating, formatRelativeTime } from '../utils/format';
import { showSnackbar } from './snackbar';

import {
  fetchGameDetails,
  GameNotFoundError,
  toggleGameFavorite,
  submitGameComment,
  toggleCommentLike,
} from '../api/games-api';

import { getActiveSession, resolveAppSession } from '../auth/app-session-manager';
import { getProfileName } from '../auth/profile';
import { openAuthDialog } from './auth-dialog';

import type { GameRecord } from '../api/games-api';

import { fetchGameComments } from '../api/games-api';
import type { GameComment } from '../api/games-api';

import starIcon from '../assets/icons/star.svg';
import heartIcon from '../assets/icons/heart.svg';

const heroImages = import.meta.glob('../assets/**/*-hero.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const commentDrafts = new Map<string, string>();

const COMMENT_AVATAR_CLASSES = [
  'game-details-dialog__comment-avatar--random-1',
  'game-details-dialog__comment-avatar--random-2',
  'game-details-dialog__comment-avatar--random-3',
  'game-details-dialog__comment-avatar--random-4',
  'game-details-dialog__comment-avatar--random-5',
] as const;

function getGameHeroImage(heroImage: string): string {
  const fileName = heroImage.split('/').pop();

  if (!fileName) {
    return '';
  }

  const imagePath = Object.keys(heroImages).find((path) => path.endsWith(`/${fileName}`));

  return imagePath ? heroImages[imagePath] : '';
}

function getCommentAuthorName(displayName: string, email: string): string {
  const emailLocalPart = email.split('@', 1)[0]?.trim() ?? '';

  const candidates = [displayName.trim(), emailLocalPart, 'Player'];

  return (
    candidates.find((candidate) => candidate.length >= 2 && candidate.length <= 30) ?? 'Player'
  );
}

const medalByPosition: Record<number, string> = {
  1: '🥇',
  2: '🥈',
  3: '🥉',
};

function createRecordsMarkup(records: GameRecord[]): string {
  return records
    .map(
      (record) => `
        <div class="game-details-dialog__record">
          <div class="game-details-dialog__record-player-group">
            <span class="game-details-dialog__record-medal" aria-hidden="true">
              ${medalByPosition[record.position] ?? ''}
            </span>

            <span class="game-details-dialog__record-player">
              ${record.playerName}
            </span>
          </div>

          <div class="game-details-dialog__record-result-group">
            <span class="game-details-dialog__record-score">
              ${record.score.toLocaleString()} pts
            </span>

            <span class="game-details-dialog__record-time">
              ${formatRelativeTime(record.achievedAt)}
            </span>
          </div>
        </div>
      `,
    )
    .join('');
}

function createCommentElement(comment: GameComment, avatarClass: string): HTMLElement {
  const article = document.createElement('article');

  article.className = 'game-details-dialog__comment';
  article.dataset.commentId = comment.commentId;

  article.innerHTML = /* html */ `
    <div class="game-details-dialog__comment-header">
      <div class="game-details-dialog__comment-author-group">
        <span
          class="game-details-dialog__comment-avatar ${avatarClass}"
        ></span>

        <span class="game-details-dialog__comment-author"></span>
      </div>

      <span class="game-details-dialog__comment-time"></span>
    </div>

    <p class="game-details-dialog__comment-text"></p>

    <div class="game-details-dialog__comment-likes">
      <button
        class="game-details-dialog__comment-likes-group"
        type="button"
        aria-label="Like comment"
        aria-pressed="false"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          favorite
        </span>

        <span class="game-details-dialog__comment-likes-count"></span>
      </button>
    </div>
  `;

  const avatar = article.querySelector<HTMLElement>('.game-details-dialog__comment-avatar');

  const author = article.querySelector<HTMLElement>('.game-details-dialog__comment-author');

  const time = article.querySelector<HTMLElement>('.game-details-dialog__comment-time');

  const text = article.querySelector<HTMLElement>('.game-details-dialog__comment-text');

  const likesGroup = article.querySelector<HTMLElement>(
    '.game-details-dialog__comment-likes-group',
  );

  const likesCount = article.querySelector<HTMLElement>(
    '.game-details-dialog__comment-likes-count',
  );

  if (avatar) {
    avatar.textContent = comment.authorName.trim().charAt(0).toLocaleUpperCase();
  }

  if (author) {
    author.textContent = comment.authorName;
  }

  if (time) {
    time.textContent = formatRelativeTime(comment.createdAt);
  }

  if (text) {
    text.textContent = comment.text;
  }

  if (likesCount) {
    likesCount.textContent = String(comment.likesCount);
  }

  likesGroup?.classList.toggle(
    'game-details-dialog__comment-likes-group--active',
    comment.isLikedByCurrentUser,
  );

  likesGroup?.setAttribute('aria-pressed', String(comment.isLikedByCurrentUser));

  return article;
}

export function createGameDetailsDialog(slug: string, onClose?: () => void): HTMLElement {
  const backdrop = document.createElement('div');

  backdrop.className = 'game-details-backdrop';
  document.body.classList.add('dialog-open');

  const dialog = document.createElement('section');
  dialog.className = 'game-details-dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', 'Game details');

  const commenterAvatarClasses = new Map<string, string>();

  function getCommentAvatarClass(authorName: string): string {
    const existingClass = commenterAvatarClasses.get(authorName);

    if (existingClass) {
      return existingClass;
    }

    const randomIndex = Math.floor(Math.random() * COMMENT_AVATAR_CLASSES.length);

    const avatarClass = COMMENT_AVATAR_CLASSES[randomIndex];

    commenterAvatarClasses.set(authorName, avatarClass);

    return avatarClass;
  }

  const renderGameDetailsError = (): void => {
    const oldError = dialog.querySelector('.game-details-dialog__error');
    oldError?.remove();

    const error = document.createElement('div');
    error.className = 'game-details-dialog__error';

    error.innerHTML = /* html */ `
      <p class="game-details-dialog__error-title">
        Failed to load game details.
      </p>

      <button
        class="game-details-dialog__retry"
        type="button"
      >
        Retry
      </button>
    `;

    const retryButton = error.querySelector<HTMLButtonElement>('.game-details-dialog__retry');

    retryButton?.addEventListener('click', () => {
      error.remove();
      void loadGameDetails();
    });

    dialog.prepend(error);

    const title = dialog.querySelector<HTMLElement>('.game-details-dialog__title');

    const description = dialog.querySelector<HTMLElement>('.game-details-dialog__description');

    if (title) {
      title.textContent = 'Game details unavailable';
    }

    if (description) {
      description.textContent = 'Please try again.';
    }
  };

  const renderGameDetailsEmpty = (): void => {
    const content = dialog.querySelector<HTMLElement>('.game-details-dialog__content');

    if (!content) {
      return;
    }

    content.innerHTML = /* html */ `
      <div class="game-details-dialog__empty">
        <p class="game-details-dialog__empty-title">
          Game not found.
        </p>

        <p class="game-details-dialog__empty-text">
          Please try another game.
        </p>
      </div>
    `;
  };

  const loadGameDetails = async (): Promise<void> => {
    try {
      const session = getActiveSession();

      const game = await fetchGameDetails(slug, session?.email);

      if (!game) {
        renderGameDetailsEmpty();
        return;
      }

      const heroImage = dialog.querySelector<HTMLImageElement>('.game-details-dialog__hero-image');
      const title = dialog.querySelector<HTMLElement>('.game-details-dialog__title');
      const rating = dialog.querySelector<HTMLElement>('.game-details-dialog__rating');
      const likes = dialog.querySelector<HTMLElement>('.game-details-dialog__likes');
      const description = dialog.querySelector<HTMLElement>('.game-details-dialog__description');
      const infoValues = dialog.querySelectorAll<HTMLElement>('.game-details-dialog__info-value');
      const recordsList = dialog.querySelector<HTMLElement>('.game-details-dialog__records-list');

      if (heroImage) {
        heroImage.src = getGameHeroImage(game.heroImage);
      }

      if (title) {
        title.textContent = game.name;
      }

      if (rating) {
        rating.innerHTML = `
        <img src="${starIcon}" alt="" aria-hidden="true" />
        ${formatRating(game.rating)}
      `;
      }

      if (likes) {
        likes.innerHTML = `
        <img src="${heartIcon}" alt="" aria-hidden="true" />
        ${formatLikesCount(game.likesCount)}
      `;
      }

      const favoriteButton = dialog.querySelector<HTMLButtonElement>(
        '.game-details-dialog__favorite',
      );

      const favoriteText = favoriteButton?.querySelector<HTMLElement>(
        '.game-details-dialog__favorite-text',
      );

      if (favoriteButton) {
        favoriteButton.classList.toggle(
          'game-details-dialog__favorite--active',
          game.isLikedByCurrentUser,
        );

        favoriteButton.setAttribute('aria-pressed', String(game.isLikedByCurrentUser));
      }

      if (favoriteText) {
        favoriteText.textContent = game.isLikedByCurrentUser
          ? 'Remove from Favorites'
          : 'Add to Favorites';
      }

      if (description) {
        description.textContent = game.fullDescription;
      }

      const specValues = [
        game.specs.genre,
        game.specs.players,
        game.specs.duration,
        game.specs.price,
      ];

      for (const [index, value] of specValues.entries()) {
        const element = infoValues[index];

        if (element) {
          element.textContent = value;
        }
      }

      if (recordsList) {
        recordsList.innerHTML = createRecordsMarkup(game.topRecords);
      }
    } catch (error) {
      if (error instanceof GameNotFoundError) {
        renderGameDetailsEmpty();
        return;
      }

      renderGameDetailsError();

      showSnackbar({
        message: 'Failed to load game details.',
        variant: 'error',
      });
    }
  };

  const loadGameComments = async (): Promise<void> => {
    try {
      const response = await fetchGameComments(slug, getActiveSession()?.email);

      if (response.data.length === 0) {
        const commentsTitle = dialog.querySelector<HTMLElement>(
          '.game-details-dialog__comments-title',
        );

        const commentsList = dialog.querySelector<HTMLElement>(
          '.game-details-dialog__comments-list',
        );

        if (commentsTitle) {
          commentsTitle.textContent = `Comments (${response.meta.totalComments})`;
        }

        if (commentsList) {
          commentsList.innerHTML = /* html */ `
            <div class="game-details-dialog__comments-empty">
              No comments yet.
            </div>
          `;
        }

        return;
      }

      const commentsTitle = dialog.querySelector<HTMLElement>(
        '.game-details-dialog__comments-title',
      );

      const commentsList = dialog.querySelector<HTMLElement>('.game-details-dialog__comments-list');

      if (commentsTitle) {
        commentsTitle.textContent = `Comments (${response.meta.totalComments})`;
      }

      if (commentsList) {
        commentsList.replaceChildren(
          ...response.data.map((comment) =>
            createCommentElement(comment, getCommentAvatarClass(comment.authorName)),
          ),
        );
      }
    } catch {
      const commentsList = dialog.querySelector<HTMLElement>('.game-details-dialog__comments-list');

      if (commentsList) {
        commentsList.innerHTML = /* html */ `
          <div class="game-details-dialog__comments-error">
            Failed to load comments.
          </div>
        `;
      }

      showSnackbar({
        message: 'Failed to load comments.',
        variant: 'error',
      });
    }
  };

  dialog.innerHTML = `
  <div class="game-details-dialog__hero">
    <img
      class="game-details-dialog__hero-image"
      src=""
      alt=""
    />

    <button
      class="game-details-dialog__close"
      type="button"
      aria-label="Close game details"
    >
      <span class="material-symbols-outlined" aria-hidden="true">
        close
      </span>
    </button>
  </div>

  <div class="game-details-dialog__content">
    <div class="game-details-dialog__title-row">  
      <h2 class="game-details-dialog__title">
        Loading...
      </h2>  

      <div class="game-details-dialog__ratings">
        <span class="game-details-dialog__rating">
          <img src="${starIcon}" alt="" aria-hidden="true" />
          -
        </span>

        <span class="game-details-dialog__likes">
          <img src="${heartIcon}" alt="" aria-hidden="true" />
          -
        </span>
      </div>
    </div>

    <p class="game-details-dialog__description">
      Loading game details... <!-- description -->
    </p>

    <div class="game-details-dialog__info">
      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Genre</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Players</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Duration</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Price</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>
    </div>

   <div class="game-details-dialog__actions">
      <button class="game-details-dialog__play" type="button">
        Play Now
      </button>

      <button
        class="game-details-dialog__favorite"
        type="button"
        aria-label="Add to Favorites"
        aria-pressed="false"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          favorite
        </span>

        <span class="game-details-dialog__favorite-text">
          Add to Favorites
        </span>
      </button>
    </div>

    <section class="game-details-dialog__records">
      <div class="game-details-dialog__records-title">
        <span aria-hidden="true">🏆</span>
        <h3>Top Records</h3>
      </div>

      <div class="game-details-dialog__records-list"></div>
    </section>

    <section class="game-details-dialog__comments">
      <h3 class="game-details-dialog__comments-title">
        Comments (0)
      </h3>

    <div class="game-details-dialog__comment-form">
      <div class="game-details-dialog__user-avatar" aria-hidden="true">
        U
      </div>

      <textarea
        class="game-details-dialog__comment-input"
        placeholder="Write a comment..."
        aria-label="Write a comment"
      ></textarea>

      <button
        class="game-details-dialog__send"
        type="button"
        aria-label="Send comment"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          send
        </span>
      </button>
    </div>

      <div class="game-details-dialog__comments-list">
        <div class="game-details-dialog__comments-list">
          <div class="game-details-dialog__comments-loading">
            Loading comments...
          </div>
        </div>
      </div>
    </section>
  </div>
`;

  void loadGameDetails();
  void loadGameComments();

  const favoriteButton = dialog.querySelector<HTMLButtonElement>('.game-details-dialog__favorite');

  function openAuthForProtectedAction(message: string): void {
    showSnackbar({
      message,
      variant: 'error',
    });

    const commentInput = dialog.querySelector<HTMLTextAreaElement>(
      '.game-details-dialog__comment-input',
    );

    if (commentInput?.value) {
      commentDrafts.set(slug, commentInput.value);
    }

    document.removeEventListener('keydown', handleKeydown);

    backdrop.remove();
    document.body.classList.remove('dialog-open');

    void openAuthDialog('login');
  }

  let isFavoriteRequestPending = false;

  favoriteButton?.addEventListener('click', async () => {
    if (isFavoriteRequestPending) {
      return;
    }

    const sessionState = await resolveAppSession();

    if (sessionState.status !== 'authenticated') {
      const message =
        sessionState.status === 'expired'
          ? 'Your session has expired. Please log in again.'
          : 'Log in to add games to your favorites.';

      openAuthForProtectedAction(message);
      return;
    }

    isFavoriteRequestPending = true;
    favoriteButton.disabled = true;

    const favoriteText = favoriteButton.querySelector<HTMLElement>(
      '.game-details-dialog__favorite-text',
    );

    const previousText = favoriteText?.textContent ?? '';

    if (favoriteText) {
      favoriteText.textContent = 'Updating…';
    }

    try {
      const result = await toggleGameFavorite(slug, sessionState.session.email);

      favoriteButton.classList.toggle('game-details-dialog__favorite--active', result.isFavorited);

      favoriteButton.setAttribute('aria-pressed', String(result.isFavorited));

      if (favoriteText) {
        favoriteText.textContent = result.isFavorited
          ? 'Remove from Favorites'
          : 'Add to Favorites';
      }

      const likes = dialog.querySelector<HTMLElement>('.game-details-dialog__likes');

      if (likes) {
        likes.innerHTML = `
        <img src="${heartIcon}" alt="" aria-hidden="true" />
        ${formatLikesCount(result.likesCount)}
      `;
      }
    } catch {
      if (favoriteText) {
        favoriteText.textContent = previousText;
      }

      showSnackbar({
        message: 'Unable to update favorites. The result is unknown. Please try again.',
        variant: 'error',
      });
    } finally {
      isFavoriteRequestPending = false;
      favoriteButton.disabled = false;
    }
  });

  backdrop.append(dialog);

  const commentInput = dialog.querySelector<HTMLTextAreaElement>(
    '.game-details-dialog__comment-input',
  );

  const sendButton = dialog.querySelector<HTMLButtonElement>('.game-details-dialog__send');

  const commentsList = dialog.querySelector<HTMLElement>('.game-details-dialog__comments-list');

  const userAvatar = dialog.querySelector<HTMLElement>('.game-details-dialog__user-avatar');

  const activeSession = getActiveSession();

  if (commentInput) {
    // commentInput.value = '';
    commentInput.disabled = !activeSession;

    if (!activeSession) {
      commentInput.placeholder = 'Log in to write a comment';
    }
  }

  if (userAvatar && activeSession) {
    const profileName = getProfileName(activeSession.displayName, activeSession.email);

    userAvatar.textContent = [...profileName.trim()][0]?.toLocaleUpperCase() ?? 'U';
  }

  let isCommentRequestPending = false;

  const updateSendButtonState = (): void => {
    if (!commentInput || !sendButton) {
      return;
    }

    const textLength = commentInput.value.trim().length;

    sendButton.disabled =
      isCommentRequestPending || !getActiveSession() || textLength === 0 || textLength > 500;
  };

  const pendingCommentLikes = new Set<string>();

  const resizeCommentInput = (): void => {
    if (!commentInput) {
      return;
    }

    commentInput.style.height = 'auto';
    commentInput.style.height = `${commentInput.scrollHeight}px`;
  };

  const savedCommentDraft = commentDrafts.get(slug);

  if (commentInput && savedCommentDraft) {
    commentInput.value = savedCommentDraft;
    resizeCommentInput();
  }

  commentInput?.addEventListener('input', () => {
    resizeCommentInput();
    updateSendButtonState();
  });

  updateSendButtonState();

  async function submitComment(): Promise<void> {
    if (!commentInput || !sendButton || isCommentRequestPending) {
      return;
    }

    const text = commentInput.value.trim();

    if (text.length === 0 || text.length > 500) {
      showSnackbar({
        message: 'Comment must contain between 1 and 500 characters.',
        variant: 'error',
      });

      return;
    }

    const sessionState = await resolveAppSession();

    if (sessionState.status !== 'authenticated') {
      const message =
        sessionState.status === 'expired'
          ? 'Your session has expired. Please log in again.'
          : 'Log in to post a comment.';

      openAuthForProtectedAction(message);
      return;
    }

    isCommentRequestPending = true;
    commentInput.disabled = true;
    sendButton.disabled = true;

    const authorName = getCommentAuthorName(
      sessionState.session.displayName,
      sessionState.session.email,
    );

    try {
      await submitGameComment(slug, sessionState.session.email, authorName, text);

      commentDrafts.delete(slug);
      commentInput.value = '';
      commentInput.style.height = '';

      await loadGameComments();
    } catch (error) {
      showSnackbar({
        message:
          error instanceof TypeError
            ? 'Comment submission result is unknown. Please check before retrying.'
            : 'Unable to post comment. Please try again.',
        variant: 'error',
      });
    } finally {
      isCommentRequestPending = false;

      if (document.body.contains(commentInput)) {
        commentInput.disabled = false;
        updateSendButtonState();
      }
    }
  }

  sendButton?.addEventListener('click', () => {
    void submitComment();
  });

  commentInput?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.shiftKey || sendButton?.disabled) {
      return;
    }

    event.preventDefault();
    void submitComment();
  });

  commentsList?.addEventListener('click', async (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const likeButton = target.closest<HTMLButtonElement>(
      '.game-details-dialog__comment-likes-group',
    );

    if (!likeButton) {
      return;
    }

    const comment = likeButton.closest<HTMLElement>('.game-details-dialog__comment');

    const commentId = comment?.dataset.commentId;

    if (!commentId || pendingCommentLikes.has(commentId)) {
      return;
    }

    const sessionState = await resolveAppSession();

    if (sessionState.status !== 'authenticated') {
      const message =
        sessionState.status === 'expired'
          ? 'Your session has expired. Please log in again.'
          : 'Log in to like comments.';

      openAuthForProtectedAction(message);
      return;
    }

    pendingCommentLikes.add(commentId);
    likeButton.disabled = true;
    likeButton.setAttribute('aria-busy', 'true');

    const likesCount = likeButton.querySelector<HTMLElement>(
      '.game-details-dialog__comment-likes-count',
    );

    const previousCount = likesCount?.textContent ?? '';

    if (likesCount) {
      likesCount.textContent = '…';
    }

    try {
      const result = await toggleCommentLike(commentId, sessionState.session.email);

      likeButton.classList.toggle(
        'game-details-dialog__comment-likes-group--active',
        result.isLikedByCurrentUser,
      );

      likeButton.setAttribute('aria-pressed', String(result.isLikedByCurrentUser));

      if (likesCount) {
        likesCount.textContent = String(result.likesCount);
      }
    } catch {
      if (likesCount) {
        likesCount.textContent = previousCount;
      }

      showSnackbar({
        message: 'Unable to update the comment like. The result is unknown. Please try again.',
        variant: 'error',
      });
    } finally {
      pendingCommentLikes.delete(commentId);

      if (document.body.contains(likeButton)) {
        likeButton.disabled = false;
        likeButton.removeAttribute('aria-busy');
      }
    }
  });

  const closeButton = dialog.querySelector<HTMLButtonElement>('.game-details-dialog__close');

  function closeDialog(): void {
    if (backdrop.classList.contains('game-details-backdrop--closing')) {
      return;
    }

    document.removeEventListener('keydown', handleKeydown);

    backdrop.classList.add('game-details-backdrop--closing');

    const handleAnimationEnd = (event: AnimationEvent): void => {
      if (event.target !== backdrop) {
        return;
      }

      document.body.classList.remove('dialog-open');
      backdrop.remove();

      onClose?.();
    };

    backdrop.addEventListener('animationend', handleAnimationEnd);
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Escape') {
      return;
    }

    closeDialog();
  }

  closeButton?.addEventListener('click', closeDialog);

  backdrop.addEventListener('click', (event) => {
    if (event.target !== backdrop) {
      return;
    }

    closeDialog();
  });

  document.addEventListener('keydown', handleKeydown);

  return backdrop;
}
