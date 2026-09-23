import { createHomePage } from './pages/home';
import { createLibraryPage } from './pages/library';

type Route = 'home' | 'library';

export function renderRoute(route: Route): void {
  const app = document.querySelector<HTMLElement>('#app');

  if (!app) {
    return;
  }

  app.replaceChildren();

  if (route === 'library') {
    app.append(createLibraryPage());
    return;
  }

  app.append(createHomePage());
}

export function getRouteFromHash(): Route {
  return location.hash === '#library' ? 'library' : 'home';
}
