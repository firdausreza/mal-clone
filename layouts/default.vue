<template>
  <div>
    <Header/>
    <NuxtPage />
  </div>
</template>

<script>
import Header from '@/components/header.vue';

export default {
  components: [
    Header
  ]
}
</script>