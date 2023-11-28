import axios from 'axios';
import { AnimeDetail, AnimeLicensors, AnimeProducers } from '../interface/anime-detail.interface';
import { ApiResponse } from '../interface/response.interface';
import { mapArrayDataToAnimeDetails, mapObjectToAnimeDetail, mapToAnimeReviews } from '../composables/map-response';

const BASE_API_URL = 'https://api.jikan.moe/v4';

export const MAL_API = {
  anime: {
    getAnimeFullDetail: async (id: number) => {
      return await axios.get(`${BASE_API_URL}/anime/${id}/full`).then(({ data }) => {
        const animeData = mapObjectToAnimeDetail(data.data);
        return animeData;
      });
    },
    getAnimeSearchResults: async (q: string, limit?: number): Promise<ApiResponse> => {
      return new Promise((resolve, reject) => {
        axios.get(`${BASE_API_URL}/anime?q=${q}&limit=${limit || 10}&sort=desc&type=tv&type=movie`)
        .then((res) => {
          if (res.status === 200) {
            resolve({
              data: mapArrayDataToAnimeDetails(res.data.data),
              pagination: res.data.pagination || null
            });
          } else resolve({ data: null, pagination: null })
        }).catch((e) => {
          reject(e);
        })
      });
    },
  },
  recommendation: {
    getRecentAnimeRecommendation: (): Promise<ApiResponse> => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          await axios.get(`${BASE_API_URL}/recommendations/anime`)
            .then((res) => {
              if (res.status === 200) {
                resolve({
                  data: res.data.data,
                  pagination: res.data.pagination
                });
              } else resolve({ data: null, pagination: null });
            }).catch((e) => {
              reject(e);
            });
        }, 500);
      }) 
    }
  },
  review: {
    getRecentAnimeReviews: (): Promise<ApiResponse> => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          await axios.get(`${BASE_API_URL}/reviews/anime?preliminary=true&spoiler=true`)
            .then((res) => {
              if (res.status === 200) {
                resolve({
                  data: mapToAnimeReviews(res.data.data),
                  pagination: res.data.pagination
                });
              } else resolve({ data: null, pagination: null });
            }).catch((e) => {
              reject(e);
            });
        }, 500)
      });
    }
  },
  season: {
    getUpcomingSeasonAnime: async (type: string, limit?: number) => {
      return await axios.get(`${BASE_API_URL}/seasons/upcoming?filter=${type}&limit=${limit || 5}`);
    },
    getCurrentSeasonAnime: (limit?: number): Promise<ApiResponse> => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          await axios.get(`${BASE_API_URL}/seasons/now?filter=tv&limit=${limit || 10}`).then((res) => {
            if (res.status === 200) {
              resolve({
                data: mapArrayDataToAnimeDetails(res.data.data),
                pagination: res.data.pagination
              })
            } else resolve({ data: null, pagination: null });
          }).catch((e) => {
            reject(e);
          });
        }, 500)
      })
    },
    getSeasonLists: async () => {
      return await axios.get(`${BASE_API_URL}/seasons`);
    },
  },
  top: {
    getTopAnime: (filter: string, limit?: number, page?: number): Promise<ApiResponse> => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          await axios.get(`${BASE_API_URL}/top/anime?filter=${filter}&limit=${limit || 5}&page=${page || 1}`)
            .then((res) => {
              if (res.status === 200) {
                resolve({
                  data: mapArrayDataToAnimeDetails(res.data.data),
                  pagination: res.data.pagination
                });
              } else resolve({ data: null, pagination: null });
            }).catch((e) => reject(e));
        }, 500)
      });
    },
  },
  watch: {
    getWatchRecentEpisodes: (): Promise<ApiResponse> => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          await axios.get(`${BASE_API_URL}/watch/episodes`).then((res) => {
            if (res.status === 200) {
              resolve({
                data: res.data.data,
                pagination: res.data?.pagination
              });
            } else resolve({ data: null, pagination: null });
          }).catch((e) => {
            reject(e);
          });
        }, 500)
      });
    }
  }
}