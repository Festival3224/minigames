import gamesData from '../data/all-games-seed.json';

import arrowBack from '../assets/icons/arrow_back.svg';
import arrowForward from '../assets/icons/arrow_forward.svg';

import { createGameCard } from './game-card';

const gameImages = import.meta.glob('../assets/home/*-card.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function getGameImage(cardImage: string): string {
  const fileName = cardImage.split('/').pop();

  return fileName ? (gameImages[`../assets/home/${fileName}`] ?? '') : '';
}

const sliderOrder = [
  'tailside-cozy-cafe-sim',
  'islanders-new-shores',
  'vacation-cafe-simulator',
  'winter-burrow',
  'shelve-the-potions',
  'heartopia',
  'palia',
  'cat-mail-co',
  'tiny-glade',
];

const featuredGames = sliderOrder
  .map((slug) => gamesData.data.find((game) => game.slug === slug))
  .filter((game) => game !== undefined)
  .map((game) => ({
    slug: game.slug,
    title: game.name,
    imageSrc: getGameImage(game.cardImage),
    rating: game.rating.toFixed(1),
    likes: `${(game.likesCount / 1000).toFixed(1)}K`,
  }));

const cardClasses = [
  'game-card--edge',
  'game-card--regular',
  'game-card--featured',
  'game-card--regular',
  'game-card--edge',
];

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

  const previousButton = section.querySelector<HTMLButtonElement>(
    '.new-games__control:not(.new-games__control--next)',
  );

  const nextButton = section.querySelector<HTMLButtonElement>('.new-games__control--next');

  let currentIndex = 0;

  function getVisibleGames() {
    return Array.from({ length: 5 }, (_, offset) => {
      const gameIndex = (currentIndex + offset) % featuredGames.length;

      return featuredGames[gameIndex];
    });
  }

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

  renderSlider();

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
    const cards = [...track.children] as HTMLElement[];

    const firstCard = cards[0];

    if (!firstCard) {
      return;
    }

    currentIndex = (currentIndex + 1) % featuredGames.length;

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
    const cards = [...track.children] as HTMLElement[];

    const lastCard = cards.at(-1);

    if (!lastCard) {
      return;
    }

    currentIndex = (currentIndex - 1 + featuredGames.length) % featuredGames.length;

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

  const swipeThreshold = 50;

  track.addEventListener('pointerdown', (event) => {
    isPointerDown = true;

    pointerStartX = event.clientX;
    pointerCurrentX = event.clientX;

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
      resetAutoplay();
      return;
    }
    resumeAutoplay();
  });

  track.addEventListener('pointercancel', (event) => {
    isPointerDown = false;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    resumeAutoplay();
  });

  previousButton?.addEventListener('click', showPreviousSlide);

  nextButton?.addEventListener('click', showNextSlide);

  startAutoplay();

  return section;
}
