import illustrationSide from '../assets/illustration-side.png';
import uploadIcon from '../assets/icons/upload.svg';

export function createDeveloperCta(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'developer-cta';

  section.innerHTML = /* html */ `
    <img
      class="developer-cta__image"
      src="${illustrationSide}"
      alt=""
      aria-hidden="true"
    />

    <div class="developer-cta__card">
      <h2 class="developer-cta__title">Are You a Game Developer?</h2>

      <p class="developer-cta__text">
        Want to see your game on MiniGames? We’re always looking for fun,<br>
        engaging mini games to add to our platform. Submit your game<br>
        and reach thousands of players!
      </p>

      <button class="developer-cta__button" type="button">
        <img
           class="developer-cta__button-icon"
           src="${uploadIcon}"
           alt=""
           aria-hidden="true"
        />
        Submit Form
      </button>

      <p class="developer-cta__contact">
        or contact us at developers@minigames.com
      </p>
    </div>
  `;

  return section;
}
