import './styles/main.scss';
import { createHomePage } from './pages/home';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root element not found');
}

app.appendChild(createHomePage());
