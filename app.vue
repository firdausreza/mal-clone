<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script lang="ts">
import { MAL_API } from './functions/api/mal';

export default {
  async mounted() {
    if (window.localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    const animeData = await MAL_API.getAnimeFullDetail(51019).then((data) => data);
    console.log(animeData)
  }
}
</script>