<template>
  <div class="bg-white dark:bg-mal-dark text-gray-600 dark:text-white">
    <section class="w-full bg-mal-lightblue dark:bg-mal-lightdark text-mal-blue dark:text-white border-b-2 border-mal-blue dark:border-gray-400 mx-auto">
      <div class="max-w-screen-xl mx-auto px-4 py-1">
        <h1 class="font-bold text-lg">Welcome to MyAnimeList!</h1>
      </div>
    </section>
    <section class="max-w-screen-xl flex flex-col lg:flex-row items-start mx-auto max-[640px]:gap-2 p-4">
      <section id="main-content" class="w-full lg:w-[75%] flex flex-col gap-4 lg:pr-2 lg:border-r-2 border-gray-300">
        <anime-carousel
          id="current-season-anime"
          :carousel-title="currentSeason"
          link-href=""
          v-if="currentSeasonAnime && currentSeasonAnime.length > 0"
        >
          <swiper-container
            slides-per-view="auto"
            slides-per-group-auto="false"
            space-between="5"
            loop="true"
            speed="700"
            :navigation="checkNavSlideBreakpoints"
            :free-mode="checkFreeModeBreakpoints"
            :breakpoints="{
              768: {
                slidesPerGroup: 4,
                slidesOffsetAfter: 20,
                slidesPerGroupAuto: 'true',
              }
            }"
            v-slot
          >
            <swiper-slide v-for="anime in currentSeasonAnime" lazy="true" class="w-[35%] md:w-[160px]">
              <nuxt-link class="bg-transparent hover:bg-gray-200 cursor-pointer">
                <img 
                  :src="anime.images.webp.image_url" 
                  alt="Anime Poster" 
                  class="z-0 object-cover border border-mal-lightdark"
                  loading="lazy"
                >
                <div class="absolute z-10 bottom-0 inset-x-0 px-2 pb-2 bg-gradient-to-b from-transparent to-black/75">
                  <p class="text-xs text-white">{{ anime.titles[0].title }}</p>
                </div>
              </nuxt-link>
            </swiper-slide>
          </swiper-container>
        </anime-carousel>

        <!-- <anime-carousel
          id="recent-episodes"
          carousel-title="Latest Updated Anime Episodes"
          link-href=""
          v-if="recentEpisodes && recentEpisodes.length > 0"
        >
          <SplideSlide id="recent-episode-slides" v-for="anime in recentEpisodes" v-slot>
            <nuxt-link class="flex flex-1 flex-col gap-1 cursor-pointer">
              <div class="flex flex-1 relative">
                <img :src="anime.entry.images.webp.image_url" alt="Anime Poster" class="z-0 border border-mal-lightdark">
                <div class="w-full absolute z-10 bottom-0 inset-x-0 px-2 pb-2 bg-gradient-to-b from-transparent to-black/75">
                  <nuxt-link v-for="episode in anime.episodes" class="text-xs text-white block">
                    {{ episode.title }}
                    <span v-if="episode.premium">
                      <font-awesome-icon icon="fa-solid fa-crown" style="color: #f8d345;" />
                    </span>
                  </nuxt-link>
                </div>
              </div>
              <nuxt-link class="z-10 text-xs font-semibold">
                {{ anime.entry.title }}
              </nuxt-link>
            </nuxt-link>
          </SplideSlide>
        </anime-carousel> -->
      </section>
      <section id="sidebar" class="w-full lg:flex-1 flex flex-col gap-3 lg:pl-2">
        <top-anime
          top-title="Top Airing Anime"
          :anime-data="topAiringAnime"
        ></top-anime>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { getCurrentSeason } from '~/functions/composables/mal-season';
import { MAL_API as api } from '../functions/api/mal';
import { AnimeDetail } from '../functions/interface/anime-detail.interface';

import TopAnime from '../components/homepage/TopAnime.vue';
import AnimeCarousel from '~/components/carousel/AnimeCarousel.vue';
import { register } from 'swiper/element/bundle';

register();

export default {
  name: 'Homepage',
  components: {
    AnimeCarousel, TopAnime
  },
  setup() {
    const windowWidth = ref<number>(0);
    const currentSeasonAnime = ref<AnimeDetail[]>();
    const currentSeason = ref<string>();
    const topAiringAnime = ref<AnimeDetail[]>();
    const recentEpisodes = ref();
    const checkNavSlideBreakpoints = computed(() => {
      if (windowWidth.value > 768) {
        return 'true'
      } else {
        return 'false'
      }
    });

    const checkFreeModeBreakpoints = computed(() => {
      if (windowWidth.value > 768) {
        return 'false'
      } else {
        return 'true'
      }
    });

    onUpdated(() => {
      window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
      });
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', () => {})
    });

    onMounted(() => {
      currentSeason.value = getCurrentSeason();
      api.getCurrentSeasonAnime(20).then((data) => {
        currentSeasonAnime.value = data?.data;
      });
      api.getTopAnime('airing').then((data) => {
        topAiringAnime.value = data?.data
      });
      api.getWatchRecentEpisodes().then((data) => {
        recentEpisodes.value = data?.data.filter((_data: any) => !_data.region_locked).slice(0, 30)
      })
    })

    return {
      currentSeasonAnime, currentSeason, topAiringAnime, recentEpisodes,
      checkFreeModeBreakpoints, checkNavSlideBreakpoints
    }
  }
}
</script>

<style lang="less">
swiper-container::part(button-prev) {
  display: none;
}

swiper-container::part(button-next) {
  display: none;
}

@media screen and (min-width: 768px) {
  swiper-container::part(button-prev) {
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
    width: 10px;
    left: 0;
    padding: 10px 20px 10px 10px;
    color: white;
  }

  swiper-container::part(button-next) {
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    width: 10px;
    right: 0;
    padding: 10px 10px 10px 20px;
    color: white;
  }
}
</style>