export function createHeader(): HTMLElement {
  const header = document.createElement('header');

  header.className = 'header';

  header.innerHTML = `
    <div class="header__container">
      <a class="header__logo" href="#" aria-label="MiniGames home">
        <img
            class="header__logo-icon"
            src="/src/assets/logo-icon.svg"
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
  `;

  return header;
}
