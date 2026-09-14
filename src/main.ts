import './styles/main.scss';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root element not found');
}

app.innerHTML = `
  <main>
    <h1>MiniGames</h1>
  </main>
`;
