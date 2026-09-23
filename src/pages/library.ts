import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

export function createLibraryPage(): HTMLElement {
  const page = document.createElement('div');

  page.append(createHeader());

  const main = document.createElement('main');

  const title = document.createElement('h1');
  title.textContent = 'Library';

  main.append(title);
  main.append(createFooter());

  page.append(main);

  return page;
}
