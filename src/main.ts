import './styles/main.scss';
import { getRouteFromLocation, renderRoute } from './router';
import { APP_SESSION_CHANGED_EVENT, resolveAppSession } from './auth/app-session-manager';
import { showSnackbar } from './components/snackbar';

const app = document.createElement('div');
app.id = 'app';

document.body.append(app);

function handleRouteChange(): void {
  document.querySelector('.game-details-backdrop')?.remove();
  document.querySelector('.auth-overlay')?.remove();
  document.body.classList.remove('dialog-open');

  renderRoute(getRouteFromLocation());
}

addEventListener('popstate', handleRouteChange);
addEventListener(APP_SESSION_CHANGED_EVENT, handleRouteChange);

// handleRouteChange();
async function initializeApp(): Promise<void> {
  const sessionState = await resolveAppSession();

  handleRouteChange();

  if (sessionState.status === 'expired') {
    showSnackbar({
      message: 'Your session has expired. Please log in again.',
      variant: 'error',
    });
  }
}

void initializeApp();
