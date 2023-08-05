export interface AnimeDetail {
  mal_id: number,
  titles: Array<AnimeTitles>,
  url: string,
  images: any,
  trailer: any,
  information: AnimeInfo,
  statistics: AnimeStats,
}

export interface AnimeInfo {
  type: string,
  episodes: number,
  status: string,
  aired: AnimeAired,
  source: string,
  premiered: AnimeSeason,
  broadcast: AnimeBroadcast,
  licensors: Array<AnimeLicensors>,
  producers: Array<AnimeProducers>,
  studios: Array<AnimeStudios>,
  genres: Array<AnimeGenres>,
  themes: Array<AnimeThemes>,
  demographics: Array<AnimeDemographics>,
  duration: string,
  rating: string
}

export interface AnimeStats {
  score: number,
  ranked: number,
  members: number,
  popularity: number,
  favorites: number
}

export interface AnimeTitles {
  type: string,
  title: string
}

export interface AnimeSeason {
  season: string,
  year: number
}

export interface AnimeStudios {
  mal_id: number,
  type: string,
  name: string
}

export interface AnimeLicensors {
  mal_id: number,
  type: string,
  name: string
}

export interface AnimeProducers {
  mal_id: number,
  type: string,
  name: string
}

export interface AnimeGenres {
  mal_id: number,
  type: string,
  name: string
}

export interface AnimeThemes {
  mal_id: number,
  type: string,
  name: string
}

export interface AnimeDemographics {
  mal_id: number,
  type: string,
  name: string
}

export interface AnimeAired {
  from: string,
  to: string,
  prop: object,
  string?: string
}

export interface AnimeBroadcast {
  day: string,
  time: string,
  timezone: string,
  string?: string
}