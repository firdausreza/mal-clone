import { AnimeAired, AnimeBroadcast, AnimeDemographics, AnimeGenres, AnimeLicensors, AnimeStudios, AnimeThemes, AnimeTitles } from "./anime-detail.interface"

export interface ApiResponse {
  data: Array<AnimeDataResponse> | AnimeDataResponse,
  pagination?: PaginationResponse
}

export interface AnimeDataResponse {
  mal_id: number,
  url: string,
  images: object,
  trailer: object,
  approved: boolean,
  titles: Array<AnimeTitles>,
  type: string,
  source: string,
  episodes: number,
  status: string,
  airing: boolean,
  aired: AnimeAired,
  duration: string,
  rating: string,
  score: number,
  scored_by: number,
  rank: number,
  popularity: number,
  members: number,
  favorites: number,
  synopsis: string,
  background: string,
  season: string,
  year: number,
  broadcast: AnimeBroadcast,
  producers: Array<AnimeLicensors>,
  licensors: Array<AnimeLicensors>,
  studios: Array<AnimeStudios>,
  genres: Array<AnimeGenres>,
  explicit_genres: Array<any>,
  themes: Array<AnimeThemes>,
  demographics: Array<AnimeDemographics>,
  relations?: Array<object>,
  theme?: object,
  external?: Array<object>,
  streaming?: Array<object>
}

export interface PaginationResponse {
  last_visible_page: number,
  has_next_page: boolean,
  items: object
}