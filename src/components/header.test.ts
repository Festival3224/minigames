// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import { getActiveSession, logoutAppSession } from '../auth/app-session-manager';

import { createHeader } from './header';
import { showSnackbar } from './snackbar';

vi.mock('../auth/app-session-manager', () => ({
  getActiveSession: vi.fn(),
  logoutAppSession: vi.fn(),
}));

vi.mock('../router', () => ({
  navigate: vi.fn(),
}));

vi.mock('./auth-dialog', () => ({
  openAuthDialog: vi.fn(),
}));

vi.mock('./snackbar', () => ({
  showSnackbar: vi.fn(),
}));

describe('header', () => {
  afterEach(() => {
    vi.clearAllMocks();
    document.body.replaceChildren();
  });

  it('shows login and sign up actions for a guest', () => {
    vi.mocked(getActiveSession).mockReturnValue(undefined);

    const header = createHeader();
    document.body.append(header);

    expect(header.querySelector('.header__login')).not.toBeNull();
    expect(header.querySelector('.header__signup')).not.toBeNull();

    expect(header.querySelector('.header__profile')).toBeNull();
    expect(header.querySelector('.header__logout')).toBeNull();
  });

  it('shows profile and logout actions for an authenticated user', () => {
    vi.mocked(getActiveSession).mockReturnValue({
      displayName: 'Player',
      email: 'player@example.com',
      authenticatedAt: 1000,
    });

    const header = createHeader();
    document.body.append(header);

    expect(header.querySelector('.header__profile')).not.toBeNull();
    expect(header.querySelector('.header__logout')).not.toBeNull();

    expect(header.querySelector('.header__login')).toBeNull();
    expect(header.querySelector('.header__signup')).toBeNull();

    expect(header.querySelector('.header__profile-name')?.textContent).toBe('Player');
  });

  it('shows profile initials when there is no avatar image', () => {
    vi.mocked(getActiveSession).mockReturnValue({
      displayName: 'Player One',
      email: 'player@example.com',
      authenticatedAt: 1000,
    });

    const header = createHeader();
    document.body.append(header);

    expect(header.querySelector('.header__avatar-initials')?.textContent).toBe('PO');

    expect(header.querySelector('.header__avatar-image')).toBeNull();
  });

  it('logs out an authenticated user', async () => {
    vi.mocked(getActiveSession)
      .mockReturnValueOnce({
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      })
      .mockReturnValue(undefined);

    vi.mocked(logoutAppSession).mockResolvedValue({
      isFirebaseSignOutSuccessful: true,
    });

    const header = createHeader();
    document.body.append(header);

    const logoutButton = header.querySelector<HTMLButtonElement>('.header__logout');

    if (!logoutButton) {
      throw new Error('Logout button not found');
    }

    logoutButton.click();

    await vi.waitFor(() => {
      expect(logoutAppSession).toHaveBeenCalledOnce();
    });

    await vi.waitFor(() => {
      expect(document.querySelector('.header__login')).not.toBeNull();
    });

    expect(document.querySelector('.header__logout')).toBeNull();
  });

  it('shows an error when Firebase sign-out fails', async () => {
    vi.mocked(getActiveSession)
      .mockReturnValueOnce({
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      })
      .mockReturnValue(undefined);

    vi.mocked(logoutAppSession).mockResolvedValue({
      isFirebaseSignOutSuccessful: false,
    });

    const header = createHeader();
    document.body.append(header);

    const logoutButton = header.querySelector<HTMLButtonElement>('.header__logout');

    if (!logoutButton) {
      throw new Error('Logout button not found');
    }

    logoutButton.click();

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Signed out locally, but Firebase sign-out failed.',
        variant: 'error',
      });
    });

    expect(document.querySelector('.header__login')).not.toBeNull();
  });
});
