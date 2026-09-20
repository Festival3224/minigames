import starIcon from '../assets/icons/star.svg';
import heartIcon from '../assets/icons/heart.svg';

interface GameCardProperties {
  title?: string;
  imageSrc: string;
  rating?: string;
  likes?: string;
  className?: string;
}

export function createGameCard({
  title,
  imageSrc,
  rating,
  likes,
  className = '',
}: GameCardProperties): HTMLElement {
  const card = document.createElement('article');

  card.className = `game-card ${className}`.trim();

  const meta =
    rating && likes
      ? /* html */ `
        <div class="game-card__meta">
          <span class="game-card__rating">
            <img
              class="game-card__rating-icon"
              src="${starIcon}"
              alt=""
              aria-hidden="true"
            />
            ${rating}
          </span>

          <span class="game-card__likes">
            <img
              class="game-card__likes-icon"
              src="${heartIcon}"
              alt=""
              aria-hidden="true"
            />
            ${likes}
          </span>
        </div>
      `
      : '';

  const overlay = /* html */ `
    <div class="game-card__overlay">
      ${title ? `<h3 class="game-card__title">${title}</h3>` : ''}
      ${meta}
    </div>
  `;

  card.innerHTML = /* html */ `
    <img class="game-card__image" src="${imageSrc}" alt="" />

    ${overlay}
  `;

  return card;
}
