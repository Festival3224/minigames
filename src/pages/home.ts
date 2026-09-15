import { createHeader } from '../components/header';
import { createHero } from '../components/hero';
import { createNewGames } from '../components/new-games';

export function createHomePage(): HTMLElement {
  const page = document.createElement('div');

  page.append(createHeader());

  const main = document.createElement('main');

  main.append(createHero());
  main.append(createNewGames());

  page.append(main);

  return page;
}
