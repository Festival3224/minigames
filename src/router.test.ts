// @vitest-environment jsdom

import { describe, expect, it, vi } from 'vitest';

import { getRouteFromLocation, navigate, renderRoute } from './router';

import { resolveAppSession } from './auth/app-session-manager';

import { showSnackbar } from './components/snackbar';

vi.mock('./pages/home', () => ({
  createHomePage: vi.fn(() => {
    const element = document.createElement('div');
    element.textContent = 'HOME PAGE';

    return element;
  }),
}));

vi.mock('./pages/library', () => ({
  createLibraryPage: vi.fn(() => {
    const element = document.createElement('div');
    element.textContent = 'LIBRARY PAGE';

    return element;
  }),
}));

vi.mock('./pages/not-found', () => ({
  createNotFoundPage: vi.fn(() => {
    const element = document.createElement('div');
    element.textContent = 'NOT FOUND PAGE';

    return element;
  }),
}));

vi.mock('./auth/app-session-manager', () => ({
  resolveAppSession: vi.fn(),
}));

vi.mock('./components/snackbar', () => ({
  showSnackbar: vi.fn(),
}));

describe('router', () => {
  it('resolves application routes from the URL', () => {
    history.replaceState({}, '', '/');
    expect(getRouteFromLocation()).toBe('home');

    history.replaceState({}, '', '/home');
    expect(getRouteFromLocation()).toBe('home');

    history.replaceState({}, '', '/library');
    expect(getRouteFromLocation()).toBe('library');

    history.replaceState({}, '', '/unknown');
    expect(getRouteFromLocation()).toBe('not-found');
  });

  it('renders the requested page', () => {
    document.body.innerHTML = '<div id="app"></div>';

    renderRoute('home');
    expect(document.querySelector('#app')?.textContent).toBe('HOME PAGE');

    renderRoute('library');
    expect(document.querySelector('#app')?.textContent).toBe('LIBRARY PAGE');

    renderRoute('not-found');
    expect(document.querySelector('#app')?.textContent).toBe('NOT FOUND PAGE');
  });

  it('navigates to a new route', async () => {
    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: Date.now(),
      },
    });

    document.body.innerHTML = '<div id="app"></div>';

    await navigate('/library');

    expect(location.pathname).toBe('/library');
    expect(document.querySelector('#app')?.textContent).toBe('LIBRARY PAGE');
  });

  it('shows a snackbar when the session has expired', async () => {
    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'expired',
    });

    document.body.innerHTML = '<div id="app"></div>';

    await navigate('/library');

    expect(showSnackbar).toHaveBeenCalledWith({
      message: 'Your session has expired. Please log in again.',
      variant: 'error',
    });

    expect(location.pathname).toBe('/library');
  });
});
