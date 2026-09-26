import tukoniData from '../data/game-tukoni-forest-keepers.json';
import { formatLikesCount, formatRating } from '../utils/format';

import tukoniHero from '../assets/library/tukoni-forest-keepers-hero.jpg';

import starIcon from '../assets/icons/star.svg';
import heartIcon from '../assets/icons/heart.svg';

export function createGameDetailsDialog(): HTMLElement {
  const game = tukoniData.data;

  const backdrop = document.createElement('div');
  backdrop.className = 'game-details-backdrop';

  const dialog = document.createElement('section');
  dialog.className = 'game-details-dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', 'Game details');

  dialog.innerHTML = `
  <div class="game-details-dialog__hero">
    <img
      class="game-details-dialog__hero-image"
      src="${tukoniHero}"
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
        ${game.name}
      </h2>  

      <div class="game-details-dialog__ratings">
        <span class="game-details-dialog__rating">
          <img src="${starIcon}" alt="" aria-hidden="true" />
          ${formatRating(game.rating)}
        </span>

        <span class="game-details-dialog__likes">
          <img src="${heartIcon}" alt="" aria-hidden="true" />
          ${formatLikesCount(game.likesCount)}
        </span>
      </div>
    </div>

    <p class="game-details-dialog__description">
      ${game.fullDescription} <!-- description -->
    </p>

    <div class="game-details-dialog__info">
      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Genre</span>
        <span class="game-details-dialog__info-value">${game.specs.genre}</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Players</span>
        <span class="game-details-dialog__info-value">${game.specs.players}</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Duration</span>
        <span class="game-details-dialog__info-value">${game.specs.duration}</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Price</span>
        <span class="game-details-dialog__info-value">${game.specs.price}</span>
      </div>
    </div>

    <div class="game-details-dialog__actions">
      <!-- buttons -->
    </div>

    <section class="game-details-dialog__records">
     ${game.topRecords} <!-- Top Records -->
    </section>

    <section class="game-details-dialog__comments">
      <!-- Comments -->
    </section>
  </div>
`;

  backdrop.append(dialog);

  const closeButton = dialog.querySelector<HTMLButtonElement>('.game-details-dialog__close');

  function closeDialog(): void {
    document.removeEventListener('keydown', handleKeydown);
    backdrop.remove();
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
