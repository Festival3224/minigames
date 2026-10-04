import { formatLikesCount, formatRating, formatRelativeTime } from '../utils/format';
import { showSnackbar } from './snackbar';

import { fetchGameDetails, GameNotFoundError } from '../api/games-api';
import type { GameRecord } from '../api/games-api';

import { fetchGameComments } from '../api/games-api';
import type { GameComment } from '../api/games-api';

// import commentsData from '../data/comments-tukoni-forest-keepers.json';

import starIcon from '../assets/icons/star.svg';
import heartIcon from '../assets/icons/heart.svg';

const heroImages = import.meta.glob('../assets/**/*-hero.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function getGameHeroImage(heroImage: string): string {
  const fileName = heroImage.split('/').pop();

  if (!fileName) {
    return '';
  }

  const imagePath = Object.keys(heroImages).find((path) => path.endsWith(`/${fileName}`));

  return imagePath ? heroImages[imagePath] : '';
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

function createCommentsMarkup(comments: GameComment[]): string {
  return comments
    .map((comment, index) => {
      const likeClass = comment.isLikedByCurrentUser
        ? ' game-details-dialog__comment-likes-group--active'
        : '';

      return `
        <article class="game-details-dialog__comment">
          <div class="game-details-dialog__comment-header">
            <div class="game-details-dialog__comment-author-group">
              <span
                class="game-details-dialog__comment-avatar game-details-dialog__comment-avatar--${index + 1}"
              >
                ${comment.authorName.charAt(0)}
              </span>

              <span class="game-details-dialog__comment-author">
                ${comment.authorName}
              </span>
            </div>

            <span class="game-details-dialog__comment-time">
              ${formatRelativeTime(comment.createdAt)}
            </span>
          </div>

          <p class="game-details-dialog__comment-text">
            ${comment.text}
          </p>

          <div class="game-details-dialog__comment-likes">
            <div class="game-details-dialog__comment-likes-group${likeClass}">
              <span class="material-symbols-outlined" aria-hidden="true">
                favorite
              </span>

              <span>${comment.likesCount}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
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
      const game = await fetchGameDetails(slug);

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
      const response = await fetchGameComments(slug);

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
        commentsList.innerHTML = createCommentsMarkup(response.data);
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

  favoriteButton?.addEventListener('click', () => {
    const isFavorited = favoriteButton.classList.toggle('game-details-dialog__favorite--active');

    const text = favoriteButton.querySelector<HTMLElement>('.game-details-dialog__favorite-text');

    if (text) {
      text.textContent = isFavorited ? 'Remove from Favorites' : 'Add to Favorites';
    }

    favoriteButton.setAttribute('aria-pressed', String(isFavorited));
  });

  backdrop.append(dialog);

  const commentInput = dialog.querySelector<HTMLTextAreaElement>(
    '.game-details-dialog__comment-input',
  );

  const sendButton = dialog.querySelector<HTMLButtonElement>('.game-details-dialog__send');

  const updateSendButtonState = (): void => {
    if (!commentInput || !sendButton) {
      return;
    }

    sendButton.disabled = commentInput.value.trim().length === 0;
  };

  commentInput?.addEventListener('input', updateSendButtonState);

  updateSendButtonState();

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
