// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';

import { createGameCard } from './game-card';

describe('game card', () => {
  it('renders game information', () => {
    const card = createGameCard({
      slug: 'forest-game',
      title: 'Forest Game',
      imageSrc: '/forest.jpg',
      rating: '4.8',
      likes: '1.2K',
      className: 'game-card--featured',
    });

    expect(card.dataset.slug).toBe('forest-game');
    expect(card.classList.contains('game-card--featured')).toBe(true);

    expect(card.querySelector('.game-card__title')?.textContent).toBe('Forest Game');

    expect(card.querySelector('.game-card__rating')?.textContent).toContain('4.8');

    expect(card.querySelector('.game-card__likes')?.textContent).toContain('1.2K');

    expect(card.querySelector<HTMLImageElement>('.game-card__image')?.src).toContain('/forest.jpg');
  });

  it('renders a card without optional game information', () => {
    const card = createGameCard({
      slug: 'forest-game',
      imageSrc: '/forest.jpg',
    });

    expect(card.dataset.slug).toBe('forest-game');

    expect(card.querySelector('.game-card__title')).toBeNull();

    expect(card.querySelector('.game-card__meta')).toBeNull();

    expect(card.querySelector('.game-card__image')).not.toBeNull();
  });
});
