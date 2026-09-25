import { createHeader } from '../components/header';
import { createPagination } from '../components/pagination';
import { createGameDetailsDialog } from '../components/game-details-dialog';
import { createFooter } from '../components/footer';

import vacationCafe from '../assets/vacation-cafe-simulator-card.jpg';
import winterBurrow from '../assets/winter-burrow-card.jpg';
import shelvePotions from '../assets/shelve-the-potions-card.jpg';

import heartopia from '../assets/library/heartopia-card.jpg';
import palia from '../assets/library/palia-card.jpg';
import catMail from '../assets/library/cat-mail-co-card.jpg';

const gameImages: Record<string, string> = {
  'vacation-cafe-simulator': vacationCafe,
  'winter-burrow': winterBurrow,
  'shelve-the-potions': shelvePotions,
  heartopia,
  palia,
  'cat-mail-co': catMail,
};

import { createLibraryGameCard } from '../components/library-game-card';

import categoriesData from '../data/categories.json';
import gamesData from '../data/all-games-seed.json';

import { formatLikesCount, formatRating } from '../utils/format';

export function createLibraryPage(): HTMLElement {
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

  const controls = document.createElement('section');
  controls.className = 'library__controls';

  const filters = document.createElement('div');
  filters.className = 'library__filters';

  // chips
  for (const category of categoriesData.data) {
    const button = document.createElement('button');

    button.className = 'library__filter';
    button.type = 'button';
    button.textContent = category.label;
    button.dataset.category = category.slug;

    button.setAttribute('aria-pressed', String(category.isDefault));

    if (category.isDefault) {
      button.classList.add('library__filter--active');
    }

    filters.append(button);
  }

  const filterButtons = filters.querySelectorAll<HTMLButtonElement>('.library__filter');

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

  for (const button of filterButtons) {
    button.addEventListener('click', () => {
      if (dragDistance > dragThreshold) {
        return;
      }

      for (const filterButton of filterButtons) {
        filterButton.classList.remove('library__filter--active');
        filterButton.setAttribute('aria-pressed', 'false');
      }

      button.classList.add('library__filter--active');
      button.setAttribute('aria-pressed', 'true');
    });
  }

  const sort = document.createElement('div');
  sort.className = 'library__sort-wrapper';

  const sortButton = document.createElement('button');
  sortButton.className = 'library__sort';
  sortButton.type = 'button';
  sortButton.setAttribute('aria-expanded', 'false');
  sortButton.setAttribute('aria-haspopup', 'listbox');

  const sortLabel = document.createElement('span');
  sortLabel.textContent = 'Sort by: Rating ↓';

  const sortIcon = document.createElement('span');
  sortIcon.className = 'material-symbols-outlined';
  sortIcon.setAttribute('aria-hidden', 'true');
  sortIcon.textContent = 'arrow_drop_down';

  sortButton.append(sortLabel, sortIcon);

  const sortMenu = document.createElement('div');
  sortMenu.className = 'library__sort-menu';
  sortMenu.setAttribute('role', 'listbox');
  sortMenu.hidden = true;

  const sortOptions = ['Rating ↑', 'Rating ↓', 'Name A→Z', 'Name Z→A'];
  for (const option of sortOptions) {
    const optionButton = document.createElement('button');

    optionButton.className = 'library__sort-option';
    optionButton.type = 'button';
    optionButton.setAttribute('role', 'option');
    optionButton.textContent = option;

    if (option === 'Rating ↓') {
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

      sortMenu.hidden = true;
      sortButton.setAttribute('aria-expanded', 'false');
    });
  }

  sort.append(sortButton, sortMenu);

  const gamesSection = document.createElement('section');
  gamesSection.className = 'library__games';

  const games = gamesData.data.slice(0, 6);

  for (const game of games) {
    gamesSection.append(
      createLibraryGameCard({
        title: game.name,
        imageSrc: gameImages[game.slug],
        category: game.category,
        description: game.shortDescription,
        rating: formatRating(game.rating),
        likes: formatLikesCount(game.likesCount),
        price: game.price,
      }),
    );
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

    const dialog = createGameDetailsDialog();
    document.body.append(dialog);
  });

  const gamesPerPage = 6;
  const totalPages = Math.ceil(gamesData.data.length / gamesPerPage);

  const pagination = createPagination(totalPages);

  controls.append(filters, sort);
  main.append(titleSection, controls, gamesSection, pagination);

  page.append(main);
  page.append(createFooter());

  return page;
}
