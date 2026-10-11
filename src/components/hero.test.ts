// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';

import { createHero } from './hero';

describe('hero', () => {
  it('renders the hero section', () => {
    const hero = createHero();

    expect(hero.classList.contains('hero')).toBe(true);
    expect(hero.textContent).toContain('Take a Short Break');
    expect(hero.textContent).toContain('Discover hundreds of curated casual mini-games');

    const button = hero.querySelector<HTMLButtonElement>('.hero__button');

    expect(button?.textContent?.trim()).toBe('Browse Library');
  });
});
