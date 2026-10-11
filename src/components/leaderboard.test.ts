// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import { fetchLeaderboard } from '../api/games-api';
import { createLeaderboard } from './leaderboard';
import { showSnackbar } from './snackbar';

vi.mock('../api/games-api', () => ({
  fetchLeaderboard: vi.fn(),
}));

vi.mock('./snackbar', () => ({
  showSnackbar: vi.fn(),
}));

describe('leaderboard', () => {
  afterEach(() => {
    vi.clearAllMocks();
    document.body.replaceChildren();
  });

  it('loads and renders leaderboard players', async () => {
    vi.mocked(fetchLeaderboard).mockResolvedValue([
      {
        rank: 1,
        playerName: 'Alex_Pro99',
        gamesPlayed: 12,
        totalScore: 15_000,
        streakDays: 5,
        favoriteGameSlug: 'forest-game',
        favoriteGameName: 'Forest Game',
      },
    ]);

    const leaderboard = createLeaderboard();
    document.body.append(leaderboard);

    await vi.waitFor(() => {
      expect(leaderboard.textContent).toContain('Alex_Pro99');
    });

    expect(leaderboard.textContent).toContain('Forest Game');
    expect(leaderboard.textContent).toContain('15,000');
    expect(leaderboard.textContent).toContain('5 days');

    expect(fetchLeaderboard).toHaveBeenCalledOnce();
  });

  it('shows an empty state when there are no leaderboard players', async () => {
    vi.mocked(fetchLeaderboard).mockResolvedValue([]);

    const leaderboard = createLeaderboard();
    document.body.append(leaderboard);

    await vi.waitFor(() => {
      expect(leaderboard.textContent).toContain('No leaderboard data available.');
    });
  });

  it('shows an error state when leaderboard loading fails', async () => {
    vi.mocked(fetchLeaderboard).mockRejectedValue(new Error('Request failed'));

    const leaderboard = createLeaderboard();
    document.body.append(leaderboard);

    await vi.waitFor(() => {
      expect(leaderboard.textContent).toContain('Failed to load leaderboard.');
    });

    expect(leaderboard.querySelector('.leaderboard__retry')).not.toBeNull();

    expect(showSnackbar).toHaveBeenCalledWith({
      message: 'Failed to load leaderboard.',
      variant: 'error',
    });
  });

  it('retries loading leaderboard after an error', async () => {
    vi.mocked(fetchLeaderboard)
      .mockRejectedValueOnce(new Error('Request failed'))
      .mockResolvedValueOnce([]);

    const leaderboard = createLeaderboard();
    document.body.append(leaderboard);

    await vi.waitFor(() => {
      expect(leaderboard.querySelector('.leaderboard__retry')).not.toBeNull();
    });

    const retryButton = leaderboard.querySelector<HTMLButtonElement>('.leaderboard__retry');

    if (!retryButton) {
      throw new Error('Retry button not found');
    }

    retryButton.click();

    await vi.waitFor(() => {
      expect(fetchLeaderboard).toHaveBeenCalledTimes(2);
    });

    expect(leaderboard.textContent).toContain('No leaderboard data available.');
  });
});
