export function createHero(): HTMLElement {
  const section = document.createElement('section');

  section.className = 'hero';

  section.innerHTML = /* html */ `
    <div class="hero__container">
      <div class="hero__card">
        <h1 class="hero__title">
          Take a Short Break<br />
          & Have Fun
        </h1>

        <p class="hero__text hero__text--desktop">
           Discover hundreds of curated casual mini-games. Play instantly in your browser —
           puzzle, match 3, farm, and board classics.
        </p>

        <p class="hero__text hero__text--mobile">
            Discover hundreds of curated casual mini-games right in your browser.
        </p>

        <button class="hero__button" type="button">
          Browse Library
        </button>
      </div>
    </div>
  `;

  return section;
}
