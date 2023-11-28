<template>
  <section id="latest-anime-recommendations">
    <section
      id="anime-recom-header"
      class="w-full flex items-center justify-between gap-2 pb-1 border-b border-mal-lightdark"
    >
      <h3 class="font-semibold">Latest Anime Recommendations</h3>
      <nuxt-link
        to="#"
        class="text-mal-blue dark:text-mal-lightblue text-xs hover:underline underline-offset-1"
      >
        View More
      </nuxt-link>
    </section>
    <section id="anime-recom-container" class="w-full flex flex-col">
      <article
        v-for="(anime, index) in animeData"
        class="w-full py-2 flex flex-col gap-1 border-b border-mal-lightdark"
      >
        <div id="entry-recommendation" class="w-full flex flex-wrap gap-1.5">
          <div id="first-entry" class="w-full sm:w-[45%]">
            <h4 class="text-xs font-semibold">If you liked:</h4>
            <div class="flex flex-1 gap-1 items-start mt-1">
              <img
                :src="anime.entry[0].images.webp?.image_url"
                :alt="anime.entry[0].title"
                width="60"
                class="border border-mal-lightdark object-contain"
              />
              <div>
                <nuxt-link
                  :to="anime.entry[0].url"
                  target="_blank"
                  class="w-max text-sm font-bold text-mal-blue hover:text-mal-lightblue hover:underline underline-offset-1 transition-colors"
                >
                  {{ anime.entry[0].title }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div id="second-entry" class="w-full sm:w-[45%]">
            <h4 class="text-xs font-semibold">Then you might like:</h4>
            <div class="flex flex-1 gap-1 items-start mt-1">
              <img
                :src="anime.entry[1].images.webp?.image_url"
                :alt="anime.entry[1].title"
                width="60"
                class="border border-mal-lightdark object-contain"
              />
              <div>
                <nuxt-link
                  :to="anime.entry[1].url"
                  target="_blank"
                  class="w-max text-sm font-bold text-mal-blue dark:hover:text-mal-lightblue hover:underline underline-offset-1 transition-colors"
                >
                  {{ anime.entry[1].title }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div id="recommendation-content" class="w-full">
          <div class="block">
            <p ref="recomContent" class="text-xs line-clamp-3">
              {{ anime.content }}
            </p>
            <nuxt-link
              to="#"
              class="w-max text-xs text-mal-blue dark:hover:text-mal-lightblue hover:underline underline-offset-1 font-semibold transition-colors"
            >
              Read More
            </nuxt-link>
          </div>
          <p class="text-xs w-max mt-1">
            Recommendation by
            <span>
              <nuxt-link
                to="#"
                class="w-max text-xs text-mal-blue dark:hover:text-mal-lightblue hover:underline underline-offset-1 font-semibold transition-colors"
              >
                {{ anime.user.username }}
              </nuxt-link>
            </span>
          </p>
        </div>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { RecomResponse } from "~/functions/interface/response.interface";

export default {
  name: "AnimeRecommendation",
  props: {
    animeData: Array<RecomResponse>,
  },
  setup(props) {
    const { animeData } = toRefs(props);
    const recomContent = ref<Array<HTMLDivElement>>([]);

    const isClamped = (index: number) => {
      if (recomContent && recomContent.value.length > 0) {
        if (recomContent.value[index].scrollHeight > recomContent.value[index].clientHeight) {
          return recomContent.value[index].classList.remove("hidden");
        } else return recomContent.value[index].classList.add("hidden");
      }
    };

    const handleResize = () => {
      console.log(recomContent, "recomContent");
      if (recomContent && recomContent.value.length > 0) {
        recomContent.value.forEach((content) => {
          if (content.scrollHeight > content.clientHeight) {
            content.classList.remove("hidden");
          } else {
            content.classList.add("hidden");
          }
        });
      }
    };

    onUpdated(() => {
      window.addEventListener("resize", () => {
        console.log(recomContent, "recomContent");
        if (recomContent && recomContent.value.length > 0) {
          recomContent.value.forEach((content) => {
            if (content.scrollHeight > content.clientHeight) {
              content.classList.remove("hidden");
            } else {
              content.classList.add("hidden");
            }
          });
        }
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", () => {});
    });

    return {
      animeData,
      isClamped,
      recomContent,
    };
  },
};
</script>
