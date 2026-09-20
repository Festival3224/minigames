import tailsideCafe from '../assets/tailside-cozy-cafe-sim-card.jpg';
import islanders from '../assets/islanders-new-shores-card.jpg';
import vacationCafe from '../assets/vacation-cafe-simulator-card.jpg';
import winterBurrow from '../assets/winter-burrow-card.jpg';
import shelvePotions from '../assets/shelve-the-potions-card.jpg';

import arrowBack from '../assets/icons/arrow_back.svg';
import arrowForward from '../assets/icons/arrow_forward.svg';

import { createGameCard } from './game-card';

const games = [
  {
    title: 'Tailside: Cozy Cafe Sim',
    imageSrc: tailsideCafe,
    rating: '4.8',
    likes: '35.6K',
    className: 'game-card--edge',
  },
  {
    title: 'ISLANDERS: New Shores',
    imageSrc: islanders,
    rating: '4.9',
    likes: '54.2K',
    className: 'game-card--regular',
  },
  {
    title: 'Vacation Cafe Simulator',
    imageSrc: vacationCafe,
    rating: '4.8',
    likes: '28.7K',
    className: 'game-card--featured',
  },
  {
    title: 'Winter Burrow',
    imageSrc: winterBurrow,
    rating: '4.9',
    likes: '32.4K',
    className: 'game-card--regular',
  },
  {
    title: 'Shelve the Potions!',
    imageSrc: shelvePotions,
    rating: '4.7',
    likes: '21.3K',
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

  for (const game of games) {
    track.append(createGameCard(game));
  }
  return section;
}
