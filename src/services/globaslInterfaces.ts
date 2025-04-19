export interface Genre {
  id: number;
  name: string;
  slug: string;
  games: Games[];
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}
