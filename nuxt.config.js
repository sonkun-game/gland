export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gland',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'no-scrollbar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.7.0.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/datepicker.min.js',
      },
      {
        src: 'https://kit.fontawesome.com/4ec2fea601.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/main.js', mode: 'client' },
    { src: '~/plugins/api.js', mode: 'client' },
    { src: '~/plugins/common.js', mode: 'client' },
  ],

  loading: {
    color: 'blue',
    height: '5px',
    continuous: true
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Disable source maps
    devtools: false
  },

  env: {
    API_URL: 'https://api.smshub.io.vn:8447/Spa/',
    API_TOTAL: 'https://api.smshub.io.vn:8447/Total/',
    API_JWT: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjkwOTUzNzI2LCJleHAiOjE3NTE0MzM3MjZ9.pvVOd6xKmwSYalPlO9SUyumsWJeimJaENY5X3a15wCHcqfqseImWXCE0DHRqdpMvPLX8iRUUCaUILG-iiCG6Yw'
  },
}
