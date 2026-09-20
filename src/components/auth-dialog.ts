import googleIcon from '../assets/icons/google.svg';

export function createAuthDialog(): HTMLElement {
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
                    visibility
                </span>
                </button>
              </div>
            </label>

            <button class="auth-dialog__forgot" type="button">
               Forgot Password?
            </button>
        </div>


        <div class="auth-dialog__actions">
            <button class="auth-dialog__submit" type="submit">
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
        <button class="auth-dialog__switch-button" type="button">
          Register
        </button>
      </p>

      </div>
    </div>
    <div class="auth-dialog__register" hidden>
        <!-- здесь будет Registr диалог -->
    </div>
  `;

  const loginView = overlay.querySelector<HTMLElement>('.auth-dialog__login');
  const registerView = overlay.querySelector<HTMLElement>('.auth-dialog__register');

  const loginTab = overlay.querySelector<HTMLButtonElement>('[data-auth-tab="login"]');
  const registerTab = overlay.querySelector<HTMLButtonElement>('[data-auth-tab="register"]');

  loginTab?.addEventListener('click', () => {
    loginView?.removeAttribute('hidden');
    registerView?.setAttribute('hidden', '');

    loginTab.classList.add('auth-dialog__tab--active');
    registerTab?.classList.remove('auth-dialog__tab--active');
  });

  registerTab?.addEventListener('click', () => {
    registerView?.removeAttribute('hidden');
    loginView?.setAttribute('hidden', '');

    registerTab.classList.add('auth-dialog__tab--active');
    loginTab?.classList.remove('auth-dialog__tab--active');
  });

  function closeDialog(): void {
    overlay.remove();
    document.removeEventListener('keydown', handleEscape);
  }

  function handleEscape(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      closeDialog();
    }
  }

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeDialog();
    }
  });

  document.addEventListener('keydown', handleEscape);

  return overlay;
}
