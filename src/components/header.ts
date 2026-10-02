import { navigate } from '../router';
import { createAuthDialog } from './auth-dialog';
import logoIcon from '../assets/icons/logo-icon.svg';

export function createHeader(): HTMLElement {
  const header = document.createElement('header');

  header.className = 'header';

  header.innerHTML = /* html */ `
      <div class="header__container">
        <a class="header__logo" href="/" aria-label="MiniGames home">
          <img
              class="header__logo-icon"
              src="${logoIcon}"
              alt=""
              aria-hidden="true"
          />
          <span>MiniGames</span>
        </a>

        <div class="header__actions">
          <nav class="header__nav" aria-label="Main navigation">
            <a class="header__nav-link" href="/" data-route="home">Home</a>
            <a class="header__nav-link" href="/library" data-route="library">Library</a>
            <a class="header__nav-link" href="/">Tournaments</a>
            <a class="header__nav-link" href="/">Community</a>
          </nav>

          <div class="header__user-actions">
            <button class="header__login" type="button">
              Log In
            </button>

            <button class="header__signup" type="button">
              Sign Up
            </button>

            <button
              class="header__menu"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>

      <div class="header__mobile-menu" aria-hidden="true">
        <div class="header__mobile-menu-top">
          <a class="header__mobile-logo" href="#" aria-label="MiniGames home">
            <img
              class="header__mobile-logo-icon"
              src="${logoIcon}"
              alt=""
              aria-hidden="true"
            />
            <span>MiniGames</span>
          </a>

          <button
            class="header__mobile-close"
            type="button"
            aria-label="Close menu"
          >
            <span class="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
      </div>

      <nav class="header__mobile-nav" aria-label="Mobile navigation">
        <a class="header__mobile-link" href="/" data-route="home">Home</a>
        <a class="header__mobile-link" href="/library" data-route="library">Library</a>
        <a class="header__mobile-link" href="/">Tournaments</a>
        <a class="header__mobile-link" href="/">Community</a>
      </nav>

      <div class="header__mobile-actions">
        <button class="header__mobile-login" type="button">Log In</button>
        <button class="header__mobile-signup" type="button">Sign Up</button>
      </div>
    </div>

    <div class="header__backdrop"></div>

  `;

  const menuButton = header.querySelector<HTMLButtonElement>('.header__menu');
  const closeButton = header.querySelector<HTMLButtonElement>('.header__mobile-close');
  const mobileMenu = header.querySelector<HTMLElement>('.header__mobile-menu');
  const backdrop = header.querySelector<HTMLElement>('.header__backdrop');

  const loginButton = header.querySelector<HTMLButtonElement>('.header__login');
  const signupButton = header.querySelector<HTMLButtonElement>('.header__signup');

  const mobileLoginButton = header.querySelector<HTMLButtonElement>('.header__mobile-login');

  const mobileSignupButton = header.querySelector<HTMLButtonElement>('.header__mobile-signup');

  const base = import.meta.env.BASE_URL;
  const path = location.pathname.replace(base, '/') || '/';

  const currentRoute = path === '/library' ? 'library' : 'home';

  // const currentRoute = location.pathname === '/library' ? 'library' : 'home';
  const routeLinks = header.querySelectorAll<HTMLAnchorElement>('[data-route]');

  for (const link of routeLinks) {
    if (link.dataset.route !== currentRoute) {
      continue;
    }

    if (link.classList.contains('header__nav-link')) {
      link.classList.add('header__nav-link--active');
    }

    if (link.classList.contains('header__mobile-link')) {
      link.classList.add('header__mobile-link--active');
    }
  }

  for (const link of routeLinks) {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const route = link.dataset.route;

      if (route === 'library') {
        navigate('/library');
        return;
      }

      navigate('/');
    });
  }

  const logoLinks = header.querySelectorAll<HTMLAnchorElement>(
    '.header__logo, .header__mobile-logo',
  );

  for (const logoLink of logoLinks) {
    logoLink.addEventListener('click', (event) => {
      event.preventDefault();
      navigate('/');
    });
  }

  loginButton?.addEventListener('click', () => {
    const existingDialog = document.querySelector('.auth-overlay');

    if (existingDialog) {
      return;
    }

    document.body.append(createAuthDialog());
  });

  signupButton?.addEventListener('click', () => {
    const existingDialog = document.querySelector('.auth-overlay');

    if (existingDialog) {
      return;
    }

    const dialog = createAuthDialog();

    document.body.append(dialog);

    const registerTab = dialog.querySelector<HTMLButtonElement>('[data-auth-tab="register"]');

    registerTab?.click();
  });

  function openMenu(): void {
    mobileMenu?.classList.add('header__mobile-menu--open');
    backdrop?.classList.add('header__backdrop--visible');

    menuButton?.setAttribute('aria-expanded', 'true');
    mobileMenu?.setAttribute('aria-hidden', 'false');

    document.body.classList.add('menu-open');
  }

  function closeMenu(): void {
    mobileMenu?.classList.remove('header__mobile-menu--open');
    backdrop?.classList.remove('header__backdrop--visible');

    menuButton?.setAttribute('aria-expanded', 'false');
    mobileMenu?.setAttribute('aria-hidden', 'true');

    document.body.classList.remove('menu-open');
  }

  mobileLoginButton?.addEventListener('click', () => {
    closeMenu();

    const existingDialog = document.querySelector('.auth-overlay');

    if (existingDialog) {
      return;
    }

    document.body.append(createAuthDialog());
  });

  mobileSignupButton?.addEventListener('click', () => {
    closeMenu();

    const existingDialog = document.querySelector('.auth-overlay');

    if (existingDialog) {
      return;
    }

    const dialog = createAuthDialog();

    document.body.append(dialog);

    const registerTab = dialog.querySelector<HTMLButtonElement>('[data-auth-tab="register"]');

    registerTab?.click();
  });

  menuButton?.addEventListener('click', openMenu);
  closeButton?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  const mobileLinks = header.querySelectorAll<HTMLAnchorElement>('.header__mobile-link');

  for (const link of mobileLinks) {
    link.addEventListener('click', (event) => {
      closeMenu();

      if (link.dataset.route) {
        return;
      }

      event.preventDefault();
      navigate('/');
    });
  }

  return header;
}
