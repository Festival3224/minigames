// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import { fetchFeaturedGames } from '../api/games-api';

import { createNewGames } from './new-games';
import { showSnackbar } from './snackbar';
import { createGameDetailsDialog } from './game-details-dialog';

vi.mock('../api/games-api', () => ({
  fetchFeaturedGames: vi.fn(),
}));

vi.mock('./game-details-dialog', () => ({
  createGameDetailsDialog: vi.fn(() => document.createElement('div')),
}));

vi.mock('./snackbar', () => ({
  showSnackbar: vi.fn(),
}));

describe('new games carousel', () => {
  const games = [
    {
      slug: 'game-1',
      name: 'Game One',
      category: 'puzzle',
      price: 'Free',
      shortDescription: 'Game One description',
      cardImage: '/game-1-card.jpg',
      rating: 4.8,
      likesCount: 1200,
    },
    {
      slug: 'game-2',
      name: 'Game Two',
      category: 'puzzle',
      price: 'Free',
      shortDescription: 'Game Two description',
      cardImage: '/game-2-card.jpg',
      rating: 4.5,
      likesCount: 900,
    },
    {
      slug: 'game-3',
      name: 'Game Three',
      category: 'puzzle',
      price: 'Free',
      shortDescription: 'Game Three description',
      cardImage: '/game-3-card.jpg',
      rating: 4.2,
      likesCount: 800,
    },
    {
      slug: 'game-4',
      name: 'Game Four',
      category: 'puzzle',
      price: 'Free',
      shortDescription: 'Game Four description',
      cardImage: '/game-4-card.jpg',
      rating: 4.1,
      likesCount: 700,
    },
    {
      slug: 'game-5',
      name: 'Game Five',
      category: 'puzzle',
      price: 'Free',
      shortDescription: 'Game Five description',
      cardImage: '/game-5-card.jpg',
      rating: 4,
      likesCount: 600,
    },
    {
      slug: 'game-6',
      name: 'Game Six',
      category: 'puzzle',
      price: 'Free',
      shortDescription: 'Game Six description',
      cardImage: '/game-6-card.jpg',
      rating: 3.9,
      likesCount: 500,
    },
  ];

  afterEach(() => {
    vi.clearAllMocks();
    document.body.replaceChildren();
    history.replaceState({}, '', '/');
  });

  it('loads featured games and renders the carousel', async () => {
    vi.mocked(fetchFeaturedGames).mockResolvedValue(games);

    const section = createNewGames();
    document.body.append(section);

    await vi.waitFor(() => {
      expect(section.querySelectorAll('.game-card:not(.game-card--skeleton)')).toHaveLength(5);
    });

    expect(fetchFeaturedGames).toHaveBeenCalledOnce();

    const previousButton = section.querySelector<HTMLButtonElement>(
      '.new-games__control:not(.new-games__control--next)',
    );

    const nextButton = section.querySelector<HTMLButtonElement>('.new-games__control--next');

    expect(previousButton?.disabled).toBe(false);
    expect(nextButton?.disabled).toBe(false);

    expect(section.textContent).toContain('Game One');
    expect(section.textContent).toContain('Game Three');
  });

  it('shows an error state when featured games fail to load', async () => {
    vi.mocked(fetchFeaturedGames).mockRejectedValue(new Error('Request failed'));

    const section = createNewGames();
    document.body.append(section);

    await vi.waitFor(() => {
      expect(section.querySelector('.new-games__error')).not.toBeNull();
    });

    expect(showSnackbar).toHaveBeenCalledWith({
      message: 'Failed to load featured games.',
      variant: 'error',
    });
  });

  it('retries loading featured games after an error', async () => {
    vi.mocked(fetchFeaturedGames)
      .mockRejectedValueOnce(new Error('Request failed'))
      .mockResolvedValueOnce([]);

    const section = createNewGames();
    document.body.append(section);

    await vi.waitFor(() => {
      expect(section.querySelector('.new-games__retry')).not.toBeNull();
    });

    const retryButton = section.querySelector<HTMLButtonElement>('.new-games__retry');

    if (!retryButton) {
      throw new Error('Retry button not found');
    }

    retryButton.click();

    await vi.waitFor(() => {
      expect(fetchFeaturedGames).toHaveBeenCalledTimes(2);
    });

    expect(section.querySelector('.new-games__empty')).not.toBeNull();
  });

  it('shows an empty state when there are no featured games', async () => {
    vi.mocked(fetchFeaturedGames).mockResolvedValue([]);

    const section = createNewGames();
    document.body.append(section);

    await vi.waitFor(() => {
      expect(section.querySelector('.new-games__empty')).not.toBeNull();
    });

    expect(section.textContent).toContain('No featured games available.');
  });

  it('moves forward and backward through the carousel', async () => {
    vi.mocked(fetchFeaturedGames).mockResolvedValue(games);

    const section = createNewGames();
    document.body.append(section);

    await vi.waitFor(() => {
      expect(section.querySelectorAll('.game-card:not(.game-card--skeleton)')).toHaveLength(5);
    });

    const previousButton = section.querySelector<HTMLButtonElement>(
      '.new-games__control:not(.new-games__control--next)',
    );

    const nextButton = section.querySelector<HTMLButtonElement>('.new-games__control--next');

    if (!previousButton || !nextButton) {
      throw new Error('Carousel controls not found');
    }

    expect(section.textContent).not.toContain('Game Six');

    nextButton.click();

    expect(section.textContent).toContain('Game Six');

    previousButton.click();

    expect(section.textContent).not.toContain('Game Six');
    expect(section.textContent).toContain('Game One');
  });

  it('opens game details when the game is present in the URL', () => {
    history.replaceState({}, '', '/?game=game-3');

    createNewGames();

    expect(createGameDetailsDialog).toHaveBeenCalledWith('game-3', expect.any(Function));
  });
});
