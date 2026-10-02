import './styles/main.scss';
import { getRouteFromLocation, renderRoute } from './router';

const app = document.createElement('div');
app.id = 'app';

document.body.append(app);

function handleRouteChange(): void {
  renderRoute(getRouteFromLocation());
}

addEventListener('popstate', handleRouteChange);

handleRouteChange();
