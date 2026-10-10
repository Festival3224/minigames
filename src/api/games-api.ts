const API_BASE_URL = 'https://faxb76kxra.execute-api.eu-central-1.amazonaws.com/api';

export interface GameListItem {
  slug: string;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  rating: number;
  likesCount: number;
  cardImage: string;
}

export interface GamesMeta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

export interface GamesResponse {
  data: GameListItem[];
  meta: GamesMeta;
}

export interface GameCategory {
  slug: string;
  label: string;
  isDefault: boolean;
}

interface CategoriesResponse {
  data: GameCategory[];
}

export interface GameRecord {
  position: number;
  playerName: string;
  score: number;
  achievedAt: string;
}

export interface GameSpecs {
  genre: string;
  players: string;
  duration: string;
  price: string;
}

export interface GameDetails {
  slug: string;
  name: string;
  heroImage: string;
  rating: number;
  likesCount: number;
  isLikedByCurrentUser: boolean;
  fullDescription: string;
  specs: GameSpecs;
  topRecords: GameRecord[];
}

interface GameDetailsResponse {
  data: GameDetails;
}

export async function fetchFeaturedGames(): Promise<GameListItem[]> {
  const response = await fetch(`${API_BASE_URL}/games?featured=true`);

  if (!response.ok) {
    throw new Error(`Failed to load featured games: ${response.status}`);
  }

  const result = (await response.json()) as GamesResponse;

  return result.data;
}

export class GameNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GameNotFoundError';
  }
}

export class LibraryDataNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LibraryDataNotFoundError';
  }
}

export async function fetchLibraryGames(
  page = 1,
  category = 'all',
  sort = 'rating-desc',
): Promise<GamesResponse> {
  const response = await fetch(
    `${API_BASE_URL}/games?category=${category}&sort=${sort}&page=${page}&limit=6
  `,
  );

  if (response.status === 400) {
    throw new LibraryDataNotFoundError('Library data not found');
  }

  if (!response.ok) {
    throw new Error(`Failed to load library games: ${response.status}`);
  }

  return (await response.json()) as GamesResponse;
}

export async function fetchCategories(): Promise<GameCategory[]> {
  const response = await fetch(`${API_BASE_URL}/categories`);

  if (!response.ok) {
    throw new Error(`Failed to load categories: ${response.status}`);
  }

  const result = (await response.json()) as CategoriesResponse;

  return result.data;
}

export async function fetchGameDetails(slug: string, userEmail?: string): Promise<GameDetails> {
  const userQuery = userEmail ? `?userEmail=${encodeURIComponent(userEmail)}` : '';

  const response = await fetch(`${API_BASE_URL}/games/${slug}${userQuery}`);

  if (response.status === 404) {
    throw new GameNotFoundError(`Game not found: ${slug}`);
  }

  if (!response.ok) {
    throw new Error(`Failed to load game details: ${response.status}`);
  }

  const result = (await response.json()) as GameDetailsResponse;

  return result.data;
}

export interface FavoriteResult {
  isFavorited: boolean;
  likesCount: number;
}

interface FavoriteResponse {
  data: FavoriteResult;
}

export async function toggleGameFavorite(slug: string, userEmail: string): Promise<FavoriteResult> {
  const response = await fetch(`${API_BASE_URL}/games/${slug}/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userEmail,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to toggle favorite: ${response.status}`);
  }

  const result = (await response.json()) as FavoriteResponse;

  return result.data;
}

export interface GameComment {
  commentId: string;
  authorName: string;
  text: string;
  likesCount: number;
  isLikedByCurrentUser: boolean;
  createdAt: string;
}

export interface GameCommentsResponse {
  data: GameComment[];
  meta: {
    totalComments: number;
    returnedCount: number;
  };
}

export async function fetchGameComments(
  slug: string,
  userEmail?: string,
): Promise<GameCommentsResponse> {
  const parameters = new URLSearchParams({
    limit: '3',
    sort: 'newest',
  });

  if (userEmail) {
    parameters.set('userEmail', userEmail);
  }

  const response = await fetch(`${API_BASE_URL}/games/${slug}/comments?${parameters.toString()}`);

  if (!response.ok) {
    throw new Error(`Failed to load game comments: ${response.status}`);
  }

  return (await response.json()) as GameCommentsResponse;
}

interface CreateCommentResponse {
  data: GameComment;
}

export async function submitGameComment(
  slug: string,
  userEmail: string,
  authorName: string,
  text: string,
): Promise<GameComment> {
  const response = await fetch(`${API_BASE_URL}/games/${slug}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userEmail,
      authorName,
      text,
    }),
  });

  if (response.status !== 201) {
    throw new Error(`Failed to submit comment: ${response.status}`);
  }

  const result = (await response.json()) as CreateCommentResponse;

  return result.data;
}

export interface CommentLikeResult {
  isLikedByCurrentUser: boolean;
  likesCount: number;
}

interface CommentLikeResponse {
  data: CommentLikeResult;
}

export async function toggleCommentLike(
  commentId: string,
  userEmail: string,
): Promise<CommentLikeResult> {
  const response = await fetch(`${API_BASE_URL}/comments/${commentId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userEmail,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to toggle comment like: ${response.status}`);
  }

  const result = (await response.json()) as CommentLikeResponse;

  return result.data;
}

export interface LeaderboardPlayer {
  rank: number;
  playerName: string;
  gamesPlayed: number;
  totalScore: number;
  streakDays: number;
  favoriteGameSlug: string;
  favoriteGameName: string;
}

interface LeaderboardResponse {
  data: LeaderboardPlayer[];
  meta: {
    totalItems: number;
    description: string;
  };
}

export async function fetchLeaderboard(): Promise<LeaderboardPlayer[]> {
  const response = await fetch(`${API_BASE_URL}/leaderboard`);

  if (!response.ok) {
    throw new Error(`Failed to load leaderboard: ${response.status}`);
  }

  const result = (await response.json()) as LeaderboardResponse;

  return result.data;
}
