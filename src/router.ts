import { createHomePage } from './pages/home';
import { createLibraryPage } from './pages/library';
import { createNotFoundPage } from './pages/not-found';

import { resolveAppSession } from './auth/app-session-manager';
import { showSnackbar } from './components/snackbar';

export type Route = 'home' | 'library' | 'not-found';

export function getRouteFromLocation(): Route {
  const base = import.meta.env.BASE_URL;
  const path = location.pathname.replace(base, '/') || '/';

  if (path === '/' || path === '/home') {
    return 'home';
  }

  return path === '/library' ? 'library' : 'not-found';
}

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

  if (route === 'home') {
    app.append(createHomePage());
    return;
  }

  app.append(createNotFoundPage());
}

export async function navigate(path: string): Promise<void> {
  const sessionState = await resolveAppSession();

  if (sessionState.status === 'expired') {
    showSnackbar({
      message: 'Your session has expired. Please log in again.',
      variant: 'error',
    });
  }

  const base = import.meta.env.BASE_URL;
  const normalizedPath = path === '/' ? base : `${base}${path.slice(1)}`;

  history.pushState({}, '', normalizedPath);
  renderRoute(getRouteFromLocation());
}
