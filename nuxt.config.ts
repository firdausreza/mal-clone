// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  components: [
    '~/components'
  ],
  css: [
    '@/assets/css/index.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  plugins: [
    '~/plugins/fontawesome.js',
  ],
  app: {
    head: {
      link: [
        { rel: "icon", type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: "icon", type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: "apple-touch-icon", type: 'image/png', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: "manifest", href: '/site.webmanifest' }
      ],
      title: 'MyAnimeList Clone'
    }
  },
  pages: true,
})
