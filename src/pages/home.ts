import { createHeader } from '../components/header';
import { createHero } from '../components/hero';
import { createNewGames } from '../components/new-games';
import { createLeaderboard } from '../components/leaderboard';

export function createHomePage(): HTMLElement {
  const page = document.createElement('div');

  page.append(createHeader());

  const main = document.createElement('main');

  main.append(createHero());
  main.append(createNewGames());
  main.append(createLeaderboard());

  page.append(main);

  return page;
}
