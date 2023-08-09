<template>
  <section class="w-full">
    <div class="flex flex-wrap gap-1.5 items-center justify-between border-b border-gray-400 pb-2">
      <h3 class="font-semibold">
        {{ carouselTitle }}
      </h3>
      <nuxt-link to="#" class="text-sm text-mal-blue hover:underline underline-offset-1">
        View More
      </nuxt-link>
    </div>
    <div class="mt-2 w-full">
      <splide
        v-show="animeData && animeData.length > 0"
        :options="splideOptions"
        tag="section"
      >
        <splide-slide v-for="anime in animeData" class="relative">
          <nuxt-link class="bg-transparent hover:bg-gray-200 cursor-pointer">
            <img :src="anime.images.webp.image_url" alt="Anime Poster" class="z-0 object-cover object-center">
            <div class="absolute z-10 bottom-0 inset-x-0 p-2 bg-gradient-to-b from-transparent to-black/75">
              <p class="text-xs text-white">{{ anime.titles[0].title }}</p>
            </div>
          </nuxt-link>
        </splide-slide>
      </splide>
    </div>
  </section>
</template>

<script lang="ts">
import { AnimeDetail } from '../../functions/interface/anime-detail.interface';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import '@splidejs/vue-splide/css';

export default {
  name: 'Anime-Carousel',
  components: {
    Splide, SplideSlide
  },
  props: {
    carouselTitle: String,
    linkHref: String,
    slidesPerView: {
      type: Number,
      default: 1
    },
    animeData: Array<AnimeDetail>
  },
  setup(props) {
    const { carouselTitle } = toRefs(props);
    const { linkHref } = toRefs(props);
    const { slidesPerView } = toRefs(props);
    const { animeData } = toRefs(props);
    const splideOptions = {
      type: 'loop',
      perPage: 5,
      perMove: 4,
      pagination: false,
      drag: false,
      gap: '10px',
    }

    return {
      carouselTitle, linkHref, slidesPerView, animeData, splideOptions
    }
  }
}
</script>
