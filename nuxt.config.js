export default {
  head: {
    title: 'client-squeedr-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/toravl/image/upload',
    },
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
