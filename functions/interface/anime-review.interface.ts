import { AnimeImages } from "./anime-detail.interface"
import { User } from "./user.interface"

export interface AnimeReview {
  review_id: number,
  anime: {
    images: AnimeImages,
    mal_id: number,
    title: string,
    url: string
  },
  date: string,
  episodes_watched: number,
  is_preliminary: boolean,
  is_spoiler: boolean,
  reactions: {
    confusing: number,
    creative: number,
    funny: number,
    informative: number,
    love_it: number,
    nice: number,
    overall: number,
    well_written: number
  },
  review: string,
  score: number,
  tags: Array<string>,
  type: string,
  url: string,
  user: User
}