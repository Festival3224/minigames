// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getRouteFromLocation, renderRoute } from './router';
import { resolveAppSession } from './auth/app-session-manager';
import { showSnackbar } from './components/snackbar';

vi.mock('./styles/main.scss', () => ({}));

vi.mock('./router', () => ({
  getRouteFromLocation: vi.fn(() => 'home'),
  renderRoute: vi.fn(),
}));

vi.mock('./auth/app-session-manager', () => ({
  APP_SESSION_CHANGED_EVENT: 'minigames:app-session-changed',
  resolveAppSession: vi.fn(),
}));

vi.mock('./components/snackbar', () => ({
  showSnackbar: vi.fn(),
}));

describe('main', () => {
  beforeEach(() => {
    vi.resetModules();
    document.body.replaceChildren();

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'guest',
    });
  });

  it('initializes the application and renders the current route', async () => {
    await import('./main');

    await vi.waitFor(() => {
      expect(resolveAppSession).toHaveBeenCalled();
    });

    expect(document.querySelector('#app')).not.toBeNull();
    expect(getRouteFromLocation).toHaveBeenCalled();
    expect(renderRoute).toHaveBeenCalledWith('home');
  });

  it('shows an error when the session is expired during initialization', async () => {
    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'expired',
    });

    await import('./main');

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Your session has expired. Please log in again.',
        variant: 'error',
      });
    });

    expect(renderRoute).toHaveBeenCalledWith('home');
  });
});
