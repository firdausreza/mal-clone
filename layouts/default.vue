<template>
  <div>
    <Header/>
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: [
    Header, Footer
  ],
}
</script>
