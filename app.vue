<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script lang="ts" setup>
import { MAL_API } from './functions/api/mal';
import { AnimeDetail } from './functions/interface/anime-detail.interface';

let animeData = ref<AnimeDetail | null>(null);
let topAnime = ref<object | null>(null);
let animeSearchResult = ref(null);

onMounted(async () => {
  if (window.localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    animeData.value = await MAL_API.getAnimeFullDetail(51019).then((data) => data);
    topAnime.value = await MAL_API.getTopAnime('favorite', 5, 1).then((data) => data);
    animeSearchResult.value = await MAL_API.getAnimeSearchResults("One");

    console.log(topAnime.value, "searchResult");
})
</script>