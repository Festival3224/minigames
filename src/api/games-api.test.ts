import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  fetchCategories,
  fetchFeaturedGames,
  fetchGameComments,
  fetchGameDetails,
  fetchLeaderboard,
  fetchLibraryGames,
  GameNotFoundError,
  LibraryDataNotFoundError,
  submitGameComment,
  toggleCommentLike,
  toggleGameFavorite,
} from './games-api';

const API_BASE_URL = 'https://faxb76kxra.execute-api.eu-central-1.amazonaws.com/api';

function mockJsonResponse(body: unknown, status = 200): Response {
  return Response.json(body, {
    status,
  });
}

describe('games API', () => {
  const fetchMock = vi.fn<typeof fetch>();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('fetchFeaturedGames', () => {
    it('requests featured games and returns response data', async () => {
      const games = [
        {
          slug: 'tiny-glade',
          name: 'Tiny Glade',
          category: 'strategy',
          price: 'Free',
          shortDescription: 'A tiny game',
          rating: 4.8,
          likesCount: 1200,
          cardImage: 'tiny-glade-card.jpg',
        },
      ];

      fetchMock.mockResolvedValue(
        mockJsonResponse({
          data: games,
          meta: {
            page: 1,
            limit: 9,
            totalItems: 1,
            totalPages: 1,
          },
        }),
      );

      const result = await fetchFeaturedGames();

      expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/games?featured=true`);
      expect(result).toEqual(games);
    });

    it('throws when featured games request fails', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 500));

      await expect(fetchFeaturedGames()).rejects.toThrow('Failed to load featured games: 500');
    });
  });

  describe('fetchLibraryGames', () => {
    it('builds the library query from page, category and sort', async () => {
      const response = {
        data: [],
        meta: {
          page: 2,
          limit: 6,
          totalItems: 0,
          totalPages: 0,
        },
      };

      fetchMock.mockResolvedValue(mockJsonResponse(response));

      const result = await fetchLibraryGames(2, 'strategy', 'name-asc');

      expect(fetchMock).toHaveBeenCalledWith(
        `${API_BASE_URL}/games?category=strategy&sort=name-asc&page=2&limit=6`,
      );
      expect(result).toEqual(response);
    });

    it('throws LibraryDataNotFoundError for status 400', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 400));

      await expect(fetchLibraryGames()).rejects.toBeInstanceOf(LibraryDataNotFoundError);
    });

    it('throws a generic error for other failed responses', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 500));

      await expect(fetchLibraryGames()).rejects.toThrow('Failed to load library games: 500');
    });
  });

  describe('fetchCategories', () => {
    it('returns categories from the API response', async () => {
      const categories = [
        {
          slug: 'strategy',
          label: 'Strategy',
          isDefault: false,
        },
      ];

      fetchMock.mockResolvedValue(
        mockJsonResponse({
          data: categories,
        }),
      );

      const result = await fetchCategories();

      expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/categories`);
      expect(result).toEqual(categories);
    });

    it('throws when categories request fails', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 503));

      await expect(fetchCategories()).rejects.toThrow('Failed to load categories: 503');
    });
  });

  describe('fetchGameDetails', () => {
    const game = {
      slug: 'tiny-glade',
      name: 'Tiny Glade',
      heroImage: 'tiny-glade-hero.jpg',
      rating: 4.8,
      likesCount: 1200,
      isLikedByCurrentUser: true,
      fullDescription: 'Game description',
      specs: {
        genre: 'Strategy',
        players: '1',
        duration: '20 min',
        price: 'Free',
      },
      topRecords: [],
    };

    it('omits userEmail for a guest request', async () => {
      fetchMock.mockResolvedValue(
        mockJsonResponse({
          data: game,
        }),
      );

      await fetchGameDetails('tiny-glade');

      expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/games/tiny-glade`);
    });

    it('URL-encodes userEmail for an authenticated request', async () => {
      fetchMock.mockResolvedValue(
        mockJsonResponse({
          data: game,
        }),
      );

      const result = await fetchGameDetails('tiny-glade', 'student+test@rs.school');

      expect(fetchMock).toHaveBeenCalledWith(
        `${API_BASE_URL}/games/tiny-glade?userEmail=student%2Btest%40rs.school`,
      );
      expect(result).toEqual(game);
    });

    it('throws GameNotFoundError for status 404', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 404));

      await expect(fetchGameDetails('missing-game')).rejects.toBeInstanceOf(GameNotFoundError);
    });

    it('throws a generic error for another failed status', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 500));

      await expect(fetchGameDetails('tiny-glade')).rejects.toThrow(
        'Failed to load game details: 500',
      );
    });
  });

  describe('toggleGameFavorite', () => {
    it('posts the active user email and returns server state', async () => {
      const responseData = {
        isFavorited: true,
        likesCount: 42,
      };

      fetchMock.mockResolvedValue(
        mockJsonResponse({
          data: responseData,
        }),
      );

      const result = await toggleGameFavorite('tiny-glade', 'student@rs.school');

      expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/games/tiny-glade/favorite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: 'student@rs.school',
        }),
      });

      expect(result).toEqual(responseData);
    });

    it('throws when favorite toggle fails', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 500));

      await expect(toggleGameFavorite('tiny-glade', 'student@rs.school')).rejects.toThrow(
        'Failed to toggle favorite: 500',
      );
    });
  });

  describe('fetchGameComments', () => {
    it('requests three newest comments without userEmail for guests', async () => {
      const response = {
        data: [],
        meta: {
          totalComments: 0,
          returnedCount: 0,
        },
      };

      fetchMock.mockResolvedValue(mockJsonResponse(response));

      await fetchGameComments('tiny-glade');

      expect(fetchMock).toHaveBeenCalledWith(
        `${API_BASE_URL}/games/tiny-glade/comments?limit=3&sort=newest`,
      );
    });

    it('adds encoded userEmail for authenticated users', async () => {
      const response = {
        data: [],
        meta: {
          totalComments: 0,
          returnedCount: 0,
        },
      };

      fetchMock.mockResolvedValue(mockJsonResponse(response));

      await fetchGameComments('tiny-glade', 'student+test@rs.school');

      expect(fetchMock).toHaveBeenCalledWith(
        `${API_BASE_URL}/games/tiny-glade/comments?limit=3&sort=newest&userEmail=student%2Btest%40rs.school`,
      );
    });

    it('throws when comments request fails', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 500));

      await expect(fetchGameComments('tiny-glade')).rejects.toThrow(
        'Failed to load game comments: 500',
      );
    });
  });

  describe('submitGameComment', () => {
    it('submits the comment and returns created comment for status 201', async () => {
      const createdComment = {
        commentId: 'comment-1',
        authorName: 'Student',
        text: 'Great game!',
        likesCount: 0,
        isLikedByCurrentUser: false,
        createdAt: '2026-10-10T10:00:00.000Z',
      };

      fetchMock.mockResolvedValue(
        mockJsonResponse(
          {
            data: createdComment,
          },
          201,
        ),
      );

      const result = await submitGameComment(
        'tiny-glade',
        'student@rs.school',
        'Student',
        'Great game!',
      );

      expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/games/tiny-glade/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: 'student@rs.school',
          authorName: 'Student',
          text: 'Great game!',
        }),
      });

      expect(result).toEqual(createdComment);
    });

    it('throws when create comment does not return status 201', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 400));

      await expect(
        submitGameComment('tiny-glade', 'student@rs.school', 'Student', 'Bad request'),
      ).rejects.toThrow('Failed to submit comment: 400');
    });
  });

  describe('toggleCommentLike', () => {
    it('posts userEmail and returns server-driven like state', async () => {
      const responseData = {
        isLikedByCurrentUser: true,
        likesCount: 5,
      };

      fetchMock.mockResolvedValue(
        mockJsonResponse({
          data: responseData,
        }),
      );

      const result = await toggleCommentLike('comment-123', 'student@rs.school');

      expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/comments/comment-123/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: 'student@rs.school',
        }),
      });

      expect(result).toEqual(responseData);
    });

    it('throws when comment like request fails', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 500));

      await expect(toggleCommentLike('comment-123', 'student@rs.school')).rejects.toThrow(
        'Failed to toggle comment like: 500',
      );
    });
  });

  describe('fetchLeaderboard', () => {
    it('returns leaderboard data', async () => {
      const players = [
        {
          rank: 1,
          playerName: 'Player One',
          gamesPlayed: 10,
          totalScore: 5000,
          streakDays: 4,
          favoriteGameSlug: 'tiny-glade',
          favoriteGameName: 'Tiny Glade',
        },
      ];

      fetchMock.mockResolvedValue(
        mockJsonResponse({
          data: players,
          meta: {
            totalItems: 1,
            description: 'Leaderboard',
          },
        }),
      );

      const result = await fetchLeaderboard();

      expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/leaderboard`);
      expect(result).toEqual(players);
    });

    it('throws when leaderboard request fails', async () => {
      fetchMock.mockResolvedValue(mockJsonResponse({}, 500));

      await expect(fetchLeaderboard()).rejects.toThrow('Failed to load leaderboard: 500');
    });
  });
});
