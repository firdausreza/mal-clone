<template>
  <div>
    <app-load v-show="isLoading" />
    <NuxtLayout />
  </div>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle';
import AppLoad from '~/components/AppLoad.vue';

register();

onMounted(async () => {
  if (window.localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark')
  }
});

defineComponent([AppLoad]);

const isLoading = ref(true);
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:start', () => {
  isLoading.value = true;
});
nuxtApp.hook('page:finish', () => {
  isLoading.value = false;
});
</script>