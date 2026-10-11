import { fetchFeaturedGames } from '../api/games-api';

import arrowBack from '../assets/icons/arrow_back.svg';
import arrowForward from '../assets/icons/arrow_forward.svg';

import { createGameCard } from './game-card';
import { createGameDetailsDialog } from './game-details-dialog';

import { showSnackbar } from './snackbar';

function updateHomeGameInUrl(slug?: string): void {
  const parameters = new URLSearchParams(location.search);

  if (slug) {
    parameters.set('game', slug);
  } else {
    parameters.delete('game');
  }

  const base = import.meta.env.BASE_URL;
  const query = parameters.toString();
  const path = query ? `${base}?${query}` : base;

  history.pushState({}, '', path);
}

const gameImages = import.meta.glob('../assets/home/*-card.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function getGameImage(cardImage: string): string {
  const fileName = cardImage.split('/').pop();

  return fileName ? (gameImages[`../assets/home/${fileName}`] ?? '') : '';
}

const cardClasses = [
  'game-card--edge',
  'game-card--regular',
  'game-card--featured',
  'game-card--regular',
  'game-card--edge',
];

const carouselRuntime = (() => {
  let index = 0;

  return {
    getIndex(): number {
      return index;
    },

    setIndex(nextIndex: number): void {
      index = nextIndex;
    },
  };
})();

