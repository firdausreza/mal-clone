<template>
  <div class="bg-white dark:bg-mal-dark text-gray-600 dark:text-white">
    <section class="w-full bg-mal-lightblue dark:bg-mal-lightdark text-mal-blue dark:text-white border-b-2 border-mal-blue dark:border-gray-400 mx-auto">
      <div class="max-w-screen-xl mx-auto px-4 py-1">
        <h1 class="font-bold text-lg">Welcome to MyAnimeList!</h1>
      </div>
    </section>
    <section class="max-w-screen-xl flex flex-col md:flex-row items-start gap-2 mx-auto p-4">
      <section id="main-content" class="flex flex-1 flex-col gap-4 pr-2 border-r-2 border-gray-300">
        <anime-carousel
          id="current-season-anime"
          :carousel-title="currentSeasonAnime.season"
          link-href=""
          :anime-data="currentSeasonAnime.data"
        ></anime-carousel>
      </section>
      <section id="sidebar" class="min-w-[300px] md:w-[300px] flex flex-col gap-3 pl-2">
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
import AnimeCarousel from '~/components/carousel/AnimeCarousel.vue';
import TopAnime from '../components/homepage/TopAnime.vue';

export default {
  name: 'Homepage',
  components: {
    AnimeCarousel, TopAnime
  },
  setup() {
    const currentSeasonAnime = ref<{ season: string, data: AnimeDetail[] | null }>({ season: '', data: null });
    const topAiringAnime = ref<AnimeDetail[]>();

    onMounted(() => {
      api.getCurrentSeasonAnime(20).then((data) => {
        currentSeasonAnime.value.season = getCurrentSeason();
        currentSeasonAnime.value.data = data;
      });
      api.getTopAnime('airing').then((data) => {
        topAiringAnime.value = data?.data
      })
    })

    return {
      currentSeasonAnime, topAiringAnime
    }
  }
}
</script>