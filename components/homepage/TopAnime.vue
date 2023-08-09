<template>
  <aside class="w-full flex flex-col">
    <section id="aside-header" class="flex items-center justify-between gap-2 px-2 py-1 bg-mal-lightblue dark:bg-mal-lightdark 
    text-mal-blue dark:text-white">
      <h2 class="text-sm font-bold">
        {{ topTitle }}
      </h2>
      <nuxt-link to="/" class="hover:underline text-sm font-bold text-mal-lightblue">
        More
      </nuxt-link>
    </section>
    <section id="aside-content" class="flex flex-col gap-2 bg-white dark:bg-mal-semidark px-2 py-4">
      <article v-for="(anime, index) in animeData" :key="anime.mal_id" class="w-full flex items-start gap-1.5">
        <h3 class="text-lg text-mal-lightdark dark:text-mal-lightblue  font-bold mr-2">
          {{ index + 1 }}
        </h3>
        <div class="flex flex-1 items-start">
          <div class="w-[100px] md:w-[25%]">
            <img :src="anime.images.webp.image_url" alt="anime poster small" class="object-fill border border-mal-lightdark">
          </div>
          <div class="flex flex-1 flex-col gap-1 ml-2">
            <nuxt-link to="/" class="text-sm font-semibold text-mal-lightblue hover:underline underline-offset-1 capitalize">
              {{ anime.titles[0].title }}
            </nuxt-link>
            <p class="text-gray-300 text-xs">
              {{ anime.information.type }}, {{ anime.information.episodes }} eps, scored {{ anime.statistics.score }}
              <br>
              {{ anime.statistics.members }} members
            </p>
          </div>
        </div>
      </article>
    </section>
  </aside>
</template>

<script lang="ts">
import { AnimeDetail } from '../../functions/interface/anime-detail.interface';

export default {
  name: 'TopAnime',
  props: {
    topTitle: String,
    linkHref: String,
    animeData: Array<AnimeDetail>
  },
  setup(props) {
    const { topTitle } = toRefs(props);
    const { linkHref } = toRefs(props);
    const { animeData } = toRefs(props);

    return {
      topTitle, linkHref, animeData
    }
  }
}
</script>