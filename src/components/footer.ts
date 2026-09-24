import logoIcon from '../assets/icons/logo-icon.svg';
import rsLogo from '../assets/icons/rs-logo-container.svg';
import githubIcon from '../assets/icons/github-icon.svg';

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = /* html */ `
    <div class="footer__top">
      <div class="footer__brand">
        <div class="footer__logo">
          <img
            class="footer__logo-icon"
            src="${logoIcon}"
            alt=""
            aria-hidden="true"
          />
          <span>MiniGames</span>
        </div>

        <p class="footer__description">
          Take a short break and have fun. Hundreds of curated casual
          mini-games right in your web browser. No download required.
        </p>
      </div>

      <div class="footer__links">
        <nav class="footer__column" aria-label="Explore">
          <h3 class="footer__title">Explore</h3>
          <a href="#">Home</a>
          <a href="#">Library</a>
          <a href="#">Categories</a>
          <a href="#">Tournaments</a>
        </nav>

        <nav class="footer__column" aria-label="Company">
          <h3 class="footer__title">Company</h3>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>

        <div class="footer__community">
          <h3 class="footer__title">Community</h3>

          <div class="footer__socials">
            <a href="#" class="footer__social" aria-label="Share">
                <span class="material-symbols-outlined">share</span>
            </a>

            <a href="#" class="footer__social" aria-label="Chat">
                <span class="material-symbols-outlined">chat</span>
            </a>

            <a href="#" class="footer__social" aria-label="RSS">
                <span class="material-symbols-outlined">rss_feed</span>
            </a>
          </div>

        </div>
      </div>
    </div>

    <div class="footer__divider"></div>

    <div class="footer__bottom">
      <span class="footer__copyright">
        © 2026 MiniGames. All rights reserved.
      </span>

      <div class="footer__meta">
        <a href="#" class="footer__meta-link footer__rsschool">
          <img
            class="footer__rs-logo"
            src="${rsLogo}"
            alt=""
            aria-hidden="true"
          />
          <span>RS School</span>
        </a>

        <a href="#" class="footer__meta-link footer__student">
          <img
            class="footer__github-icon"
            src="${githubIcon}"
            alt=""
            aria-hidden="true"
          />
          <span>@Festival3224</span>
        </a>
      </div>

      <span class="footer__love">Designed with love</span>
    </div>
  `;

  return footer;
}
