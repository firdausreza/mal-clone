<template>
  <div class="bg-white dark:bg-gray-800 text-gray-600 dark:text-white">
    <section class="w-full bg-mal-lightblue text-mal-blue border-b-2 border-mal-blue mx-auto">
      <div class="max-w-screen-xl mx-auto px-4 py-1">
        <h1 class="font-bold text-lg">Welcome to MyAnimeList!</h1>
      </div>
    </section>
    <section class="max-w-screen-xl flex items-start gap-2 mx-auto p-4">
      <section id="main-content" class="flex flex-1 flex-col gap-4 pr-2 border-r-2 border-gray-300">
        <anime-carousel
          id="current-season-anime"
          :carousel-title="currentSeasonAnime.season"  
          :slides-per-view="4"
          link-href=""
          :anime-data="currentSeasonAnime.data"
        ></anime-carousel>
      </section>
      <section id="sidebar" class="max-w-[300px] flex flex-col gap-3 pl-2">

      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { getCurrentSeason } from '~/functions/composables/mal-season';
import { MAL_API as api } from '../functions/api/mal';
import { AnimeDetail } from '../functions/interface/anime-detail.interface';
import AnimeCarousel from '~/components/carousel/AnimeCarousel.vue';

export default {
  name: 'Homepage',
  components: {
    AnimeCarousel
  },
  setup() {
    const currentSeasonAnime = ref<{ season: string, data: AnimeDetail[] | null }>({ season: '', data: null });

    onMounted(() => {
      api.getCurrentSeasonAnime().then((data) => {
        currentSeasonAnime.value.season = getCurrentSeason();
        currentSeasonAnime.value.data = data;
      });
    })

    return {
      currentSeasonAnime
    }
  }
}
</script>