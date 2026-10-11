// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createNotFoundPage } from './not-found';
import { navigate } from '../router';

vi.mock('../components/header', () => ({
  createHeader: () => {
    const header = document.createElement('header');
    return header;
  },
}));

vi.mock('../components/footer', () => ({
  createFooter: () => {
    const footer = document.createElement('footer');
    return footer;
  },
}));

vi.mock('../router', () => ({
  navigate: vi.fn(),
}));

describe('not found page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the 404 page and navigates home', () => {
    const page = createNotFoundPage();

    expect(page.textContent).toContain('404');
    expect(page.textContent).toContain('Page not found');

    const homeButton = page.querySelector<HTMLButtonElement>('.not-found__home');

    if (!homeButton) {
      throw new Error('Home button not found');
    }

    homeButton.click();

    expect(navigate).toHaveBeenCalledWith('/');
  });
});
