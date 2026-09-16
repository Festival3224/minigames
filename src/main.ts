import './styles/main.scss';
import { createHomePage } from './pages/home';

const app = document.createElement('div');
app.id = 'app';

document.body.append(app);
app.append(createHomePage());
