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
  css: ['~/assets/styles/main.css'],
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

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    'nuxt-webfontloader',
    '@nuxtjs/markdownit',
  ],
  webfontloader: {
    google: {
      // Loads Open Sans font with weights 300 and 400 + display font as swap
      families: ['Poppins:300,400,700,900&display=swap'],
    },
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
  },
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
