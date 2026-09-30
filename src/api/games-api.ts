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

export async function fetchFeaturedGames(): Promise<GameListItem[]> {
  const response = await fetch(`${API_BASE_URL}/games?featured=true`);

  if (!response.ok) {
    throw new Error(`Failed to load featured games: ${response.status}`);
  }

  const result = (await response.json()) as GamesResponse;

  return result.data;
}

export async function fetchLibraryGames(page = 1): Promise<GamesResponse> {
  const response = await fetch(`${API_BASE_URL}/games?page=${page}&limit=6`);

  if (!response.ok) {
    throw new Error(`Failed to load library games: ${response.status}`);
  }

  // const result = (await response.json()) as GamesResponse;

  return (await response.json()) as GamesResponse;
}
