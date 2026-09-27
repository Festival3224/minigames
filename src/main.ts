import './styles/main.scss';
import { getRouteFromHash, renderRoute } from './router';
// import { createHomePage } from './pages/home';

const app = document.createElement('div');
app.id = 'app';

document.body.append(app);

function handleRouteChange(): void {
  renderRoute(getRouteFromHash());
}

addEventListener('hashchange', handleRouteChange);

handleRouteChange();
