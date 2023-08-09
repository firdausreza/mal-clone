<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script lang="ts" setup>
onMounted(async () => {
  if (window.localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark')
  }
})
</script>