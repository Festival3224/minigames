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
                        visibility_off
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
                placeholder="e.g. CozyGamer_99"
                autocomplete="username"
              />
            </div>
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
                placeholder="Min. 8 characters"
                autocomplete="new-password"
              />
            </div>
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
          </label>
        </div>

        <div class="auth-dialog__actions">
          <button class="auth-dialog__submit" type="submit">
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

  const forms = overlay.querySelectorAll<HTMLFormElement>('.auth-dialog__form');

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

  for (const form of forms) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }

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
    animateDialogHeight(() => {
      loginView?.removeAttribute('hidden');
      registerView?.setAttribute('hidden', '');

      loginTab?.classList.add('auth-dialog__tab--active');
      registerTab?.classList.remove('auth-dialog__tab--active');
    });
  }

  function showRegister(): void {
    animateDialogHeight(() => {
      registerView?.removeAttribute('hidden');
      loginView?.setAttribute('hidden', '');

      registerTab?.classList.add('auth-dialog__tab--active');
      loginTab?.classList.remove('auth-dialog__tab--active');
    });
  }

  loginTab?.addEventListener('click', showLogin);
  registerTab?.addEventListener('click', showRegister);

  function closeDialog(): void {
    // overlay.classList.add('auth-overlay--closing');
    overlay.classList.remove('auth-overlay--open');

    /* globalThis.setTimeout(() => {
      overlay.remove();
      document.removeEventListener('keydown', handleEscape);
    }, 360); */

    setTimeout(() => {
      overlay.remove();
      document.removeEventListener('keydown', handleEscape);
    }, 360);
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

  for (const button of switchButtons) {
    button.addEventListener('click', () => {
      if (button.dataset.authSwitch === 'register') {
        showRegister();
      } else {
        showLogin();
      }
    });
  }

  document.addEventListener('keydown', handleEscape);

  requestAnimationFrame(() => {
    overlay.classList.add('auth-overlay--open');
  });

  return overlay;
}
