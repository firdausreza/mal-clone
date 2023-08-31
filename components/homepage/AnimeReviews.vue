<template>
  <section id="latest-anime-reviews">
    <section id="anime-review-header" class="w-full flex items-center justify-between gap-2 pb-1 border-b border-mal-lightdark">
      <h3 class="font-semibold">Latest Anime Reviews</h3>
      <nuxt-link to="#" class="text-mal-lightblue text-xs hover:underline underline-offset-1">
        View More
      </nuxt-link>
    </section>
    <section id="anime-review-container" class="w-full py-2 flex flex-col gap-3">
      <article class="w-full flex items-start gap-2" v-for="data in reviewData" :key="data.review_id">
        <img 
          :src="data.anime.images.webp?.image_url" 
          :alt="data.anime.title" 
          width="60" 
          height="90" 
          class="border border-mal-lightdark object-contain"
        >
        <div id="review-info" class="flex flex-1 flex-col gap-1">
          <nuxt-link to="#" class="w-max text-sm font-bold text-mal-blue hover:text-mal-lightblue hover:underline underline-offset-1 transition-colors">
            {{ data.anime.title }}
          </nuxt-link>
          <p class="text-xs">
            <span>
              <font-awesome-icon icon="fa-solid fa-star" size="xs" class="text-yellow-400" />
            </span>
            Overall: {{ data.score }} • by 
            <span>
              <nuxt-link to="#" class="w-max text-xs text-mal-blue hover:text-mal-lightblue hover:underline underline-offset-1 font-semibold transition-colors">
                {{ data.user.username }}
              </nuxt-link>
            </span>
            • {{ moment(data.date).format('DD-MM-YYYY HH:mm') }}
          </p>
          <div class="flex items-center gap-1.5">
            <p 
              :class="`w-max text-white text-xs px-2 py-1 rounded-sm ${tag === 'Not Recommended' ? 'bg-red-500' 
              : tag === 'Recommended' ? 'bg-mal-blue' 
              : tag === 'Spoiler' ? 'bg-yellow-500' : 'bg-mal-lightdark'}`"
              v-for="tag in data.tags"
            >
              <span v-if="tag === 'Recommended' || tag === 'Not Recommended'">
                <font-awesome-icon v-if="tag === 'Recommended'" icon="fa-solid fa-star" size="sm" />
                <font-awesome-icon v-else icon="fa-solid fa-thumbs-down" size="sm" />
              </span>
              {{ tag }}
            </p>
          </div>
          <p class="line-clamp-3 text-xs">
            {{ data.review }}
          </p>
          <nuxt-link to="#" class="w-max text-xs text-mal-blue hover:text-mal-lightblue hover:underline underline-offset-1 font-semibold transition-colors">
            Read More
          </nuxt-link>
        </div>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { AnimeReview } from '../../functions/interface/anime-review.interface';
import moment from 'moment';

export default {
  name: 'AnimeReviews',
  props: {
    reviewData: Array<AnimeReview>
  },
  data() {
    return {
      moment: moment
    }
  }
}
</script>