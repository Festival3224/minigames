const API_BASE_URL = 'https://faxb76kxra.execute-api.eu-central-1.amazonaws.com/api';

export interface FeaturedGame {
  slug: string;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  rating: number;
  likesCount: number;
  cardImage: string;
}

interface FeaturedGamesResponse {
  data: FeaturedGame[];
}

export async function fetchFeaturedGames(): Promise<FeaturedGame[]> {
  const response = await fetch(`${API_BASE_URL}/games?featured=true`);

  if (!response.ok) {
    throw new Error(`Failed to load featured games: ${response.status}`);
  }

  const result = (await response.json()) as FeaturedGamesResponse;

  return result.data;
}
