// https://nuxt.com/docs/api/configuration/nuxt-config
import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  image: {
    provider: "ipx"
  },
  plugins: [
    '~/plugins/aos.client.ts'
  ],
  // ui: {
  //   icons: 'all'
  // },
  // colorMode: {
  //   preference: 'light'
  // },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    ['@pinia/nuxt', { disableVuex: false }],
  ],
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],
  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true
      })
    ]
  },
  build: {
    transpile: ['gsap'],
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
      'postcss-preset-env': {
        features: { 'nesting-rules': false },
      },
    },
  },
})