import './styles/main.scss';
import { getRouteFromLocation, renderRoute } from './router';

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

handleRouteChange();
