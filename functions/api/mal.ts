import axios from 'axios';
import { AnimeDetail, AnimeLicensors, AnimeProducers } from '../interface/anime-detail.interface';

const BASE_API_URL = 'https://api.jikan.moe/v4';

export const MAL_API = {
  getAnimeFullDetail: async (id: number) => {
    return await axios.get(`${BASE_API_URL}/anime/${id}/full`).then((res) => {
      const responseData = res.data.data;
      const animeData: AnimeDetail = {
        mal_id: responseData.mal_id,
        titles: responseData.titles,
        url: responseData.url,
        images: responseData.images,
        trailer: responseData.trailer,
        information: {
          type: responseData.type,
          episodes: responseData.episodes,
          status: responseData.status,
          aired: responseData.aired.string,
          source: responseData.source,
          premiered: {
            season: responseData.season,
            year: responseData.year
          },
          broadcast: responseData.broadcast.string,
          licensors: responseData.licensors.map((licensor: AnimeLicensors) => ({ 
            mal_id: licensor.mal_id,
            type: licensor.type,
            name: licensor.name
          })),
          producers: responseData.producers.map((producer: AnimeProducers) => ({ 
            mal_id: producer.mal_id,
            type: producer.type,
            name: producer.name
          })),
          studios: responseData.studios,
          genres: responseData.genres,
          themes: responseData.themes,
          demographics: responseData.demographics,
          duration: responseData.duration,
          rating: responseData.rating
        },
        statistics: {
          score: responseData.score,
          ranked: responseData.rank,
          members: responseData.members,
          popularity: responseData.popularity,
          favorites: responseData.favorites
        }
      }
      return animeData;
    });
  },
  getAnimeSearchResults: async (q: string, type: string, limit?: number) => {
    return await axios.get(`${BASE_API_URL}/anime?q=${q}&type=${type}&limit=${limit || 10}`)
  },
  getTopAnime: async (filter: string, limit?: number) => {
    return await axios.get(`${BASE_API_URL}/top/anime?filter=${filter}&limit=${limit || 5}`)
  },
  getCurrentSeasonAnime: async (type: string, limit?: number) => {
    return await axios.get(`${BASE_API_URL}/seasons/now?filter=${type}&limit=${limit || 5}&sfw`)
  },
  getSeasonLists: async () => {
    return await axios.get(`${BASE_API_URL}/seasons`)
  },
  getUpcomingSeasonAnime: async (type: string, limit?: number) => {
    return await axios.get(`${BASE_API_URL}/seasons/upcoming?filter=${type}&limit=${limit || 5}&sfw`)
  }
}