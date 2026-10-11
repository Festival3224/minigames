// @vitest-environment jsdom

import { describe, expect, it, vi } from 'vitest';

import { restoreAuthDialogFromUrl } from '../components/auth-dialog';
import { createHomePage } from './home';

vi.mock('../components/header', () => ({
  createHeader: vi.fn(() => {
    const element = document.createElement('header');
    element.textContent = 'HEADER';

    return element;
  }),
}));

vi.mock('../components/hero', () => ({
  createHero: vi.fn(() => {
    const element = document.createElement('section');
    element.textContent = 'HERO';

    return element;
  }),
}));

vi.mock('../components/new-games', () => ({
  createNewGames: vi.fn(() => {
    const element = document.createElement('section');
    element.textContent = 'NEW GAMES';

    return element;
  }),
}));

vi.mock('../components/leaderboard', () => ({
  createLeaderboard: vi.fn(() => {
    const element = document.createElement('section');
    element.textContent = 'LEADERBOARD';

    return element;
  }),
}));

vi.mock('../components/developer-cta', () => ({
  createDeveloperCta: vi.fn(() => {
    const element = document.createElement('section');
    element.textContent = 'DEVELOPER CTA';

    return element;
  }),
}));

vi.mock('../components/footer', () => ({
  createFooter: vi.fn(() => {
    const element = document.createElement('footer');
    element.textContent = 'FOOTER';

    return element;
  }),
}));

vi.mock('../components/auth-dialog', () => ({
  restoreAuthDialogFromUrl: vi.fn(),
}));

describe('home page', () => {
  it('renders home sections and restores auth dialog from URL', () => {
    const page = createHomePage();

    expect(page.textContent).toContain('HEADER');
    expect(page.textContent).toContain('HERO');
    expect(page.textContent).toContain('NEW GAMES');
    expect(page.textContent).toContain('LEADERBOARD');
    expect(page.textContent).toContain('DEVELOPER CTA');
    expect(page.textContent).toContain('FOOTER');

    expect(restoreAuthDialogFromUrl).toHaveBeenCalledOnce();
  });
});
