import { createHeader } from '../components/header';
import { createHero } from '../components/hero';

export function createHomePage(): HTMLElement {
  const page = document.createElement('div');

  page.append(createHeader());

  const main = document.createElement('main');

  main.append(createHero());

  page.append(main);

  return page;
}