export function createNewGames(): HTMLElement {
  const section = document.createElement('section');

  section.className = 'new-games';

  section.innerHTML = /* html */ `
    <div class="new-games__header">
      <h2 class="new-games__title">New Games</h2>

      <div class="new-games__controls">
        <button
          class="new-games__control"
          type="button"
          aria-label="Previous games"
        >
          <img src="${arrowBack}" alt="" aria-hidden="true" />
        </button>

        <button
          class="new-games__control new-games__control--next"
          type="button"
          aria-label="Next games"
        >
          <img src="${arrowForward}" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="new-games__viewport">
      <div class="new-games__track">
        <!-- game cards will go here -->
      </div>
    </div>
  `;

  const track = section.querySelector<HTMLDivElement>('.new-games__track');

  if (!track) {
    throw new Error('New games track not found');
  }

  let featuredGames: {
    slug: string;
    title: string;
    imageSrc: string;
    rating: string;
    likes: string;
  }[] = [];

  const previousButton = section.querySelector<HTMLButtonElement>(
    '.new-games__control:not(.new-games__control--next)',
  );

  const nextButton = section.querySelector<HTMLButtonElement>('.new-games__control--next');

  const setControlsDisabled = (isDisabled: boolean): void => {
    if (previousButton) {
      previousButton.disabled = isDisabled;
    }

    if (nextButton) {
      nextButton.disabled = isDisabled;
    }
  };

  let currentIndex = carouselRuntime.getIndex();

  function getVisibleGames() {
    return Array.from({ length: 5 }, (_, offset) => {
      const gameIndex = (currentIndex + offset) % featuredGames.length;

      return featuredGames[gameIndex];
    });
  }

  const renderSkeleton = (): void => {
    track.replaceChildren();

    for (let index = 0; index < 5; index += 1) {
      const skeleton = document.createElement('div');

      skeleton.className = `game-card game-card--skeleton ${cardClasses[index]}`;

      track.append(skeleton);
    }
  };

  const renderEmptyState = (): void => {
    track.replaceChildren();

    const emptyState = document.createElement('div');

    emptyState.className = 'new-games__empty';

    emptyState.innerHTML = /* html */ `
      <p class="new-games__empty-title">No featured games available.</p>
      <p class="new-games__empty-text">Please check back later.</p>
    `;

    track.append(emptyState);
  };

  const renderSlider = (): void => {
    track.replaceChildren();

    const visibleGames = getVisibleGames();

    for (const [index, game] of visibleGames.entries()) {
      track.append(
        createGameCard({
          ...game,
          className: cardClasses[index],
        }),
      );
    }
  };

  const loadFeaturedGames = async (): Promise<void> => {
    // hideSnackbar();

    setControlsDisabled(true);
    renderSkeleton();

    try {
      const games = await fetchFeaturedGames();

      if (games.length === 0) {
        renderEmptyState();
        return;
      }

      featuredGames = games.map((game) => ({
        slug: game.slug,
        title: game.name,
        imageSrc: getGameImage(game.cardImage),
        rating: game.rating.toFixed(1),
        likes: `${(game.likesCount / 1000).toFixed(1)}K`,
      }));

      setControlsDisabled(false);
      renderSlider();

      const isGameDetailsOpen = new URLSearchParams(location.search).has('game');

      if (!isGameDetailsOpen) {
        startAutoplay();
      }
    } catch {
      renderErrorState();

      showSnackbar({
        message: 'Failed to load featured games.',
        variant: 'error',
      });
    }
  };

  const renderErrorState = (): void => {
    track.replaceChildren();

    const errorState = document.createElement('div');

    errorState.className = 'new-games__error';

    errorState.innerHTML = /* html */ `
      <p class="new-games__error-title">Failed to load featured games.</p>
      <button class="new-games__retry" type="button">
        Retry
      </button>
    `;

    const retryButton = errorState.querySelector<HTMLButtonElement>('.new-games__retry');

    retryButton?.addEventListener('click', () => {
      void loadFeaturedGames();
    });

    track.append(errorState);
  };

  void loadFeaturedGames();

  function setCardPositionClasses(cards: HTMLElement[]): void {
    for (const [index, card] of cards.entries()) {
      card.classList.remove('game-card--edge', 'game-card--regular', 'game-card--featured');

      const className = cardClasses[index];

      if (className) {
        card.classList.add(className);
      }
    }
  }

  const showNextSlide = (): void => {
    if (featuredGames.length === 0) {
      return;
    }

    const cards = [...track.children] as HTMLElement[];

    const firstCard = cards[0];

    if (!firstCard) {
      return;
    }

    currentIndex = (currentIndex + 1) % featuredGames.length;
    carouselRuntime.setIndex(currentIndex);
    const nextGameIndex = (currentIndex + 4) % featuredGames.length;

    const nextGame = featuredGames[nextGameIndex];

    const newCard = createGameCard({
      ...nextGame,
      className: 'game-card--edge',
    });

    firstCard.remove();
    track.append(newCard);

    const updatedCards = [...track.children] as HTMLElement[];

    setCardPositionClasses(updatedCards);
  };

  const showPreviousSlide = (): void => {
    if (featuredGames.length === 0) {
      return;
    }

    const cards = [...track.children] as HTMLElement[];

    const lastCard = cards.at(-1);

    if (!lastCard) {
      return;
    }

    currentIndex = (currentIndex - 1 + featuredGames.length) % featuredGames.length;
    carouselRuntime.setIndex(currentIndex);

    const previousGame = featuredGames[currentIndex];

    const newCard = createGameCard({
      ...previousGame,
      className: 'game-card--edge',
    });

    lastCard.remove();
    track.prepend(newCard);

    const updatedCards = [...track.children] as HTMLElement[];

    setCardPositionClasses(updatedCards);
  };

  const autoplayDelay = 4000;

  let autoplayTimer: number | undefined;
  let autoplayStartedAt = 0;
  let autoplayRemaining = autoplayDelay;

  const startAutoplay = (delay = autoplayDelay): void => {
    clearTimeout(autoplayTimer);

    autoplayRemaining = delay;
    autoplayStartedAt = Date.now();

    autoplayTimer = setTimeout(() => {
      showNextSlide();
      startAutoplay();
    }, delay);
  };

  const pauseAutoplay = (): void => {
    if (autoplayTimer === undefined) {
      return;
    }

    const elapsed = Date.now() - autoplayStartedAt;

    autoplayRemaining = Math.max(0, autoplayRemaining - elapsed);

    clearTimeout(autoplayTimer);
    autoplayTimer = undefined;
  };

  const resumeAutoplay = (): void => {
    startAutoplay(autoplayRemaining);
  };

  const resetAutoplay = (): void => {
    startAutoplay();
  };

  let pointerStartX = 0;
  let pointerCurrentX = 0;
  let isPointerDown = false;
  let pointerStartCard: HTMLElement | undefined;

  const swipeThreshold = 50;

  track.addEventListener('pointerdown', (event) => {
    const target = event.target;

    if (target instanceof HTMLElement && target.closest('.new-games__retry')) {
      return;
    }

    isPointerDown = true;
    pointerStartX = event.clientX;
    pointerCurrentX = event.clientX;

    pointerStartCard =
      target instanceof HTMLElement
        ? (target.closest<HTMLElement>('.game-card') ?? undefined)
        : undefined;

    track.setPointerCapture(event.pointerId);

    event.preventDefault();

    pauseAutoplay();
  });

  track.addEventListener('pointermove', (event) => {
    if (!isPointerDown) {
      return;
    }

    pointerCurrentX = event.clientX;
  });

  track.addEventListener('pointerup', (event) => {
    if (!isPointerDown) {
      return;
    }

    isPointerDown = false;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    const distance = pointerCurrentX - pointerStartX;
    const didSwipe = Math.abs(distance) >= swipeThreshold;

    if (didSwipe) {
      if (distance < 0) {
        showNextSlide();
      } else {
        showPreviousSlide();
      }
      pointerStartCard = undefined;
      resetAutoplay();
      return;
    }

    if (!pointerStartCard) {
      resumeAutoplay();
      return;
    }

    const slug = pointerStartCard.dataset.slug;

    if (!slug) {
      resumeAutoplay();
      pointerStartCard = undefined;
      return;
    }

    pauseAutoplay();

    updateHomeGameInUrl(slug);

    const dialog = createGameDetailsDialog(slug, () => {
      history.back();
      // resetAutoplay();
    });

    document.body.append(dialog);

    pointerStartCard = undefined;
  });

  track.addEventListener('pointercancel', (event) => {
    isPointerDown = false;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    resumeAutoplay();
  });

  previousButton?.addEventListener('click', () => {
    showPreviousSlide();
    resetAutoplay();
  });

  nextButton?.addEventListener('click', () => {
    showNextSlide();
    resetAutoplay();
  });

  const gameSlug = new URLSearchParams(location.search).get('game');

  if (gameSlug) {
    pauseAutoplay();

    const existingDialog = document.querySelector('.game-details-backdrop');

    if (!existingDialog) {
      const dialog = createGameDetailsDialog(gameSlug, () => {
        history.back();
        // resetAutoplay();
      });

      document.body.append(dialog);
    }
  }

  return section;
}
