// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';

import { createDeveloperCta } from './developer-cta';

describe('developer CTA', () => {
  it('renders developer call to action', () => {
    const section = createDeveloperCta();

    expect(section.classList.contains('developer-cta')).toBe(true);

    expect(section.querySelector('.developer-cta__title')?.textContent).toBe(
      'Are You a Game Developer?',
    );

    expect(section.querySelector('.developer-cta__button')?.textContent).toContain('Submit Form');

    expect(section.querySelector('.developer-cta__contact')?.textContent).toContain(
      'developers@minigames.com',
    );

    expect(section.querySelector('.developer-cta__image')).not.toBeNull();
  });
});
