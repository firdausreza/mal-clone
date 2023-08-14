import { AnimeDetail, AnimeLicensors, AnimeProducers } from "../interface/anime-detail.interface";
import { AnimeDataResponse } from "../interface/response.interface";

export function mapArrayDataToAnimeDetails(animeData: Array<AnimeDataResponse>) {
  return animeData.map((data) => {
    const animeDetail: AnimeDetail = {
      mal_id: data.mal_id,
      titles: data.titles,
      url: data.url,
      images: data.images,
      trailer: data.trailer,
      information: {
        type: data.type,
        episodes: data.episodes,
        status: data.status,
        aired: data.aired,
        source: data.source,
        premiered: {
          season: data.season,
          year: data.year
        },
        broadcast: data.broadcast,
        licensors: data.licensors.map((licensor: AnimeLicensors) => ({ 
          mal_id: licensor.mal_id,
          type: licensor.type,
          name: licensor.name
        })),
        producers: data.producers.map((producer: AnimeProducers) => ({ 
          mal_id: producer.mal_id,
          type: producer.type,
          name: producer.name
        })),
        studios: data.studios,
        genres: data.genres,
        themes: data.themes,
        demographics: data.demographics,
        duration: data.duration,
        rating: data.rating
      },
      statistics: {
        score: data.score,
        ranked: data.rank,
        members: data.members,
        popularity: data.popularity,
        favorites: data.favorites
      }
    }
    return animeDetail
  })
}

export function mapObjectToAnimeDetail(animeData: AnimeDataResponse) {
  return {
    mal_id: animeData.mal_id,
    titles: animeData.titles,
    url: animeData.url,
    images: animeData.images,
    trailer: animeData.trailer,
    information: {
      type: animeData.type,
      episodes: animeData.episodes,
      status: animeData.status,
      aired: animeData.aired,
      source: animeData.source,
      premiered: {
        season: animeData.season,
        year: animeData.year
      },
      broadcast: animeData.broadcast,
      licensors: animeData.licensors.map((licensor: AnimeLicensors) => ({ 
        mal_id: licensor.mal_id,
        type: licensor.type,
        name: licensor.name
      })),
      producers: animeData.producers.map((producer: AnimeProducers) => ({ 
        mal_id: producer.mal_id,
        type: producer.type,
        name: producer.name
      })),
      studios: animeData.studios,
      genres: animeData.genres,
      themes: animeData.themes,
      demographics: animeData.demographics,
      duration: animeData.duration,
      rating: animeData.rating
    },
    statistics: {
      score: animeData.score,
      ranked: animeData.rank,
      members: animeData.members,
      popularity: animeData.popularity,
      favorites: animeData.favorites
    }
  }
}