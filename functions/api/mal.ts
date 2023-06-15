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
  getAnimeSearchResults: async (q: string, type: string, limit?: number) => {
    return await axios.get(`${BASE_API_URL}/anime?q=${q}&type=${type}&limit=${limit || 10}&sfw`)
  },
  getTopAnime: async (filter: string, limit?: number, page?: number) => {
    return await axios.get(`${BASE_API_URL}/top/anime?filter=${filter}&limit=${limit || 5}&page=${page || 1}&sfw`).then(({ data }) => {
      const responseData = {
        data: mapArrayDataToAnimeDetails(data.data),
        pagination: data.pagination
      } 
      return responseData;
    })
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