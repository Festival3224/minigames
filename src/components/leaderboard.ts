interface LeaderboardPlayer {
  rank: number;
  playerName: string;
  gamesPlayed: number;
  totalScore: number;
  streakDays: number;
  favoriteGameSlug: string;
  favoriteGameName: string;
}

const players: LeaderboardPlayer[] = [
  {
    rank: 1,
    playerName: 'Alex_Pro99',
    gamesPlayed: 142,
    totalScore: 94_250,
    streakDays: 12,
    favoriteGameSlug: 'heartopia',
    favoriteGameName: 'Heartopia',
  },
  {
    rank: 2,
    playerName: 'CozyGamer_x',
    gamesPlayed: 118,
    totalScore: 81_400,
    streakDays: 8,
    favoriteGameSlug: 'cat-mail-co',
    favoriteGameName: 'Cat Mail Co.',
  },
  {
    rank: 3,
    playerName: 'MatchMaster',
    gamesPlayed: 98,
    totalScore: 72_110,
    streakDays: 5,
    favoriteGameSlug: 'tiny-glade',
    favoriteGameName: 'Tiny Glade',
  },
  {
    rank: 4,
    playerName: 'BubblePop',
    gamesPlayed: 87,
    totalScore: 65_900,
    streakDays: 3,
    favoriteGameSlug: 'whisper-of-the-house',
    favoriteGameName: 'Whisper of the House',
  },
  {
    rank: 5,
    playerName: 'SudokuGod',
    gamesPlayed: 74,
    totalScore: 59_320,
    streakDays: 2,
    favoriteGameSlug: 'cat-chess',
    favoriteGameName: 'Cat Chess',
  },
];

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

export function createLeaderboard(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'leaderboard';

  const rows = players
    .map(
      (player) => /* html */ `
        <tr>
          <td class="leaderboard__rank">#${player.rank}</td>
          <td class="leaderboard__player">
            <span class="leaderboard__avatar">${getPlayerInitials(player.playerName)}</span>
            <span class="leaderboard__player-name">${player.playerName}</span>
          </td>
          <td>${player.gamesPlayed}</td>
          <td>${player.totalScore.toLocaleString('en-US')}</td>
          <td>🔥 ${player.streakDays} days</td>
          <td>
            <span class="leaderboard__game">${player.favoriteGameName}</span>
          </td>
        </tr>
      `,
    )
    .join('');

  section.innerHTML = /* html */ `
    <h2 class="leaderboard__title">Top Players This Week</h2>

    <div class="leaderboard__table-wrapper">
      <table class="leaderboard__table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Games Played</th>
            <th>Total Score</th>
            <th>Streak</th>
            <th>Favorite Game</th>
          </tr>
        </thead>

        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;

  return section;
}
