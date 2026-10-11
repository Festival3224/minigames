// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  fetchGameComments,
  fetchGameDetails,
  toggleGameFavorite,
  submitGameComment,
  toggleCommentLike,
} from '../api/games-api';

import { getActiveSession, resolveAppSession } from '../auth/app-session-manager';

import { createGameDetailsDialog } from './game-details-dialog';
import { showSnackbar } from './snackbar';
import { openAuthDialog } from './auth-dialog';

vi.mock('../api/games-api', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../api/games-api')>();

  return {
    ...actual,
    fetchGameDetails: vi.fn(),
    fetchGameComments: vi.fn(),
    toggleGameFavorite: vi.fn(),
    submitGameComment: vi.fn(),
    toggleCommentLike: vi.fn(),
  };
});

vi.mock('../auth/app-session-manager', () => ({
  getActiveSession: vi.fn(),
  resolveAppSession: vi.fn(),
}));

vi.mock('./auth-dialog', () => ({
  openAuthDialog: vi.fn(),
}));

vi.mock('./snackbar', () => ({
  showSnackbar: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
  document.body.replaceChildren();
  document.body.className = '';
});

describe('game details dialog', () => {
  it('loads and renders game details and comments', async () => {
    vi.mocked(getActiveSession).mockReturnValue(undefined);

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 1250,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [],
      meta: {
        totalComments: 0,
        returnedCount: 0,
      },
    });

    const backdrop = createGameDetailsDialog('forest-game');

    document.body.append(backdrop);

    await vi.waitFor(() => {
      expect(backdrop.querySelector('.game-details-dialog__title')?.textContent).toBe(
        'Forest Game',
      );
    });

    expect(fetchGameDetails).toHaveBeenCalledWith('forest-game', undefined);
    expect(fetchGameComments).toHaveBeenCalledWith('forest-game', undefined);

    expect(backdrop.querySelector('.game-details-dialog__description')?.textContent).toBe(
      'Explore the forest.',
    );

    expect(backdrop.querySelector('.game-details-dialog__comments-title')?.textContent).toBe(
      'Comments (0)',
    );

    expect(backdrop.querySelector('.game-details-dialog__comments-empty')?.textContent).toContain(
      'No comments yet.',
    );
  });

  it('updates favorite state from the API response', async () => {
    vi.mocked(getActiveSession).mockReturnValue(undefined);

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [],
      meta: {
        totalComments: 0,
        returnedCount: 0,
      },
    });

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      },
    });

    vi.mocked(toggleGameFavorite).mockResolvedValue({
      isFavorited: true,
      likesCount: 11,
    });

    const backdrop = createGameDetailsDialog('forest-game');
    document.body.append(backdrop);

    const favoriteButton = backdrop.querySelector<HTMLButtonElement>(
      '.game-details-dialog__favorite',
    );

    if (!favoriteButton) {
      throw new Error('Favorite button not found');
    }

    favoriteButton.click();

    await vi.waitFor(() => {
      expect(toggleGameFavorite).toHaveBeenCalledWith('forest-game', 'player@example.com');
    });

    await vi.waitFor(() => {
      expect(favoriteButton.getAttribute('aria-pressed')).toBe('true');
    });

    expect(favoriteButton.querySelector('.game-details-dialog__favorite-text')?.textContent).toBe(
      'Remove from Favorites',
    );

    expect(favoriteButton.disabled).toBe(false);
  });

  it('restores favorite UI and shows an error when the request fails', async () => {
    vi.mocked(getActiveSession).mockReturnValue(undefined);

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [],
      meta: {
        totalComments: 0,
        returnedCount: 0,
      },
    });

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      },
    });

    vi.mocked(toggleGameFavorite).mockRejectedValue(new Error('Favorite request failed'));

    const backdrop = createGameDetailsDialog('forest-game');
    document.body.append(backdrop);

    const favoriteButton = backdrop.querySelector<HTMLButtonElement>(
      '.game-details-dialog__favorite',
    );

    const favoriteText = favoriteButton?.querySelector<HTMLElement>(
      '.game-details-dialog__favorite-text',
    );

    if (!favoriteButton || !favoriteText) {
      throw new Error('Favorite controls not found');
    }

    favoriteButton.click();

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Unable to update favorites. The result is unknown. Please try again.',
        variant: 'error',
      });
    });

    expect(favoriteButton.disabled).toBe(false);
    expect(favoriteText.textContent).toBe('Add to Favorites');
  });

  it('submits a comment and reloads comments', async () => {
    vi.mocked(getActiveSession).mockReturnValue({
      displayName: 'Player',
      email: 'player@example.com',
      authenticatedAt: 1000,
    });

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [],
      meta: {
        totalComments: 0,
        returnedCount: 0,
      },
    });

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      },
    });

    vi.mocked(submitGameComment).mockResolvedValue({
      commentId: 'comment-1',
      authorName: 'Player',
      text: 'Great game!',
      likesCount: 0,
      isLikedByCurrentUser: false,
      createdAt: '2026-10-11T08:00:00.000Z',
    });

    const backdrop = createGameDetailsDialog('forest-game');
    document.body.append(backdrop);

    const commentInput = backdrop.querySelector<HTMLTextAreaElement>(
      '.game-details-dialog__comment-input',
    );

    const sendButton = backdrop.querySelector<HTMLButtonElement>('.game-details-dialog__send');

    if (!commentInput || !sendButton) {
      throw new Error('Comment controls not found');
    }

    commentInput.value = 'Great game!';
    commentInput.dispatchEvent(new Event('input'));

    sendButton.click();

    await vi.waitFor(() => {
      expect(submitGameComment).toHaveBeenCalledWith(
        'forest-game',
        'player@example.com',
        'Player',
        'Great game!',
      );
    });

    await vi.waitFor(() => {
      expect(commentInput.value).toBe('');
    });

    expect(fetchGameComments).toHaveBeenCalledTimes(2);
    expect(commentInput.disabled).toBe(false);
  });

  it('keeps the comment and shows an error when submission fails', async () => {
    vi.mocked(getActiveSession).mockReturnValue({
      displayName: 'Player',
      email: 'player@example.com',
      authenticatedAt: 1000,
    });

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [],
      meta: {
        totalComments: 0,
        returnedCount: 0,
      },
    });

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      },
    });

    vi.mocked(submitGameComment).mockRejectedValue(new Error('Comment request failed'));

    const backdrop = createGameDetailsDialog('forest-game');
    document.body.append(backdrop);

    const commentInput = backdrop.querySelector<HTMLTextAreaElement>(
      '.game-details-dialog__comment-input',
    );

    const sendButton = backdrop.querySelector<HTMLButtonElement>('.game-details-dialog__send');

    if (!commentInput || !sendButton) {
      throw new Error('Comment controls not found');
    }

    commentInput.value = 'Keep this text';
    commentInput.dispatchEvent(new Event('input'));

    sendButton.click();

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Unable to post comment. Please try again.',
        variant: 'error',
      });
    });

    expect(commentInput.value).toBe('Keep this text');
    expect(commentInput.disabled).toBe(false);
  });

  it('updates comment like state from the API response', async () => {
    vi.mocked(getActiveSession).mockReturnValue({
      displayName: 'Player',
      email: 'player@example.com',
      authenticatedAt: 1000,
    });

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [
        {
          commentId: 'comment-1',
          authorName: 'Player',
          text: 'Nice game',
          likesCount: 2,
          isLikedByCurrentUser: false,
          createdAt: '2026-10-11T08:00:00.000Z',
        },
      ],
      meta: {
        totalComments: 1,
        returnedCount: 1,
      },
    });

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      },
    });

    vi.mocked(toggleCommentLike).mockResolvedValue({
      isLikedByCurrentUser: true,
      likesCount: 3,
    });

    const backdrop = createGameDetailsDialog('forest-game');
    document.body.append(backdrop);

    await vi.waitFor(() => {
      expect(backdrop.querySelector('.game-details-dialog__comment')).not.toBeNull();
    });

    const likeButton = backdrop.querySelector<HTMLButtonElement>(
      '.game-details-dialog__comment-likes-group',
    );

    if (!likeButton) {
      throw new Error('Comment like button not found');
    }

    likeButton.click();

    await vi.waitFor(() => {
      expect(toggleCommentLike).toHaveBeenCalledWith('comment-1', 'player@example.com');
    });

    await vi.waitFor(() => {
      expect(likeButton.getAttribute('aria-pressed')).toBe('true');
    });

    expect(likeButton.querySelector('.game-details-dialog__comment-likes-count')?.textContent).toBe(
      '3',
    );

    expect(likeButton.disabled).toBe(false);
  });

  it('restores comment like count and shows an error when the request fails', async () => {
    vi.mocked(getActiveSession).mockReturnValue({
      displayName: 'Player',
      email: 'player@example.com',
      authenticatedAt: 1000,
    });

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [
        {
          commentId: 'comment-1',
          authorName: 'Player',
          text: 'Nice game',
          likesCount: 2,
          isLikedByCurrentUser: false,
          createdAt: '2026-10-11T08:00:00.000Z',
        },
      ],
      meta: {
        totalComments: 1,
        returnedCount: 1,
      },
    });

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      },
    });

    vi.mocked(toggleCommentLike).mockRejectedValue(new Error('Like request failed'));

    const backdrop = createGameDetailsDialog('forest-game');
    document.body.append(backdrop);

    await vi.waitFor(() => {
      expect(backdrop.querySelector('.game-details-dialog__comment')).not.toBeNull();
    });

    const likeButton = backdrop.querySelector<HTMLButtonElement>(
      '.game-details-dialog__comment-likes-group',
    );

    const likesCount = likeButton?.querySelector<HTMLElement>(
      '.game-details-dialog__comment-likes-count',
    );

    if (!likeButton || !likesCount) {
      throw new Error('Comment like controls not found');
    }

    expect(likesCount.textContent).toBe('2');

    likeButton.click();

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Unable to update the comment like. The result is unknown. Please try again.',
        variant: 'error',
      });
    });

    expect(likesCount.textContent).toBe('2');
    expect(likeButton.disabled).toBe(false);
    expect(likeButton.hasAttribute('aria-busy')).toBe(false);
  });

  it('asks a guest to log in before adding a favorite', async () => {
    vi.mocked(getActiveSession).mockReturnValue(undefined);

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [],
      meta: {
        totalComments: 0,
        returnedCount: 0,
      },
    });

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'guest',
    });

    const backdrop = createGameDetailsDialog('forest-game');
    document.body.append(backdrop);

    const favoriteButton = backdrop.querySelector<HTMLButtonElement>(
      '.game-details-dialog__favorite',
    );

    if (!favoriteButton) {
      throw new Error('Favorite button not found');
    }

    favoriteButton.click();

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Log in to add games to your favorites.',
        variant: 'error',
      });
    });

    expect(openAuthDialog).toHaveBeenCalledWith('login');
    expect(toggleGameFavorite).not.toHaveBeenCalled();
  });

  it('closes the dialog after the closing animation', async () => {
    vi.mocked(getActiveSession).mockReturnValue(undefined);

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [],
      meta: {
        totalComments: 0,
        returnedCount: 0,
      },
    });

    const onClose = vi.fn();

    const backdrop = createGameDetailsDialog('forest-game', onClose);

    document.body.append(backdrop);

    const closeButton = backdrop.querySelector<HTMLButtonElement>('.game-details-dialog__close');

    if (!closeButton) {
      throw new Error('Close button not found');
    }

    closeButton.click();

    expect(backdrop.classList.contains('game-details-backdrop--closing')).toBe(true);

    backdrop.dispatchEvent(new Event('animationend'));

    expect(document.body.contains(backdrop)).toBe(false);
    expect(document.body.classList.contains('dialog-open')).toBe(false);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('rejects a comment longer than 500 characters', async () => {
    vi.mocked(getActiveSession).mockReturnValue({
      displayName: 'Player',
      email: 'player@example.com',
      authenticatedAt: 1000,
    });

    vi.mocked(fetchGameDetails).mockResolvedValue({
      slug: 'forest-game',
      name: 'Forest Game',
      heroImage: 'forest-hero.jpg',
      rating: 4.8,
      likesCount: 10,
      isLikedByCurrentUser: false,
      fullDescription: 'Explore the forest.',
      specs: {
        genre: 'Puzzle',
        players: '1 Player',
        duration: '15 min',
        price: 'Free',
      },
      topRecords: [],
    });

    vi.mocked(fetchGameComments).mockResolvedValue({
      data: [],
      meta: {
        totalComments: 0,
        returnedCount: 0,
      },
    });

    const backdrop = createGameDetailsDialog('forest-game');
    document.body.append(backdrop);

    const commentInput = backdrop.querySelector<HTMLTextAreaElement>(
      '.game-details-dialog__comment-input',
    );

    const sendButton = backdrop.querySelector<HTMLButtonElement>('.game-details-dialog__send');

    if (!commentInput || !sendButton) {
      throw new Error('Comment controls not found');
    }

    commentInput.value = 'a'.repeat(501);

    sendButton.disabled = false;
    sendButton.click();

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Comment must contain between 1 and 500 characters.',
        variant: 'error',
      });
    });

    expect(submitGameComment).not.toHaveBeenCalled();
  });
});
