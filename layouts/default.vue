<template>
  <div>
    <Header/>
    <slot />
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