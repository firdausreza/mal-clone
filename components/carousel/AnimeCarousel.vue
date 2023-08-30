<template>
  <section>
    <div class="flex flex-wrap gap-1.5 items-center justify-between border-b border-gray-400 pb-2">
      <h3 class="text-sm md:text-base font-semibold">
        {{ carouselTitle }}
      </h3>
      <nuxt-link to="#" class="text-sm text-mal-lightblue font-bold hover:underline underline-offset-1">
        View More
      </nuxt-link>
    </div>
    <div class="mt-2">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'AnimeCarousel',
  props: {
    carouselTitle: String,
    linkHref: String,
  },
  setup(props) {
    const { carouselTitle } = toRefs(props);
    const { linkHref } = toRefs(props);

    return {
      carouselTitle, linkHref
    }
  }
}
</script>