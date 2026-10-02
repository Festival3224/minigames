import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';
import { navigate } from '../router';

export function createNotFoundPage(): HTMLElement {
  const page = document.createElement('div');
  page.className = 'page';

  page.append(createHeader());

  const main = document.createElement('main');
  main.className = 'not-found';

  main.innerHTML = /* html */ `
    <section class="not-found__content">
      <p class="not-found__code">404</p>

      <h1 class="not-found__title">
        Page not found
      </h1>

      <p class="not-found__text">
        The page you’re looking for doesn’t exist.
      </p>

      <button
        class="not-found__home"
        type="button"
      >
        Return to Home Page
      </button>
    </section>
  `;

  const homeButton = main.querySelector<HTMLButtonElement>('.not-found__home');

  homeButton?.addEventListener('click', () => {
    navigate('/');
  });

  page.append(main);
  page.append(createFooter());

  return page;
}
