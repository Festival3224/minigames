import { showSnackbar } from './snackbar';
import { fetchLeaderboard } from '../api/games-api';
import type { LeaderboardPlayer } from '../api/games-api';

function getPlayerInitials(playerName: string): string {
  const initials: Record<string, string> = {
    Alex_Pro99: 'AP',
    CozyGamer_x: 'CG',
    MatchMaster: 'MM',
    BubblePop: 'BP',
    SudokuGod: 'SG',
  };

  return initials[playerName] ?? playerName.slice(0, 2).toUpperCase();
}

function createLeaderboardRows(players: LeaderboardPlayer[]): string {
  return players
    .map(
      (player) => /* html */ `
        <tr>
          <td class="leaderboard__rank">#${player.rank}</td>
          <td class="leaderboard__player">
            <span class="leaderboard__avatar">${getPlayerInitials(player.playerName)}</span>
            <span class="leaderboard__player-name">${player.playerName}</span>
          </td>
          <td class="leaderboard__games">${player.gamesPlayed}</td>

          <td class="leaderboard__score">
            <span class="leaderboard__score-desktop">
              ${player.totalScore.toLocaleString('en-US')}
            </span>
            <span class="leaderboard__score-mobile">
              ${(player.totalScore / 1000).toFixed(1)}K
            </span>
          </td>

          <td class="leaderboard__streak">
            🔥
            <span class="leaderboard__streak-desktop">${player.streakDays} days</span>
            <span class="leaderboard__streak-tablet">${player.streakDays}d</span>
          </td>

          <td>
            <span class="leaderboard__game">${player.favoriteGameName}</span>
          </td>
        </tr>
      `,
    )
    .join('');
}

export function createLeaderboard(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'leaderboard';

  section.innerHTML = /* html */ `
    <h2 class="leaderboard__title">
        <span class="leaderboard__title-desktop">Top Players This Week</span>
        <span class="leaderboard__title-mobile">Top Players</span>
    </h2>

    <div class="leaderboard__table-wrapper">
      <table class="leaderboard__table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th class="leaderboard__games">
                <span class="leaderboard__heading-desktop">Games Played</span>
                <span class="leaderboard__heading-tablet">Games</span>
            </th>
            <th>
                <span class="leaderboard__heading-desktop">Total Score</span>
                <span class="leaderboard__heading-tablet">Score</span>
            </th>
            <th>Streak</th>
            <th>Favorite Game</th>
          </tr>
        </thead>

        <tbody class="leaderboard__body"></tbody>
      </table>
    </div>
  `;

  const body = section.querySelector<HTMLTableSectionElement>('.leaderboard__body');

  if (!body) {
    return section;
  }

  const loadLeaderboard = async (): Promise<void> => {
    // hideSnackbar();

    body.innerHTML = /* html */ `
      <tr>
        <td colspan="6" class="leaderboard__loading">
          Loading leaderboard...
        </td>
      </tr>
    `;

    try {
      const players = await fetchLeaderboard();

      if (players.length === 0) {
        body.innerHTML = /* html */ `
          <tr>
            <td colspan="6" class="leaderboard__empty">
              No leaderboard data available.
            </td>
          </tr>
        `;

        return;
      }

      body.innerHTML = createLeaderboardRows(players);
    } catch {
      body.innerHTML = /* html */ `
        <tr>
          <td colspan="6" class="leaderboard__error">
            <div class="leaderboard__error-content">
              <span>Failed to load leaderboard.</span>

              <button
                class="leaderboard__retry"
                type="button"
              >
                Retry
              </button>
            </div>
          </td>
        </tr>
      `;

      const retryButton = body.querySelector<HTMLButtonElement>('.leaderboard__retry');

      retryButton?.addEventListener('click', () => {
        void loadLeaderboard();
      });

      showSnackbar({
        message: 'Failed to load leaderboard.',
        variant: 'error',
      });
    }
  };

  void loadLeaderboard();

  return section;
}
