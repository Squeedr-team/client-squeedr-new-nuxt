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
  css: [
    '~/assets/styles/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  plugins: [
    { src: '~/plugins/GMaps.js', ssr: true },
    { src: '~/plugins/scrollbar.js', ssr: true },
    { src: '~/plugins/popover.js', ssr: false },
    { src: '~/plugins/qr.js', ssr: false },
    { src: '~/plugins/fontawesome.js' },
    { src: '~/plugins/veeValidate.js' },
    { src: '~/plugins/vuex-persist', ssr: false },
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/layouts',
      pathPrefix: false,
    },
  ],
  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    [
      '@nuxtjs/date-fns',
      {
        locales: ['es', 'fr'],
        defaultLocale: 'en-US',
        format: 'yyyy-MM-dd',
      },
    ],
  ],
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
    'nuxt-stripe-module',
  ],
  stripe: {
    publishableKey: 'pk_test_NFbVfAWG12W1L1Qi5CbhzsVm00IYLV1Cfn',
    cookie: {
      secure: true,
      sameSite: 'lax',
    },
  },
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

  build: {
    transpile: [/^vue2-google-maps($|\/)/, 'vee-validate/dist/rules'],
  },
}
