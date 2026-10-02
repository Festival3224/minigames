import { createHeader } from '../components/header';
import { createPagination } from '../components/pagination';
import { createGameDetailsDialog } from '../components/game-details-dialog';
import { createFooter } from '../components/footer';

import { createLibraryGameCard } from '../components/library-game-card';

import { fetchCategories, fetchLibraryGames } from '../api/games-api';

import { formatLikesCount, formatRating } from '../utils/format';

import { hideSnackbar, showSnackbar } from '../components/snackbar';
import { restoreAuthDialogFromUrl } from '../components/auth-dialog';

type LibrarySort = 'rating-desc' | 'rating-asc' | 'name-asc' | 'name-desc';

interface LibraryUrlState {
  category: string;
  sort: LibrarySort;
  page: number;
}

function updateGameInUrl(slug?: string): void {
  const parameters = new URLSearchParams(location.search);

  if (slug) {
    parameters.set('game', slug);
  } else {
    parameters.delete('game');
  }

  const base = import.meta.env.BASE_URL;
  const path = `${base}library?${parameters.toString()}`;

  history.pushState({}, '', path);
}

function updateLibraryUrl(state: LibraryUrlState): void {
  const parameters = new URLSearchParams();

  parameters.set('category', state.category);
  parameters.set('sort', state.sort);
  parameters.set('page', String(state.page));

  const base = import.meta.env.BASE_URL;
  const path = `${base}library?${parameters.toString()}`;

  history.pushState({}, '', path);
}

function getLibraryStateFromUrl(): LibraryUrlState {
  const parameters = new URLSearchParams(location.search);

  const category = parameters.get('category') ?? 'all';

  const sortParameter = parameters.get('sort');
  const allowedSorts: LibrarySort[] = ['rating-desc', 'rating-asc', 'name-asc', 'name-desc'];

  const sort =
    sortParameter && allowedSorts.includes(sortParameter as LibrarySort)
      ? (sortParameter as LibrarySort)
      : 'rating-desc';

  const pageParameter = Number(parameters.get('page'));
  const page = Number.isSafeInteger(pageParameter) && pageParameter > 0 ? pageParameter : 1;

  return {
    category,
    sort,
    page,
  };
}

const gameImages = import.meta.glob('../assets/**/*-card.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function getGameImage(cardImage: string): string {
  const fileName = cardImage.split('/').pop();

  if (!fileName) {
    return '';
  }

  const imagePath = Object.keys(gameImages).find((path) => path.endsWith(`/${fileName}`));

  return imagePath ? gameImages[imagePath] : '';
}

