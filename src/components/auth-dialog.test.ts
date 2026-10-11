// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import { createAuthDialog, openAuthDialog, restoreAuthDialogFromUrl } from './auth-dialog';

import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
} from '../auth/auth-service';
import { resolveAppSession } from '../auth/app-session-manager';
import { showSnackbar } from './snackbar';

vi.mock('../auth/auth-service', () => ({
  loginWithEmailAndPassword: vi.fn(),
  registerWithEmailAndPassword: vi.fn(),
  sendPasswordReset: vi.fn(),
  loginWithGoogle: vi.fn(),
}));

vi.mock('../auth/app-session-manager', () => ({
  APP_SESSION_CHANGED_EVENT: 'minigames:app-session-changed',
  resolveAppSession: vi.fn(),
  startAppSession: vi.fn(),
}));

vi.mock('./snackbar', () => ({
  showSnackbar: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
  vi.useRealTimers();
  document.body.replaceChildren();

  history.replaceState({}, '', '/');
});

describe('auth dialog validation', () => {
  it('shows the requested initial mode', () => {
    const dialog = createAuthDialog('register');

    const loginView = dialog.querySelector<HTMLElement>('.auth-dialog__login');
    const registerView = dialog.querySelector<HTMLElement>('.auth-dialog__register');

    expect(loginView?.hidden).toBe(true);
    expect(registerView?.hidden).toBe(false);
  });

  it('enables login submit only when email and password are valid', () => {
    const dialog = createAuthDialog('login');

    const form = dialog.querySelector<HTMLFormElement>(':scope .auth-dialog__login form');
    const email = form?.querySelector<HTMLInputElement>(':scope input[name="email"]');
    const password = form?.querySelector<HTMLInputElement>(':scope input[name="password"]');
    const submit = form?.querySelector<HTMLButtonElement>(':scope .auth-dialog__submit');

    expect(submit?.disabled).toBe(true);

    if (!email || !password || !submit) {
      throw new Error('Login form controls not found');
    }

    email.value = 'player@example.com';
    email.dispatchEvent(new Event('input'));

    password.value = '123456';
    password.dispatchEvent(new Event('input'));

    expect(submit.disabled).toBe(false);
  });

  it('shows an inline error for invalid login email', () => {
    const dialog = createAuthDialog('login');

    const email = dialog.querySelector<HTMLInputElement>(
      ':scope .auth-dialog__login input[name="email"]',
    );

    if (!email) {
      throw new Error('Login email input not found');
    }

    email.value = 'invalid-email';
    email.dispatchEvent(new Event('input'));

    const field = email.closest('.auth-dialog__field');
    const error = field?.querySelector('.auth-dialog__error');

    expect(email.getAttribute('aria-invalid')).toBe('true');
    expect(error?.textContent).toBe('Enter a valid email address.');
  });

  it('enables registration submit when all fields are valid', () => {
    const dialog = createAuthDialog('register');

    const form = dialog.querySelector<HTMLFormElement>(':scope .auth-dialog__register form');

    if (!form) {
      throw new Error('Registration form not found');
    }

    const username = form.querySelector<HTMLInputElement>('input[name="username"]');
    const email = form.querySelector<HTMLInputElement>('input[name="email"]');
    const password = form.querySelector<HTMLInputElement>('input[name="password"]');
    const confirmation = form.querySelector<HTMLInputElement>('input[name="confirmPassword"]');
    const submit = form.querySelector<HTMLButtonElement>('.auth-dialog__submit');

    if (!username || !email || !password || !confirmation || !submit) {
      throw new Error('Registration form controls not found');
    }

    username.value = 'Player1';
    username.dispatchEvent(new Event('input'));

    email.value = 'player@example.com';
    email.dispatchEvent(new Event('input'));

    password.value = 'Password1!';
    password.dispatchEvent(new Event('input'));

    confirmation.value = 'Password1!';
    confirmation.dispatchEvent(new Event('input'));

    expect(submit.disabled).toBe(false);
  });

  it('revalidates password confirmation when password changes', () => {
    const dialog = createAuthDialog('register');

    const password = dialog.querySelector<HTMLInputElement>(
      ':scope .auth-dialog__register input[name="password"]',
    );
    const confirmation = dialog.querySelector<HTMLInputElement>(
      ':scope .auth-dialog__register input[name="confirmPassword"]',
    );

    if (!password || !confirmation) {
      throw new Error('Registration password controls not found');
    }

    password.value = 'Password1!';
    password.dispatchEvent(new Event('input'));

    confirmation.value = 'Password1!';
    confirmation.dispatchEvent(new Event('input'));

    expect(confirmation.getAttribute('aria-invalid')).toBe('false');

    password.value = 'Changed1!';
    password.dispatchEvent(new Event('input'));

    expect(confirmation.getAttribute('aria-invalid')).toBe('true');
  });

  it('switches auth mode and clears form state', () => {
    const dialog = createAuthDialog('login');

    const loginEmail = dialog.querySelector<HTMLInputElement>(
      ':scope .auth-dialog__login input[name="email"]',
    );
    const registerTab = dialog.querySelector<HTMLButtonElement>('[data-auth-tab="register"]');
    const loginView = dialog.querySelector<HTMLElement>('.auth-dialog__login');
    const registerView = dialog.querySelector<HTMLElement>('.auth-dialog__register');

    if (!loginEmail || !registerTab || !loginView || !registerView) {
      throw new Error('Auth dialog controls not found');
    }

    loginEmail.value = 'invalid-email';
    loginEmail.dispatchEvent(new Event('input'));

    expect(loginEmail.getAttribute('aria-invalid')).toBe('true');

    registerTab.click();

    expect(loginView.hidden).toBe(true);
    expect(registerView.hidden).toBe(false);
    expect(loginEmail.value).toBe('');
    expect(loginEmail.hasAttribute('aria-invalid')).toBe(false);
  });
});

describe('auth dialog authentication', () => {
  it('shows an error and unlocks the form when login fails', async () => {
    vi.mocked(loginWithEmailAndPassword).mockRejectedValue(new Error('Login failed'));

    const dialog = createAuthDialog('login');

    const form = dialog.querySelector<HTMLFormElement>(':scope .auth-dialog__login form');
    const email = form?.querySelector<HTMLInputElement>('input[name="email"]');
    const password = form?.querySelector<HTMLInputElement>('input[name="password"]');
    const submit = form?.querySelector<HTMLButtonElement>('.auth-dialog__submit');

    if (!form || !email || !password || !submit) {
      throw new Error('Login form controls not found');
    }

    email.value = 'player@example.com';
    password.value = 'Password1!';

    form.dispatchEvent(
      new SubmitEvent('submit', {
        bubbles: true,
        cancelable: true,
      }),
    );

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Unable to sign in. Check your credentials and try again.',
        variant: 'error',
      });
    });

    expect(submit.disabled).toBe(false);
    expect(submit.textContent?.trim()).toBe('Login');
  });

  it('sends a password reset email', async () => {
    vi.mocked(sendPasswordReset).mockResolvedValue();

    const dialog = createAuthDialog('login');

    const email = dialog.querySelector<HTMLInputElement>(
      ':scope .auth-dialog__login input[name="email"]',
    );
    const forgotButton = dialog.querySelector<HTMLButtonElement>('.auth-dialog__forgot');

    if (!email || !forgotButton) {
      throw new Error('Password reset controls not found');
    }

    email.value = 'player@example.com';
    forgotButton.click();

    await vi.waitFor(() => {
      expect(sendPasswordReset).toHaveBeenCalledWith('player@example.com');
    });

    expect(showSnackbar).toHaveBeenCalledWith({
      message: 'Password reset email sent.',
      variant: 'success',
    });
  });

  it('shows an error when password reset fails', async () => {
    vi.mocked(sendPasswordReset).mockRejectedValue(new Error('Reset failed'));

    const dialog = createAuthDialog('login');

    const email = dialog.querySelector<HTMLInputElement>(
      ':scope .auth-dialog__login input[name="email"]',
    );
    const forgotButton = dialog.querySelector<HTMLButtonElement>('.auth-dialog__forgot');

    if (!email || !forgotButton) {
      throw new Error('Password reset controls not found');
    }

    email.value = 'player@example.com';
    forgotButton.click();

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Unable to send password reset email.',
        variant: 'error',
      });
    });
  });

  it('shows an error and unlocks the form when registration fails', async () => {
    vi.mocked(registerWithEmailAndPassword).mockRejectedValue(new Error('Registration failed'));

    const dialog = createAuthDialog('register');

    const form = dialog.querySelector<HTMLFormElement>(':scope .auth-dialog__register form');

    if (!form) {
      throw new Error('Registration form not found');
    }

    const username = form.querySelector<HTMLInputElement>('input[name="username"]');
    const email = form.querySelector<HTMLInputElement>('input[name="email"]');
    const password = form.querySelector<HTMLInputElement>('input[name="password"]');
    const confirmation = form.querySelector<HTMLInputElement>('input[name="confirmPassword"]');
    const submit = form.querySelector<HTMLButtonElement>('.auth-dialog__submit');

    if (!username || !email || !password || !confirmation || !submit) {
      throw new Error('Registration form controls not found');
    }

    username.value = 'Player1';
    email.value = 'player@example.com';
    password.value = 'Password1!';
    confirmation.value = 'Password1!';

    form.dispatchEvent(
      new SubmitEvent('submit', {
        bubbles: true,
        cancelable: true,
      }),
    );

    await vi.waitFor(() => {
      expect(registerWithEmailAndPassword).toHaveBeenCalledWith(
        'player@example.com',
        'Password1!',
        'Player1',
      );
    });

    await vi.waitFor(() => {
      expect(showSnackbar).toHaveBeenCalledWith({
        message: 'Unable to create account. Please try again.',
        variant: 'error',
      });
    });

    expect(submit.disabled).toBe(false);
    expect(submit.textContent?.trim()).toBe('Create Account');
  });

  it('does not open the auth dialog when the user is already authenticated', async () => {
    history.replaceState({}, '', '/?auth=login');

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      },
    });

    await openAuthDialog('login');

    expect(document.querySelector('.auth-overlay')).toBeNull();
    expect(location.search).toBe('');

    expect(showSnackbar).toHaveBeenCalledWith({
      message: 'You are already authenticated.',
      variant: 'error',
    });
  });

  it('opens the auth dialog after an expired session', async () => {
    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'expired',
    });

    await openAuthDialog('login');

    expect(showSnackbar).toHaveBeenCalledWith({
      message: 'Your session has expired. Please log in again.',
      variant: 'error',
    });

    expect(document.querySelector('.auth-overlay')).not.toBeNull();
    expect(location.search).toBe('?auth=login');
  });

  it('restores the auth dialog from the URL', async () => {
    history.replaceState({}, '', '/?auth=register');

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'guest',
    });

    await restoreAuthDialogFromUrl();

    const dialog = document.querySelector('.auth-overlay');

    expect(dialog).not.toBeNull();

    const registerView = dialog?.querySelector<HTMLElement>('.auth-dialog__register');

    const loginView = dialog?.querySelector<HTMLElement>('.auth-dialog__login');

    expect(registerView?.hidden).toBe(false);
    expect(loginView?.hidden).toBe(true);
  });

  it('does not restore the auth dialog for an authenticated user', async () => {
    history.replaceState({}, '', '/?auth=login');

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'authenticated',
      session: {
        displayName: 'Player',
        email: 'player@example.com',
        authenticatedAt: 1000,
      },
    });

    await restoreAuthDialogFromUrl();

    expect(document.querySelector('.auth-overlay')).toBeNull();
    expect(location.search).toBe('');

    expect(showSnackbar).toHaveBeenCalledWith({
      message: 'You are already authenticated.',
      variant: 'error',
    });
  });

  it('does not restore a second auth dialog when one is already open', async () => {
    history.replaceState({}, '', '/?auth=login');

    vi.mocked(resolveAppSession).mockResolvedValue({
      status: 'guest',
    });

    const existingDialog = document.createElement('div');
    existingDialog.className = 'auth-overlay';
    document.body.append(existingDialog);

    await restoreAuthDialogFromUrl();

    expect(document.querySelectorAll('.auth-overlay')).toHaveLength(1);
  });

  it('closes the auth dialog when Escape is pressed', () => {
    vi.useFakeTimers();

    const onClose = vi.fn();

    const dialog = createAuthDialog('login', onClose);
    document.body.append(dialog);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
      }),
    );

    expect(onClose).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(360);

    expect(document.body.contains(dialog)).toBe(false);
  });
});
