<template>
  <aside class="w-full flex flex-col">
    <template v-if="windowWidth > 768">
      <section
        id="aside-header"
        class="flex items-center justify-between gap-2 px-2 py-1 bg-mal-lightblue dark:bg-mal-lightdark text-mal-blue dark:text-white"
      >
        <h2 class="text-sm font-bold">
          {{ topTitle }}
        </h2>
        <nuxt-link to="/" class="hover:underline text-sm font-bold text-mal-lightblue">
          More
        </nuxt-link>
      </section>
      <section
        id="aside-content"
        class="flex flex-col gap-2 bg-white dark:bg-mal-semidark px-2 py-4"
      >
        <article
          v-for="(anime, index) in animeData"
          :key="anime.mal_id"
          class="w-full flex items-start gap-1.5"
        >
          <h3 class="text-lg text-mal-lightdark dark:text-mal-lightblue font-bold mr-2">
            {{ index + 1 }}
          </h3>
          <div class="flex flex-1 items-start">
            <div class="w-[100px] md:w-[25%]">
              <nuxt-link :to="anime.url" target="_blank" rel="noreferrer">
                <img
                  :src="anime.images.webp.image_url"
                  alt="anime poster small"
                  class="object-fill border border-mal-lightdark"
                />
              </nuxt-link>
            </div>
            <div class="flex flex-1 flex-col gap-1 ml-2">
              <nuxt-link
                :to="anime.url"
                target="_blank"
                rel="noreferrer"
                class="text-xs font-semibold text-mal-lightblue hover:underline underline-offset-1 capitalize"
              >
                {{ anime.titles[0].title }}
              </nuxt-link>
              <div class="flex flex-wrap items-center gap-1 text-xs">
                <p class="w-max px-1.5 py-0.5 rounded-md bg-mal-lightdark text-white">
                  {{ anime.information.type }}
                </p>
                •
                <p>{{ anime.information.episodes || 0 }} eps</p>
                •
                <p
                  :class="`w-max px-1.5 py-0.5 rounded-md text-white ${
                    anime.statistics.score ? 'bg-yellow-400' : 'bg-mal-lightdark'
                  }`"
                >
                  <font-awesome-icon icon="fa-solid fa-star" size="xs" />
                  {{ anime.statistics.score || "N/A" }}
                </p>
              </div>
              <p class="text-white text-xs">
                {{ numeral(anime.statistics.members).format("0,0") }} members
              </p>
            </div>
          </div>
        </article>
      </section>
    </template>
    <template v-else>
      <section
        id="aside-header"
        class="w-full flex items-center justify-center py-1.5 bg-mal-lightdark border-b border-mal-dark rounded-t-sm"
      >
        <nuxt-link to="#" class="flex items-center gap-1">
          <h2 class="text-sm font-bold">
            {{ topTitle }}
          </h2>
          <span>
            <font-awesome-icon icon="fa-solid fa-up-right-from-square" size="xs" />
          </span>
        </nuxt-link>
      </section>
      <section id="aside-content" class="w-full" v-if="animeData && animeData.length > 0">
        <swiper-container slides-per-view="auto" space-between="1" speed="700" free-mode="true">
          <swiper-slide
            lazy="true"
            class="w-[120px]"
            v-for="(anime, index) in animeData"
            :key="anime.mal_id"
          >
            <nuxt-link to="#">
              <div class="relative">
                <img
                  :src="anime.images.webp.image_url"
                  alt="anime poster"
                  class="w-[120px] h-[180px] object-cover z-0 border border-mal-lightdark"
                />
                <div
                  class="absolute z-10 bottom-0 inset-x-0 px-2 pb-2 bg-gradient-to-b from-transparent to-black/90"
                >
                  <h4 class="text-xs block truncate">{{ anime.titles[0].title }}</h4>
                  <p class="text-xs">
                    <span>
                      <font-awesome-icon
                        icon="fa-solid fa-star"
                        size="xs"
                        class="text-yellow-400"
                      />
                    </span>
                    {{ anime.statistics.score || "N/A" }}
                  </p>
                </div>
                <p
                  class="absolute top-2 left-2 w-max px-1.5 py-0.5 bg-mal-blue text-white text-xs border border-white rounded-sm"
                >
                  {{ index + 1 }}
                </p>
              </div>
            </nuxt-link>
          </swiper-slide>
        </swiper-container>
      </section>
    </template>
  </aside>
</template>

<script lang="ts">
import { MAL_API as api } from "../../functions/api/mal";
import numeral from "numeral";
import { AnimeDetail } from "../../functions/interface/anime-detail.interface";

export default {
  name: "TopAnime",
  props: {
    topTitle: {
      type: String,
      default: "",
    },
    linkHref: {
      type: String,
      default: "",
    },
    animeData: Array<AnimeDetail>,
  },
  setup(props) {
    const { topTitle } = toRefs(props);
    const { linkHref } = toRefs(props);
    const { animeData } = toRefs(props);
    const windowWidth = ref<number>(0);

    onUpdated(() => {
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
    });

    onMounted(() => {
      windowWidth.value = window.innerWidth;
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", () => {});
    });

    return {
      topTitle,
      linkHref,
      animeData,
      windowWidth,
      numeral,
    };
  },
};
</script>
