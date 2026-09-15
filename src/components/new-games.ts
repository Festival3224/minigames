import { createGameCard } from './game-card';

const games = [
  {
    // title: 'Cozy Cafe',
    imageSrc: '/src/assets/cozy-cafe-card.png',
    className: 'game-card--edge',
  },
  {
    title: 'Islanders: New Shores',
    imageSrc: '/src/assets/islanders-card.jpg',
    rating: '4.9',
    likes: '54.2K',
    className: 'game-card--regular',
  },
  {
    title: 'Vacation Cafe Simulator',
    imageSrc: '/src/assets/vacation-cafe-card.jpg',
    rating: '4.8',
    likes: '28.7K',
    className: 'game-card--featured',
  },
  {
    title: 'Winter Burrow',
    imageSrc: '/src/assets/winter-burrow-card.png',
    rating: '4.9',
    likes: '32.4K',
    className: 'game-card--regular',
  },
  {
    // title: 'Shelve the Potions',
    imageSrc: '/src/assets/shelve-the-potions-card.png',
    className: 'game-card--edge',
  },
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
          ←
        </button>

        <button
          class="new-games__control new-games__control--next"
          type="button"
          aria-label="Next games"
        >
          →
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

  games.forEach((game) => {
    track.append(createGameCard(game));
  });

  return section;
}