export function createLibraryPage(): HTMLElement {
  const initialState = getLibraryStateFromUrl();

  const page = document.createElement('div');
  page.className = 'page';

  page.append(createHeader());

  const main = document.createElement('main');
  main.className = 'library';

  const titleSection = document.createElement('section');
  titleSection.className = 'library__title-section';

  const title = document.createElement('h1');
  title.className = 'library__title';
  title.textContent = 'Game Library';

  const subtitle = document.createElement('p');
  subtitle.className = 'library__subtitle';
  subtitle.textContent = 'Browse our collection of casual mini-games';

  titleSection.append(title, subtitle);

  const controls = document.createElement('div');
  controls.className = 'library__controls';

  const filters = document.createElement('div');
  filters.className = 'library__filters';

  // chips
  let activeCategory = initialState.category;
  let activeSort = initialState.sort;

  const renderCategoriesLoading = (): void => {
    filters.replaceChildren();

    const loading = document.createElement('span');
    loading.className = 'library__filters-loading';
    loading.textContent = 'Loading categories...';

    filters.append(loading);
  };

  const renderCategoriesEmpty = (): void => {
    filters.replaceChildren();

    const empty = document.createElement('span');
    empty.className = 'library__filters-empty';
    empty.textContent = 'No categories available.';

    filters.append(empty);
  };

  const renderCategoriesError = (): void => {
    filters.replaceChildren();

    const error = document.createElement('div');
    error.className = 'library__filters-error';

    error.innerHTML = /* html */ `
      <span>Failed to load categories.</span>
      <button class="library__filters-retry" type="button">
        Retry
      </button>
    `;

    const retryButton = error.querySelector<HTMLButtonElement>('.library__filters-retry');

    retryButton?.addEventListener('click', () => {
      void loadCategories();
    });

    filters.append(error);
  };

  const loadCategories = async (): Promise<void> => {
    renderCategoriesLoading();

    try {
      const categories = await fetchCategories();

      if (categories.length === 0) {
        renderCategoriesEmpty();
        return;
      }

      filters.replaceChildren();

      for (const category of categories) {
        const button = document.createElement('button');

        button.className = 'library__filter';
        button.type = 'button';
        button.textContent = category.label;
        button.dataset.category = category.slug;

        // button.setAttribute('aria-pressed', String(category.isDefault));

        const isActive = category.slug === activeCategory;

        button.setAttribute('aria-pressed', String(isActive));

        if (isActive) {
          button.classList.add('library__filter--active');
        }

        filters.append(button);
      }
    } catch {
      renderCategoriesError();

      showSnackbar({
        message: 'Failed to load categories.',
        variant: 'error',
      });
    }
  };

  void loadCategories();

  let isPointerDown = false;
  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;
  let dragDistance = 0;

  const dragThreshold = 5;

  filters.addEventListener('pointerdown', (event) => {
    isPointerDown = true;
    isDragging = false;

    startX = event.clientX;
    startScrollLeft = filters.scrollLeft;
    dragDistance = 0;
  });

  filters.addEventListener('pointermove', (event) => {
    if (!isPointerDown) {
      return;
    }

    const distance = event.clientX - startX;
    dragDistance = Math.abs(distance);

    if (dragDistance <= dragThreshold) {
      return;
    }

    if (!isDragging) {
      isDragging = true;
      filters.setPointerCapture(event.pointerId);
    }

    filters.scrollLeft = startScrollLeft - distance;
  });

  filters.addEventListener('pointerup', (event) => {
    isPointerDown = false;

    if (isDragging && filters.hasPointerCapture(event.pointerId)) {
      filters.releasePointerCapture(event.pointerId);
    }

    isDragging = false;
  });

  filters.addEventListener('pointercancel', () => {
    isPointerDown = false;
    isDragging = false;
  });

  filters.addEventListener('click', (event) => {
    if (dragDistance > dragThreshold) {
      return;
    }

    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest<HTMLButtonElement>('.library__filter');

    if (!button) {
      return;
    }

    const category = button.dataset.category;

    if (!category) {
      return;
    }

    for (const filterButton of filters.querySelectorAll<HTMLButtonElement>('.library__filter')) {
      filterButton.classList.remove('library__filter--active');
      filterButton.setAttribute('aria-pressed', 'false');
    }

    button.classList.add('library__filter--active');
    button.setAttribute('aria-pressed', 'true');

    activeCategory = category;
    currentPage = 1;

    updateLibraryUrl({
      category: activeCategory,
      sort: activeSort,
      page: currentPage,
    });

    void loadLibraryGames(1);
  });

  const sort = document.createElement('div');
  sort.className = 'library__sort-wrapper';

  const sortButton = document.createElement('button');
  sortButton.className = 'library__sort';
  sortButton.type = 'button';
  sortButton.setAttribute('aria-expanded', 'false');
  sortButton.setAttribute('aria-haspopup', 'listbox');

  const sortMenu = document.createElement('div');
  sortMenu.className = 'library__sort-menu';
  sortMenu.setAttribute('role', 'listbox');
  sortMenu.hidden = true;

  const sortOptions = [
    { label: 'Rating ↓', value: 'rating-desc' },
    { label: 'Rating ↑', value: 'rating-asc' },
    { label: 'Name A→Z', value: 'name-asc' },
    { label: 'Name Z→A', value: 'name-desc' },
  ];

  const activeSortOption = sortOptions.find((option) => option.value === activeSort);

  const sortLabel = document.createElement('span');
  sortLabel.textContent = `Sort by: ${activeSortOption?.label ?? 'Rating ↓'}`;

  const sortIcon = document.createElement('span');
  sortIcon.className = 'material-symbols-outlined';
  sortIcon.setAttribute('aria-hidden', 'true');
  sortIcon.textContent = 'arrow_drop_down';

  sortButton.append(sortLabel, sortIcon);

  for (const option of sortOptions) {
    const optionButton = document.createElement('button');

    optionButton.className = 'library__sort-option';
    optionButton.type = 'button';
    optionButton.setAttribute('role', 'option');
    optionButton.textContent = option.label;
    optionButton.dataset.sort = option.value;

    if (option.value === activeSort) {
      optionButton.classList.add('library__sort-option--active');
      optionButton.setAttribute('aria-selected', 'true');
    } else {
      optionButton.setAttribute('aria-selected', 'false');
    }

    sortMenu.append(optionButton);
  }

  sortButton.addEventListener('click', () => {
    const isOpen = !sortMenu.hidden;

    sortMenu.hidden = isOpen;
    sortButton.setAttribute('aria-expanded', String(!isOpen));
  });

  const sortOptionButtons = sortMenu.querySelectorAll<HTMLButtonElement>('.library__sort-option');

  for (const optionButton of sortOptionButtons) {
    optionButton.addEventListener('click', () => {
      for (const button of sortOptionButtons) {
        button.classList.remove('library__sort-option--active');
        button.setAttribute('aria-selected', 'false');
      }

      optionButton.classList.add('library__sort-option--active');
      optionButton.setAttribute('aria-selected', 'true');

      sortLabel.textContent = `Sort by: ${optionButton.textContent}`;

      const sortValue = optionButton.dataset.sort as LibrarySort | undefined;

      if (!sortValue) {
        return;
      }

      activeSort = sortValue;
      currentPage = 1;

      updateLibraryUrl({
        category: activeCategory,
        sort: activeSort,
        page: currentPage,
      });

      void loadLibraryGames(1);

      sortMenu.hidden = true;
      sortButton.setAttribute('aria-expanded', 'false');
    });
  }

  sort.append(sortButton, sortMenu);

  const gamesSection = document.createElement('div');
  gamesSection.className = 'library__games';

  const paginationContainer = document.createElement('div');
  let currentPage = initialState.page;

  // skeleton
  const renderGamesSkeleton = (): void => {
    gamesSection.replaceChildren();

    for (let index = 0; index < 6; index += 1) {
      const skeleton = document.createElement('article');

      skeleton.className = 'library-game-card library-game-card--skeleton';

      gamesSection.append(skeleton);
    }
  };

  // Empty state
  const renderGamesEmptyState = (): void => {
    gamesSection.replaceChildren();

    const emptyState = document.createElement('div');

    emptyState.className = 'library__empty';

    emptyState.innerHTML = /* html */ `
      <p class="library__empty-title">No games available.</p>
      <p class="library__empty-text">Please check back later.</p>
    `;

    gamesSection.append(emptyState);
  };

  // Error state + Retry
  const renderGamesErrorState = (): void => {
    gamesSection.replaceChildren();
    const errorState = document.createElement('div');
    errorState.className = 'library__error';
    errorState.innerHTML = /* html */ `
      <p class="library__error-title">Failed to load games.</p>
      <button class="library__retry" type="button">
        Retry
      </button>
    `;

    const retryButton = errorState.querySelector<HTMLButtonElement>('.library__retry');

    retryButton?.addEventListener('click', () => {
      void loadLibraryGames();
    });

    gamesSection.append(errorState);
  };

  const loadLibraryGames = async (page = 1): Promise<void> => {
    hideSnackbar();
    renderGamesSkeleton();

    try {
      const result = await fetchLibraryGames(page, activeCategory, activeSort);

      currentPage = result.meta.page;

      if (result.data.length === 0) {
        renderGamesEmptyState();

        paginationContainer.replaceChildren(createPagination(1, 1, () => {}));

        return;
      }

      gamesSection.replaceChildren();

      for (const game of result.data) {
        gamesSection.append(
          createLibraryGameCard({
            slug: game.slug,
            title: game.name,
            imageSrc: getGameImage(game.cardImage),
            category: game.category,
            description: game.shortDescription,
            rating: formatRating(game.rating),
            likes: formatLikesCount(game.likesCount),
            price: game.price,
          }),
        );
      }

      paginationContainer.replaceChildren(
        createPagination(result.meta.totalPages, currentPage, (selectedPage) => {
          currentPage = selectedPage;

          updateLibraryUrl({
            category: activeCategory,
            sort: activeSort,
            page: currentPage,
          });

          void loadLibraryGames(currentPage);
        }),
      );
    } catch {
      renderGamesErrorState();

      showSnackbar({
        message: 'Failed to load games.',
        variant: 'error',
      });
    }
  };

  void loadLibraryGames(currentPage);

  const gameSlug = new URLSearchParams(location.search).get('game');

  if (gameSlug) {
    const existingDialog = document.querySelector('.game-details-backdrop');

    if (!existingDialog) {
      const dialog = createGameDetailsDialog(gameSlug, () => {
        history.back();
      });

      document.body.append(dialog);
    }
  }

  gamesSection.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const detailsButton = target.closest('.library-game-card__details');

    if (!detailsButton) {
      return;
    }

    const card = detailsButton.closest<HTMLElement>('.library-game-card');
    const slug = card?.dataset.slug;

    if (!slug) {
      return;
    }

    updateGameInUrl(slug);

    const dialog = createGameDetailsDialog(slug, () => {
      history.back();
    });

    document.body.append(dialog);
  });

  controls.append(filters, sort);
  main.append(titleSection, controls, gamesSection, paginationContainer);

  page.append(main);
  page.append(createFooter());

  restoreAuthDialogFromUrl();

  return page;
}
