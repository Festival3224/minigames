// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import { fetchCategories, fetchLibraryGames, LibraryDataNotFoundError } from '../api/games-api';

import { createLibraryPage } from './library';

vi.mock('../api/games-api', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../api/games-api')>();

  return {
    ...actual,
    fetchCategories: vi.fn(),
    fetchLibraryGames: vi.fn(),
  };
});

vi.mock('../components/header', () => ({
  createHeader: vi.fn(() => document.createElement('header')),
}));

vi.mock('../components/footer', () => ({
  createFooter: vi.fn(() => document.createElement('footer')),
}));

vi.mock('../components/library-game-card', () => ({
  createLibraryGameCard: vi.fn(({ title }: { title: string }) => {
    const card = document.createElement('article');
    card.className = 'library-game-card';
    card.textContent = title;

    return card;
  }),
}));

vi.mock('../components/pagination', () => ({
  createPagination: vi.fn(() => document.createElement('div')),
}));

describe('library page', () => {
  afterEach(() => {
    vi.clearAllMocks();
    document.body.replaceChildren();
    history.replaceState({}, '', '/');
  });

  it('loads categories and games', async () => {
    vi.mocked(fetchCategories).mockResolvedValue([
      {
        slug: 'all',
        label: 'All Games',
        isDefault: true,
      },
      {
        slug: 'puzzle',
        label: 'Puzzle',
        isDefault: false,
      },
    ]);

    vi.mocked(fetchLibraryGames).mockResolvedValue({
      data: [
        {
          slug: 'forest-game',
          name: 'Forest Game',
          category: 'puzzle',
          price: 'Free',
          shortDescription: 'Explore the forest.',
          cardImage: '/forest-card.jpg',
          rating: 4.8,
          likesCount: 1200,
        },
      ],
      meta: {
        page: 1,
        limit: 6,
        totalItems: 1,
        totalPages: 1,
      },
    });

    const page = createLibraryPage();
    document.body.append(page);

    await vi.waitFor(() => {
      expect(page.textContent).toContain('Forest Game');
    });

    expect(page.textContent).toContain('All Games');
    expect(page.textContent).toContain('Puzzle');

    expect(fetchCategories).toHaveBeenCalledOnce();
    expect(fetchLibraryGames).toHaveBeenCalledWith(1, 'all', 'rating-desc');
  });

  it('shows an empty state when there are no games', async () => {
    vi.mocked(fetchCategories).mockResolvedValue([]);

    vi.mocked(fetchLibraryGames).mockResolvedValue({
      data: [],
      meta: {
        page: 1,
        limit: 6,
        totalItems: 0,
        totalPages: 0,
      },
    });

    const page = createLibraryPage();
    document.body.append(page);

    await vi.waitFor(() => {
      expect(page.textContent).toContain('No games available.');
    });
  });

  it('shows an error state when games fail to load', async () => {
    vi.mocked(fetchCategories).mockResolvedValue([]);

    vi.mocked(fetchLibraryGames).mockRejectedValue(new Error('Request failed'));

    const page = createLibraryPage();
    document.body.append(page);

    await vi.waitFor(() => {
      expect(page.textContent).toContain('Failed to load games.');
    });

    expect(page.querySelector('.library__retry')).not.toBeNull();
  });

  it('retries loading games after an error', async () => {
    vi.mocked(fetchCategories).mockResolvedValue([]);

    vi.mocked(fetchLibraryGames)
      .mockRejectedValueOnce(new Error('Request failed'))
      .mockResolvedValueOnce({
        data: [],
        meta: {
          page: 1,
          limit: 6,
          totalItems: 0,
          totalPages: 0,
        },
      });

    const page = createLibraryPage();
    document.body.append(page);

    await vi.waitFor(() => {
      expect(page.querySelector('.library__retry')).not.toBeNull();
    });

    const retryButton = page.querySelector<HTMLButtonElement>('.library__retry');

    if (!retryButton) {
      throw new Error('Retry button not found');
    }

    retryButton.click();

    await vi.waitFor(() => {
      expect(fetchLibraryGames).toHaveBeenCalledTimes(2);
    });

    expect(page.textContent).toContain('No games available.');
  });

  it('loads library state from the URL', async () => {
    history.replaceState({}, '', '/library?category=puzzle&sort=name-asc&page=2');

    vi.mocked(fetchCategories).mockResolvedValue([]);

    vi.mocked(fetchLibraryGames).mockResolvedValue({
      data: [],
      meta: {
        page: 2,
        limit: 6,
        totalItems: 0,
        totalPages: 2,
      },
    });

    const page = createLibraryPage();
    document.body.append(page);

    await vi.waitFor(() => {
      expect(fetchLibraryGames).toHaveBeenCalledWith(2, 'puzzle', 'name-asc');
    });
  });

  it('loads games for the selected category', async () => {
    vi.mocked(fetchCategories).mockResolvedValue([
      {
        slug: 'all',
        label: 'All Games',
        isDefault: true,
      },
      {
        slug: 'puzzle',
        label: 'Puzzle',
        isDefault: false,
      },
    ]);

    vi.mocked(fetchLibraryGames).mockResolvedValue({
      data: [],
      meta: {
        page: 1,
        limit: 6,
        totalItems: 0,
        totalPages: 1,
      },
    });

    const page = createLibraryPage();
    document.body.append(page);

    await vi.waitFor(() => {
      expect(page.textContent).toContain('Puzzle');
    });

    const puzzleButton = page.querySelector<HTMLButtonElement>('[data-category="puzzle"]');

    if (!puzzleButton) {
      throw new Error('Puzzle filter button not found');
    }

    puzzleButton.click();

    await vi.waitFor(() => {
      expect(fetchLibraryGames).toHaveBeenLastCalledWith(1, 'puzzle', 'rating-desc');
    });
  });

  it('loads games with the selected sort option', async () => {
    vi.mocked(fetchCategories).mockResolvedValue([]);

    vi.mocked(fetchLibraryGames).mockResolvedValue({
      data: [],
      meta: {
        page: 1,
        limit: 6,
        totalItems: 0,
        totalPages: 1,
      },
    });

    const page = createLibraryPage();
    document.body.append(page);

    const sortButton = page.querySelector<HTMLButtonElement>('.library__sort');

    const nameAscendingOption = page.querySelector<HTMLButtonElement>('[data-sort="name-asc"]');

    if (!sortButton || !nameAscendingOption) {
      throw new Error('Sort controls not found');
    }

    sortButton.click();
    nameAscendingOption.click();

    await vi.waitFor(() => {
      expect(fetchLibraryGames).toHaveBeenLastCalledWith(1, 'all', 'name-asc');
    });

    expect(sortButton.textContent).toContain('Name A→Z');
  });

  it('shows a not found state for invalid library URL data', async () => {
    vi.mocked(fetchCategories).mockResolvedValue([]);

    vi.mocked(fetchLibraryGames).mockRejectedValue(
      new LibraryDataNotFoundError('Library data not found'),
    );

    const page = createLibraryPage();
    document.body.append(page);

    await vi.waitFor(() => {
      expect(page.textContent).toContain('Data Not Found');
    });

    expect(page.textContent).toContain('No library data matches the current URL parameters.');

    expect(page.querySelector('.library__retry')).toBeNull();
  });
});
