import { createHeader } from '../components/header';

export function createHomePage(): HTMLElement {
  const page = document.createElement('div');

  page.append(createHeader());

  const main = document.createElement('main');

  main.innerHTML = `
    <section class="hero">
      <div class="hero__container">
        <h1>MiniGames</h1>
        <p>Play, compete, and have fun.</p>
      </div>
    </section>

    <section class="games">
      <div class="games__container">
        <h2>Games</h2>
      </div>
    </section>

    <section class="leaderboard">
      <div class="leaderboard__container">
        <h2>Leaderboard</h2>
      </div>
    </section>
  `;

  page.append(main);

  return page;
}
