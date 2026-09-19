export function createHeader(): HTMLElement {
  const header = document.createElement('header');

  header.className = 'header';

  header.innerHTML = /* html */ `
      <div class="header__container">
        <a class="header__logo" href="#" aria-label="MiniGames home">
          <img
              class="header__logo-icon"
              src="/src/assets/icons/logo-icon.svg"
              alt=""
              aria-hidden="true"
          />
          <span>MiniGames</span>
        </a>

        <div class="header__actions">
          <nav class="header__nav" aria-label="Main navigation">
            <a class="header__nav-link header__nav-link--active" href="#">Home</a>
            <a class="header__nav-link" href="#">Library</a>
            <a class="header__nav-link" href="#">Tournaments</a>
            <a class="header__nav-link" href="#">Community</a>
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
              src="/src/assets/icons/logo-icon.svg"
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
        <a class="header__mobile-link header__mobile-link--active" href="#">Home</a>
        <a class="header__mobile-link" href="#">Library</a>
        <a class="header__mobile-link" href="#">Tournaments</a>
        <a class="header__mobile-link" href="#">Community</a>
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

  menuButton?.addEventListener('click', openMenu);
  closeButton?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  const mobileLinks = header.querySelectorAll<HTMLAnchorElement>('.header__mobile-link');

  for (const link of mobileLinks) {
    link.addEventListener('click', closeMenu);
  }

  return header;
}
