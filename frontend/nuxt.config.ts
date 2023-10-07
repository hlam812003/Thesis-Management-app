// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@nuxt/ui',
  ],
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ]
})
