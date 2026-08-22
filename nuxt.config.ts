// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content'
  ],

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 2
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },

  compatibilityDate: '2025-08-22',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  app: {
    baseURL: '/'
  },

  icon: {
    serverBundle: {
      collections: ['lucide', 'simple-icons']
    }
  }
})
