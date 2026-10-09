import { navigate } from '../router';
import { createAuthDialog } from './auth-dialog';
import type { AuthMode } from './auth-dialog';
import logoIcon from '../assets/icons/logo-icon.svg';

import { getActiveSession, logoutAppSession } from '../auth/app-session-manager';
import { getProfileInitials, getProfileName } from '../auth/profile';
import { showSnackbar } from './snackbar';

function updateAuthInUrl(mode?: AuthMode): void {
  const parameters = new URLSearchParams(location.search);

  if (mode) {
    parameters.set('auth', mode);
  } else {
    parameters.delete('auth');
  }

  const query = parameters.toString();
  const path = query ? `${location.pathname}?${query}` : location.pathname;

  history.pushState({}, '', path);
}

export function createHeader(): HTMLElement {
  const header = document.createElement('header');

  header.className = 'header';

  const session = getActiveSession();

  const profileName = session ? getProfileName(session.displayName, session.email) : undefined;

  const profileInitials = profileName ? getProfileInitials(profileName) : undefined;

  const desktopUserActions = session
    ? `
      <div class="header__profile">
        <div class="header__profile-main">
          <span class="header__profile-name"></span>

          <div class="header__avatar">
            ${
              session.avatarUrl
                ? `
                  <img
                    class="header__avatar-image"
                    src="${session.avatarUrl}"
                    alt=""
                  />
                `
                : `
                  <span class="header__avatar-initials"></span>
                `
            }
          </div>
        </div>

        <button class="header__logout" type="button">
          Log Out
        </button>
      </div>
    `
    : `
      <button class="header__login" type="button">
        Log In
      </button>

      <button class="header__signup" type="button">
        Sign Up
      </button>
    `;

  const mobileUserActions = session
    ? `
      <div class="header__mobile-profile">
        <div class="header__mobile-profile-info">
          <div class="header__mobile-avatar">
            ${
              session.avatarUrl
                ? `
                  <img
                    class="header__mobile-avatar-image"
                    src="${session.avatarUrl}"
                    alt=""
                  />
                `
                : `
                  <span class="header__mobile-avatar-initials"></span>
                `
            }
          </div>

          <span class="header__mobile-profile-name"></span>
        </div>

        <button class="header__mobile-logout" type="button">
          Log Out
        </button>
      </div>
    `
    : `
      <button class="header__mobile-login" type="button">
        Log In
      </button>

      <button class="header__mobile-signup" type="button">
        Sign Up
      </button>
    `;

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
            ${desktopUserActions}

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
        ${mobileUserActions}
      </div>
    </div>

    <div class="header__backdrop"></div>

  `;

  const mobileProfileName = header.querySelector<HTMLElement>('.header__mobile-profile-name');

  if (mobileProfileName && profileName) {
    mobileProfileName.textContent = profileName;
  }

  const mobileProfileInitials = header.querySelector<HTMLElement>(
    '.header__mobile-avatar-initials',
  );

  if (mobileProfileInitials && profileInitials) {
    mobileProfileInitials.textContent = profileInitials;
  }

  const profileNameElement = header.querySelector<HTMLElement>('.header__profile-name');

  if (profileNameElement && profileName) {
    profileNameElement.textContent = profileName;
  }

  const profileInitialsElement = header.querySelector<HTMLElement>('.header__avatar-initials');

  if (profileInitialsElement && profileInitials) {
    profileInitialsElement.textContent = profileInitials;
  }

  function setupAvatarFallback(
    avatarSelector: string,
    imageSelector: string,
    initialsClass: string,
    fallbackClass: string,
  ): void {
    const avatar = header.querySelector<HTMLElement>(avatarSelector);

    const image = header.querySelector<HTMLImageElement>(imageSelector);

    image?.addEventListener('error', () => {
      image.remove();

      if (profileInitials) {
        const initials = document.createElement('span');
        initials.className = initialsClass;
        initials.textContent = profileInitials;
        avatar?.append(initials);
        return;
      }

      avatar?.classList.add(fallbackClass);
    });
  }

  setupAvatarFallback(
    '.header__avatar',
    '.header__avatar-image',
    'header__avatar-initials',
    'header__avatar--fallback',
  );

  setupAvatarFallback(
    '.header__mobile-avatar',
    '.header__mobile-avatar-image',
    'header__mobile-avatar-initials',
    'header__mobile-avatar--fallback',
  );

  /*   const avatar = header.querySelector<HTMLElement>('.header__avatar');

  const avatarImage =
    header.querySelector<HTMLImageElement>('.header__avatar-image'); */

  /*   avatarImage?.addEventListener('error', () => {
    avatarImage.remove();

    const initials = document.createElement('span');
    initials.className = 'header__avatar-initials';

    if (profileInitials) {
      initials.textContent = profileInitials;
      avatar?.append(initials);
      return;
    }

    avatar?.classList.add('header__avatar--fallback');
  }); */

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

    updateAuthInUrl('login');

    document.body.append(
      createAuthDialog('login', () => {
        history.back();
      }),
    );
  });

  signupButton?.addEventListener('click', () => {
    const existingDialog = document.querySelector('.auth-overlay');

    if (existingDialog) {
      return;
    }

    updateAuthInUrl('register');

    document.body.append(
      createAuthDialog('register', () => {
        history.back();
      }),
    );
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

    updateAuthInUrl('login');

    document.body.append(
      createAuthDialog('login', () => {
        history.back();
      }),
    );
  });

  mobileSignupButton?.addEventListener('click', () => {
    closeMenu();

    const existingDialog = document.querySelector('.auth-overlay');

    if (existingDialog) {
      return;
    }

    updateAuthInUrl('register');

    document.body.append(
      createAuthDialog('register', () => {
        history.back();
      }),
    );
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

  const logoutButton = header.querySelector<HTMLButtonElement>('.header__logout');

  const mobileLogoutButton = header.querySelector<HTMLButtonElement>('.header__mobile-logout');

  async function handleLogout(): Promise<void> {
    const isFirebaseSignOutSuccessful = await logoutAppSession();

    const replacementHeader = createHeader();

    header.replaceWith(replacementHeader);

    if (!isFirebaseSignOutSuccessful) {
      showSnackbar({
        message: 'Signed out locally, but Firebase sign-out failed.',
        variant: 'error',
      });
    }
  }

  logoutButton?.addEventListener('click', () => {
    void handleLogout();
  });

  mobileLogoutButton?.addEventListener('click', () => {
    closeMenu();
    void handleLogout();
  });

  return header;
}
