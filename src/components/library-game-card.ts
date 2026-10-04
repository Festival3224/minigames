import starIcon from '../assets/icons/star.svg';
import heartIcon from '../assets/icons/heart.svg';

interface LibraryGameCardProperties {
  slug: string;
  title: string;
  imageSrc: string;
  category: string;
  description: string;
  rating: string;
  likes: string;
  price: string;
}

export function createLibraryGameCard({
  slug,
  title,
  imageSrc,
  category,
  description,
  rating,
  likes,
  price,
}: LibraryGameCardProperties): HTMLElement {
  const card = document.createElement('article');
  card.className = 'library-game-card';
  card.dataset.slug = slug;

  card.innerHTML = /* html */ `
    <img
      class="library-game-card__image"
      src="${imageSrc}"
      alt=""
    />

    <div class="library-game-card__content">
      <div class="library-game-card__heading">
        <h2 class="library-game-card__title">${title}</h2>
        <span class="library-game-card__tag">${category}</span>
      </div>

      <span class="library-game-card__price">${price}</span>

      <p class="library-game-card__description">
        ${description}
      </p>

      <div class="library-game-card__meta">
        <span class="library-game-card__rating">
          <img src="${starIcon}" alt="" aria-hidden="true" />
          ${rating}
        </span>

        <span class="library-game-card__likes">
          <img src="${heartIcon}" alt="" aria-hidden="true" />
          ${likes}
        </span>
      </div>

      <button class="library-game-card__details" type="button">
        Details
      </button>
    </div>
  `;

  return card;
}
