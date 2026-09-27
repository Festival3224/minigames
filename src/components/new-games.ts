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

  const renderSlider = (): void => {
    track.replaceChildren();

    const visibleGames = featuredGames.slice(0, 5);

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

  const previousButton = section.querySelector<HTMLButtonElement>(
    '.new-games__control:not(.new-games__control--next)',
  );

  const nextButton = section.querySelector<HTMLButtonElement>('.new-games__control--next');

  let currentIndex = 0;

  const updateSlider = (): void => {
    const firstCard = track.firstElementChild as HTMLElement | null;

    if (!firstCard) {
      return;
    }

    const gap = Number(getComputedStyle(track).gap) || 0;
    const step = firstCard.offsetWidth + gap;

    track.style.transform = `translateX(-${currentIndex * step}px)`;
  };

  previousButton?.addEventListener('click', () => {
    if (currentIndex === 0) {
      return;
    }

    currentIndex -= 1;
    updateSlider();
  });

  nextButton?.addEventListener('click', () => {
    if (currentIndex >= featuredGames.length - 1) {
      return;
    }

    currentIndex += 1;
    updateSlider();
  });

  return section;
}
