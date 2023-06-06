import axios from 'axios';

const BASE_API_URL = 'https://api.myanimelist.net/v2';

export const MAL_API = {
  getTopAiring: async (limit?: number) => {
    await axios.get(`${BASE_API_URL}/anime/ranking?ranking_type=airing&limit=${limit || 5}`)
  },
  getTopUpcoming: async (limit?: number) => {
    await axios.get(`${BASE_API_URL}/anime/ranking?ranking_type=upcoming&limit=${limit || 5}`)
  },
  getTopPopularity: async (limit?: number) => {
    await axios.get(`${BASE_API_URL}/anime/ranking?ranking_type=bypopularity&limit=${limit || 10}`)
  },
  getAnimeDetail: async (id: string) => {
    await axios.get(`${BASE_API_URL}/anime/${id}`)
  },
  getSeasonalAnime: async (year: number, season: string) => {
    await axios.get(`${BASE_API_URL}/anime/season/${year}/${season}`)
  }
}