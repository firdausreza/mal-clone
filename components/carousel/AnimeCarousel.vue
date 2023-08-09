<template>
  <section class="w-full">
    <div class="flex flex-wrap gap-1.5 items-center justify-between border-b border-gray-400 pb-2">
      <h3 class="font-semibold">
        {{ carouselTitle }} Anime
      </h3>
      <nuxt-link to="#" class="text-sm text-mal-lightblue font-bold hover:underline underline-offset-1">
        View More
      </nuxt-link>
    </div>
    <div class="mt-2 w-full">
      <Splide
        v-if="animeData && animeData.length > 0"
        :options="splideOptions"
        tag="section"
        @splide=""
      >
        <SplideSlide v-for="anime in animeData">
          <nuxt-link class="bg-transparent hover:bg-gray-200 cursor-pointer">
            <img :src="anime.images.webp.image_url" alt="Anime Poster" class="z-0 object-cover border border-mal-lightdark">
            <div class="absolute z-10 bottom-0 inset-x-0 px-2 pb-2 bg-gradient-to-b from-transparent to-black/75">
              <p class="text-xs text-white">{{ anime.titles[0].title }}</p>
            </div>
          </nuxt-link>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script lang="ts">
import { AnimeDetail } from '../../functions/interface/anime-detail.interface';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { Splide as Core } from '@splidejs/splide';

import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';

export default {
  name: 'AnimeCarousel',
  components: {
    Splide, SplideSlide
  },
  props: {
    carouselTitle: String,
    linkHref: String,
    animeData: Array<AnimeDetail>
  },
  setup(props) {
    const { carouselTitle } = toRefs(props);
    const { linkHref } = toRefs(props);
    const { animeData } = toRefs(props);
    const splideOptions = {
      type: 'loop',
      speed: 500,
      width: '100%',
      isNavigation: true,
      pagination: false,
      start: 0,
      padding: { right: '50px' },
      gap: '5px',
      trimSpace: true,
      slideFocus: false,
      cloneStatus: true,
      perPage: 5,
      perMove: 5,
      breakpoints: {
        475: {
          perPage: 2,
          perMove: 2,
        },
        640: {
          perPage: 3,
          perMove: 3,
          gap: '2px'
        },
        768: {
          type: 'slide',
          arrows: false,
          padding: 0,
          fixedHeight: '',
          gap: '3px'
        }
      }
    }

    return {
      carouselTitle, linkHref, animeData, splideOptions
    }
  }
}
</script>
