import googleIcon from '../assets/icons/google.svg';

import {
  validateEmail,
  validateLoginPassword,
  validatePasswordConfirmation,
  validateRegistrationPassword,
  validateUsername,
} from '../auth/auth-validation';

import type { User } from 'firebase/auth';

import {
  APP_SESSION_CHANGED_EVENT,
  resolveAppSession,
  startAppSession,
} from '../auth/app-session-manager';

import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../auth/auth-service';

import { showSnackbar } from './snackbar';

export type AuthMode = 'login' | 'register';

function updateAuthModeInUrl(mode: AuthMode): void {
  const parameters = new URLSearchParams(location.search);

  if (parameters.get('auth') === mode) {
    return;
  }

  parameters.set('auth', mode);

  const query = parameters.toString();
  const path = query ? `${location.pathname}?${query}` : location.pathname;

  history.replaceState({}, '', path);
}

function removeAuthModeFromUrl(): void {
  const url = new URL(location.href);

  url.searchParams.delete('auth');

  history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

function completeAuthentication(user: User): void {
  startAppSession({
    displayName: user.displayName ?? '',
    email: user.email ?? '',
    ...(user.photoURL && {
      avatarUrl: user.photoURL,
    }),
  });

  removeAuthModeFromUrl();

  dispatchEvent(new Event(APP_SESSION_CHANGED_EVENT));
}

function pushAuthModeToUrl(mode: AuthMode): void {
  const url = new URL(location.href);

  url.searchParams.set('auth', mode);

  history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

export async function openAuthDialog(mode: AuthMode): Promise<void> {
  const sessionState = await resolveAppSession();

  if (sessionState.status === 'authenticated') {
    removeAuthModeFromUrl();

    showSnackbar({
      message: 'You are already authenticated.',
      variant: 'error',
    });

    return;
  }

  if (sessionState.status === 'expired') {
    showSnackbar({
      message: 'Your session has expired. Please log in again.',
      variant: 'error',
    });
  }

  const existingDialog = document.querySelector('.auth-overlay');

  if (existingDialog) {
    return;
  }

  pushAuthModeToUrl(mode);

  const dialog = createAuthDialog(mode, () => {
    history.back();
  });

  document.body.append(dialog);
}

export function createAuthDialog(
  initialMode: AuthMode = 'login',
  onClose?: () => void,
): HTMLElement {
  const overlay = document.createElement('div');

  overlay.className = 'auth-overlay';

  overlay.innerHTML = /* html */ `
            <div class="auth-dialog" role="dialog" aria-modal="true" aria-label="Authentication">
              <div class="auth-dialog__tabs">
                <button
                  class="auth-dialog__tab auth-dialog__tab--active"
                  type="button"
                  data-auth-tab="login"
                >
                  Login
                </button>

                <button
                  class="auth-dialog__tab"
                  type="button"
                  data-auth-tab="register"
                >
                  Register
                </button>
              </div>

        <div class="auth-dialog__login">
          <div class="auth-dialog__heading">
            <h2 class="auth-dialog__title">Welcome Back!</h2>
            <p class="auth-dialog__subtitle">
              Sign in to resume your games and progress.
            </p>
          </div>

          <form class="auth-dialog__form">
            <div class="auth-dialog__form-fields">
                <label class="auth-dialog__field">
                  <span class="auth-dialog__label">Email Address</span>

                  <div class="auth-dialog__input-wrapper">
                    <span
                      class="material-symbols-outlined auth-dialog__input-icon"
                      aria-hidden="true"
                    >
                      mail
                    </span>

                    <input
                      class="auth-dialog__input"
                      type="email"
                      name="email"
                      placeholder="e.g. alex@minigames.com"
                      autocomplete="email"
                    />
                  </div>
                  <span class="auth-dialog__error" aria-live="polite"></span>
                </label>

                <label class="auth-dialog__field">
                  <span class="auth-dialog__label">Password</span>

                  <div class="auth-dialog__input-wrapper">
                    <span
                      class="material-symbols-outlined auth-dialog__input-icon"
                      aria-hidden="true"
                    >
                      lock
                    </span>

                    <input
                        class="auth-dialog__input"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        autocomplete="current-password"
                    />

                    <button
                        class="auth-dialog__password-toggle"
                        type="button"
                        aria-label="Show password"
                    >
                    <span class="material-symbols-outlined" aria-hidden="true">
                        visibility_off
                    </span>
                    </button>
                  </div>
                  <span class="auth-dialog__error" aria-live="polite"></span>
                </label>

                <button class="auth-dialog__forgot" type="button">
                   Forgot Password?
                </button>
            </div>


            <div class="auth-dialog__actions">
                <button class="auth-dialog__submit" type="submit" disabled>
                  Login
                </button>

                <div class="auth-dialog__divider">
                    <span class="auth-dialog__divider-line"></span>
                    <span class="auth-dialog__divider-text">OR</span>
                    <span class="auth-dialog__divider-line"></span>
                </div>

                <button class="auth-dialog__google" type="button">
                    <img
                        class="auth-dialog__google-icon"
                        src="${googleIcon}"
                        alt=""
                        aria-hidden="true"
                    />
                    Continue with Google
                </button>
            </div>
          </form>

          <p class="auth-dialog__switch">
            Don’t have an account?
            <button
               class="auth-dialog__switch-button"
               type="button"
               data-auth-switch="register"
            >
              Register
            </button>
          </p>
  
        </div>

        <div class="auth-dialog__register" hidden>
      <div class="auth-dialog__heading">
        <h2 class="auth-dialog__title">Create Account</h2>
        <p class="auth-dialog__subtitle">
          Join MiniGames to track your score & streak.
        </p>
      </div>

      <form class="auth-dialog__form">
        <div class="auth-dialog__form-fields">
          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Username</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                person
              </span>

              <input
                class="auth-dialog__input"
                type="text"
                name="username"
                placeholder="e.g. CozyGamer99"
                autocomplete="username"
              />
            </div>
            <span class="auth-dialog__error" aria-live="polite"></span>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Email Address</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                mail
              </span>

              <input
                class="auth-dialog__input"
                type="email"
                name="email"
                placeholder="your.email@domain.com"
                autocomplete="email"
              />
            </div>
            <span class="auth-dialog__error" aria-live="polite"></span>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Password</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                lock
              </span>

              <input
                class="auth-dialog__input"
                type="password"
                name="password"
                placeholder="Min. 6 characters"
                autocomplete="new-password"
              />
            </div>
            <span class="auth-dialog__error" aria-live="polite"></span>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Confirm Password</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                lock
              </span>

              <input
                class="auth-dialog__input"
                type="password"
                name="confirmPassword"
                placeholder="Repeat your password"
                autocomplete="new-password"
              />
            </div>
            <span class="auth-dialog__error" aria-live="polite"></span>
          </label>
        </div>

        <div class="auth-dialog__actions">
          <button class="auth-dialog__submit" type="submit" disabled>
            Create Account
          </button>

          <div class="auth-dialog__divider">
            <span class="auth-dialog__divider-line"></span>
            <span class="auth-dialog__divider-text">OR</span>
            <span class="auth-dialog__divider-line"></span>
          </div>

          <button class="auth-dialog__google" type="button">
            <img
              class="auth-dialog__google-icon"
              src="${googleIcon}"
              alt=""
              aria-hidden="true"
            />
            Sign up with Google
          </button>
        </div>
      </form>

      <p class="auth-dialog__switch">
        Already have an account?
        <button
          class="auth-dialog__switch-button"
          type="button"
          data-auth-switch="login"
        >
          Login
        </button>
      </p>
    </div>
    </div>
  `;

  const loginView = overlay.querySelector<HTMLElement>('.auth-dialog__login');
  const registerView = overlay.querySelector<HTMLElement>('.auth-dialog__register');

  const loginTab = overlay.querySelector<HTMLButtonElement>('[data-auth-tab="login"]');
  const registerTab = overlay.querySelector<HTMLButtonElement>('[data-auth-tab="register"]');

  const switchButtons = overlay.querySelectorAll<HTMLButtonElement>('.auth-dialog__switch-button');

  const passwordToggle = overlay.querySelector<HTMLButtonElement>('.auth-dialog__password-toggle');

  const passwordInput = passwordToggle
    ?.closest('.auth-dialog__input-wrapper')
    ?.querySelector<HTMLInputElement>('.auth-dialog__input');

  const loginForm = loginView?.querySelector<HTMLFormElement>('.auth-dialog__form');

  const registerForm = registerView?.querySelector<HTMLFormElement>('.auth-dialog__form');

  let isPending = false;

  function setSubmitLoadingText(
    form: HTMLFormElement,
    isLoading: boolean,
    loadingText: string,
  ): void {
    const submitButton = form.querySelector<HTMLButtonElement>('.auth-dialog__submit');

    if (!submitButton) {
      return;
    }

    if (isLoading) {
      submitButton.dataset.originalText = submitButton.textContent?.trim() ?? '';
      submitButton.textContent = loadingText;
      return;
    }

    const originalText = submitButton.dataset.originalText;

    if (originalText) {
      submitButton.textContent = originalText;
    }

    delete submitButton.dataset.originalText;
  }

  function setAuthPendingState(isAuthenticationPending: boolean): void {
    isPending = isAuthenticationPending;

    const controls = overlay.querySelectorAll<HTMLInputElement | HTMLButtonElement>(
      'input, button',
    );

    for (const control of controls) {
      control.disabled = isAuthenticationPending;
    }

    if (isAuthenticationPending) {
      return;
    }

    updateLoginSubmitState?.();
    updateRegistrationSubmitState?.();
  }

  function setFieldValidation(input: HTMLInputElement, isValid: boolean, error: string): void {
    const field = input.closest<HTMLElement>('.auth-dialog__field');

    if (!field) {
      return;
    }

    const wrapper = field.querySelector<HTMLElement>('.auth-dialog__input-wrapper');
    const errorElement = field.querySelector<HTMLElement>('.auth-dialog__error');

    wrapper?.classList.toggle('auth-dialog__input-wrapper--error', !isValid);

    if (errorElement) {
      errorElement.textContent = isValid ? '' : error;
    }

    input.setAttribute('aria-invalid', String(!isValid));
  }

  function clearFormValidation(form: HTMLFormElement): void {
    form.reset();

    const errorElements = form.querySelectorAll<HTMLElement>('.auth-dialog__error');

    for (const errorElement of errorElements) {
      errorElement.textContent = '';
    }

    const wrappers = form.querySelectorAll<HTMLElement>('.auth-dialog__input-wrapper');

    for (const wrapper of wrappers) {
      wrapper.classList.remove('auth-dialog__input-wrapper--error');
    }

    const inputs = form.querySelectorAll<HTMLInputElement>('.auth-dialog__input');

    for (const input of inputs) {
      input.removeAttribute('aria-invalid');
    }

    const submitButton = form.querySelector<HTMLButtonElement>('.auth-dialog__submit');

    if (submitButton) {
      submitButton.disabled = true;
    }
  }

  function setupLoginValidation(form: HTMLFormElement): (() => void) | undefined {
    const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
    const passwordInput = form.querySelector<HTMLInputElement>('input[name="password"]');
    const submitButton = form.querySelector<HTMLButtonElement>('.auth-dialog__submit');

    if (!emailInput || !passwordInput || !submitButton) {
      return;
    }

    const email = emailInput;
    const password = passwordInput;
    const submit = submitButton;

    function updateSubmitState(): void {
      const emailResult = validateEmail(email.value);
      const passwordResult = validateLoginPassword(password.value);

      submit.disabled = !(emailResult.isValid && passwordResult.isValid);
    }

    function validateEmailField(): void {
      const result = validateEmail(email.value);

      setFieldValidation(email, result.isValid, result.error);

      updateSubmitState();
    }

    function validatePasswordField(): void {
      const result = validateLoginPassword(password.value);

      setFieldValidation(password, result.isValid, result.error);

      updateSubmitState();
    }

    email.addEventListener('input', validateEmailField);
    email.addEventListener('blur', validateEmailField);

    password.addEventListener('input', validatePasswordField);
    password.addEventListener('blur', validatePasswordField);

    return updateSubmitState;
  }

  function setupRegistrationValidation(form: HTMLFormElement): (() => void) | undefined {
    const usernameInput = form.querySelector<HTMLInputElement>('input[name="username"]');
    const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
    const passwordInput = form.querySelector<HTMLInputElement>('input[name="password"]');
    const confirmPasswordInput = form.querySelector<HTMLInputElement>(
      'input[name="confirmPassword"]',
    );
    const submitButton = form.querySelector<HTMLButtonElement>('.auth-dialog__submit');

    if (!usernameInput || !emailInput || !passwordInput || !confirmPasswordInput || !submitButton) {
      return;
    }

    const username = usernameInput;
    const email = emailInput;
    const password = passwordInput;
    const confirmPassword = confirmPasswordInput;
    const submit = submitButton;

    function updateSubmitState(): void {
      const usernameResult = validateUsername(username.value);
      const emailResult = validateEmail(email.value);
      const passwordResult = validateRegistrationPassword(password.value);
      const confirmationResult = validatePasswordConfirmation(
        password.value,
        confirmPassword.value,
      );

      submit.disabled = !(
        usernameResult.isValid &&
        emailResult.isValid &&
        passwordResult.isValid &&
        confirmationResult.isValid
      );
    }

    function validateUsernameField(): void {
      const result = validateUsername(username.value);

      setFieldValidation(username, result.isValid, result.error);
      updateSubmitState();
    }

    function validateEmailField(): void {
      const result = validateEmail(email.value);

      setFieldValidation(email, result.isValid, result.error);
      updateSubmitState();
    }

    function validatePasswordField(): void {
      const result = validateRegistrationPassword(password.value);

      setFieldValidation(password, result.isValid, result.error);

      // Acceptance criterion:
      // revalidate confirmation whenever password changes.
      if (confirmPassword.value) {
        validateConfirmPasswordField();
      }

      updateSubmitState();
    }

    function validateConfirmPasswordField(): void {
      const result = validatePasswordConfirmation(password.value, confirmPassword.value);

      setFieldValidation(confirmPassword, result.isValid, result.error);

      updateSubmitState();
    }

    usernameInput.addEventListener('input', validateUsernameField);
    usernameInput.addEventListener('blur', validateUsernameField);

    emailInput.addEventListener('input', validateEmailField);
    emailInput.addEventListener('blur', validateEmailField);

    passwordInput.addEventListener('input', validatePasswordField);
    passwordInput.addEventListener('blur', validatePasswordField);

    confirmPasswordInput.addEventListener('input', validateConfirmPasswordField);
    confirmPasswordInput.addEventListener('blur', validateConfirmPasswordField);

    return updateSubmitState;
  }

  const updateLoginSubmitState = loginForm ? setupLoginValidation(loginForm) : undefined;

  const updateRegistrationSubmitState = registerForm
    ? setupRegistrationValidation(registerForm)
    : undefined;

  // submit handler для Login
  loginForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailInput = loginForm.querySelector<HTMLInputElement>('input[name="email"]');

    const passwordInput = loginForm.querySelector<HTMLInputElement>('input[name="password"]');

    if (!emailInput || !passwordInput) {
      return;
    }

    setSubmitLoadingText(loginForm, true, 'Signing in…');
    setAuthPendingState(true);

    try {
      const user = await loginWithEmailAndPassword(emailInput.value, passwordInput.value);

      completeAuthentication(user);
    } catch {
      showSnackbar({
        message: 'Unable to sign in. Check your credentials and try again.',
        variant: 'error',
      });

      setSubmitLoadingText(loginForm, false, '');
      setAuthPendingState(false);
    }
  });

  registerForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const usernameInput = registerForm.querySelector<HTMLInputElement>('input[name="username"]');

    const emailInput = registerForm.querySelector<HTMLInputElement>('input[name="email"]');

    const passwordInput = registerForm.querySelector<HTMLInputElement>('input[name="password"]');

    if (!usernameInput || !emailInput || !passwordInput) {
      return;
    }

    setSubmitLoadingText(registerForm, true, 'Creating account…');
    setAuthPendingState(true);

    try {
      const user = await registerWithEmailAndPassword(
        emailInput.value,
        passwordInput.value,
        usernameInput.value,
      );

      completeAuthentication(user);
    } catch {
      showSnackbar({
        message: 'Unable to create account. Please try again.',
        variant: 'error',
      });

      setSubmitLoadingText(registerForm, false, '');
      setAuthPendingState(false);
    }
  });

  passwordToggle?.addEventListener('click', () => {
    if (!passwordInput) {
      return;
    }

    const isPassword = passwordInput.type === 'password';

    passwordInput.type = isPassword ? 'text' : 'password';

    const icon = passwordToggle.querySelector<HTMLElement>('.material-symbols-outlined');

    if (icon) {
      icon.textContent = isPassword ? 'visibility' : 'visibility_off';
    }

    passwordToggle.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });

  const dialog = overlay.querySelector<HTMLElement>('.auth-dialog');

  function animateDialogHeight(updateView: () => void): void {
    if (!dialog) {
      updateView();
      return;
    }

    const startHeight = dialog.getBoundingClientRect().height;

    dialog.style.height = `${startHeight}px`;

    updateView();

    dialog.style.height = 'auto';
    const targetHeight = dialog.getBoundingClientRect().height;

    dialog.style.height = `${startHeight}px`;

    requestAnimationFrame(() => {
      dialog.style.height = `${targetHeight}px`;
    });

    const handleTransitionEnd = (event: TransitionEvent): void => {
      if (event.propertyName !== 'height') {
        return;
      }

      dialog.style.height = 'auto';
      dialog.removeEventListener('transitionend', handleTransitionEnd);
    };

    dialog.addEventListener('transitionend', handleTransitionEnd);
  }

  function showLogin(): void {
    if (registerForm) {
      clearFormValidation(registerForm);
    }

    if (loginForm) {
      clearFormValidation(loginForm);
    }

    animateDialogHeight(() => {
      loginView?.removeAttribute('hidden');
      registerView?.setAttribute('hidden', '');

      loginTab?.classList.add('auth-dialog__tab--active');
      registerTab?.classList.remove('auth-dialog__tab--active');
    });
  }

  function showRegister(): void {
    if (registerForm) {
      clearFormValidation(registerForm);
    }

    if (loginForm) {
      clearFormValidation(loginForm);
    }
    animateDialogHeight(() => {
      registerView?.removeAttribute('hidden');
      loginView?.setAttribute('hidden', '');

      registerTab?.classList.add('auth-dialog__tab--active');
      loginTab?.classList.remove('auth-dialog__tab--active');
    });
  }

  if (initialMode === 'register') {
    registerView?.removeAttribute('hidden');
    loginView?.setAttribute('hidden', '');

    registerTab?.classList.add('auth-dialog__tab--active');
    loginTab?.classList.remove('auth-dialog__tab--active');
  }

  loginTab?.addEventListener('click', () => {
    showLogin();
    updateAuthModeInUrl('login');
  });

  registerTab?.addEventListener('click', () => {
    showRegister();
    updateAuthModeInUrl('register');
  });

  function closeDialog(): void {
    if (isPending) {
      return;
    }

    onClose?.();

    overlay.classList.remove('auth-overlay--open');

    setTimeout(() => {
      overlay.remove();
      document.removeEventListener('keydown', handleEscape);
    }, 360);
  }

  function handleEscape(event: KeyboardEvent): void {
    if (!isPending && event.key === 'Escape') {
      closeDialog();
    }
  }

  overlay.addEventListener('click', (event) => {
    if (!isPending && event.target === overlay) {
      closeDialog();
    }
  });

  for (const button of switchButtons) {
    button.addEventListener('click', () => {
      if (button.dataset.authSwitch === 'register') {
        showRegister();
        updateAuthModeInUrl('register');
        return;
      }

      showLogin();
      updateAuthModeInUrl('login');
    });
  }

  document.addEventListener('keydown', handleEscape);

  requestAnimationFrame(() => {
    overlay.classList.add('auth-overlay--open');
  });

  return overlay;
}

export async function restoreAuthDialogFromUrl(): Promise<void> {
  const authMode = new URLSearchParams(location.search).get('auth');

  if (authMode !== 'login' && authMode !== 'register') {
    return;
  }

  const sessionState = await resolveAppSession();

  if (sessionState.status === 'authenticated') {
    removeAuthModeFromUrl();

    showSnackbar({
      message: 'You are already authenticated.',
      variant: 'error',
    });

    return;
  }

  const existingDialog = document.querySelector('.auth-overlay');

  if (existingDialog) {
    return;
  }

  const dialog = createAuthDialog(authMode, () => {
    history.back();
  });

  document.body.append(dialog);
}
