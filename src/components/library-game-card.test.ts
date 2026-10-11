// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';

import { createLibraryGameCard } from './library-game-card';

describe('library game card', () => {
  it('renders game information', () => {
    const card = createLibraryGameCard({
      slug: 'forest-game',
      title: 'Forest Game',
      imageSrc: '/forest.jpg',
      category: 'Puzzle',
      description: 'Explore the forest.',
      rating: '4.8',
      likes: '1.2K',
      price: 'Free',
    });

    expect(card.dataset.slug).toBe('forest-game');

    expect(card.querySelector('.library-game-card__title')?.textContent).toBe('Forest Game');

    expect(card.querySelector('.library-game-card__tag')?.textContent).toBe('Puzzle');

    expect(card.querySelector('.library-game-card__description')?.textContent).toContain(
      'Explore the forest.',
    );

    expect(card.querySelector('.library-game-card__price')?.textContent).toBe('Free');

    expect(card.querySelector('.library-game-card__rating')?.textContent).toContain('4.8');

    expect(card.querySelector('.library-game-card__likes')?.textContent).toContain('1.2K');

    expect(card.querySelector<HTMLImageElement>('.library-game-card__image')?.src).toContain(
      '/forest.jpg',
    );

    expect(card.querySelector('.library-game-card__details')).not.toBeNull();
  });
});
