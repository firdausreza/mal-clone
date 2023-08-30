import axios from 'axios';
import { AnimeDetail, AnimeLicensors, AnimeProducers } from '../interface/anime-detail.interface';
import { ApiResponse } from '../interface/response.interface';
import { mapArrayDataToAnimeDetails, mapObjectToAnimeDetail } from '../composables/map-response';

const BASE_API_URL = 'https://api.jikan.moe/v4';

export const MAL_API = {
  getAnimeFullDetail: async (id: number) => {
    return await axios.get(`${BASE_API_URL}/anime/${id}/full`).then(({ data }) => {
      const animeData = mapObjectToAnimeDetail(data.data);
      return animeData;
    });
  },
  getAnimeSearchResults: async (q: string, limit?: number) => {
    return await axios.get(`${BASE_API_URL}/anime?q=${q}&limit=${limit || 10}&sort=desc&type=tv&type=movie`)
      .then((res) => {
        if (res.status === 200) {
          const responseData = {
            data: mapArrayDataToAnimeDetails(res.data.data)
          }
          return responseData;
        } else {
          return null;
        }
      }).catch((e) => {
        console.error(e);
      })
  },
  getTopAnime: async (filter: string, limit?: number, page?: number) => {
    return await axios.get(`${BASE_API_URL}/top/anime?filter=${filter}&limit=${limit || 5}&page=${page || 1}`)
    .then((res) => {
      if (res.status === 200) {
        const responseData = {
          data: mapArrayDataToAnimeDetails(res.data.data),
          pagination: res.data.pagination
        } 
        return responseData;
      } else {
        return null;
      }
    }).catch((e) => console.error(e))
  },
  getCurrentSeasonAnime: async (limit?: number) => {
    return await axios.get(`${BASE_API_URL}/seasons/now?filter=tv&limit=${limit || 10}`).then((res) => {
      if (res.status === 200) {
        const responseData = {
          data: mapArrayDataToAnimeDetails(res.data.data)
        }
        return responseData;
      } else {
        return null;
      }
    }).catch((e) => {
      console.error(e);
    })
  },
  getSeasonLists: async () => {
    return await axios.get(`${BASE_API_URL}/seasons`);
  },
  getUpcomingSeasonAnime: async (type: string, limit?: number) => {
    return await axios.get(`${BASE_API_URL}/seasons/upcoming?filter=${type}&limit=${limit || 5}`);
  },
  getRecentRecommendation: async (page?: number) => {
    return await axios.get(`${BASE_API_URL}/recommendation/anime?page=${page || 1}`);
  },
  getWatchRecentEpisodes: async () => {
    return await axios.get(`${BASE_API_URL}/watch/episodes`).then((res) => {
      if (res.status === 200) {
        console.log(res, 'response');
        const responseData = {
          data: res.data.data
        }
        return responseData;
      } else {
        return null;
      }
    }).catch((e) => {
      console.error(e);
    })
  }
}