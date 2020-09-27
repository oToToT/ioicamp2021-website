export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Nuxt generate
  ** See https://nuxtjs.org/api/configuration-generate/
  */
  generate: {
    fallback: true,
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    htmlAttrs: {
      lang: 'zh-TW',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  styleResources: {
    scss: [
      '~assets/_vars.scss',
      '~assets/_section-block.scss'
    ],
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxt/content',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://linux11.csie.org:8787',
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
    transpile: ['@nuxtjs/auth'],
  },
  /*
  ** Router Configureation
  ** See https://nuxtjs.org/api/configuration-router/
  */
  router: {
    trailingSlash: true,
  },
  /*
  ** Nuxt.js Auth Module
  */
  auth: {
    redirect: {
      login: '/signin/',
      logout: false,
      home: '/',
    },
    rewriteRedirects: true,
    strategies: {
      IOICStrategy: {
        _scheme: '~/schemes/IOICScheme',
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: false,
          user: {
            url: '/api/users/apply-form',
            method: 'get',
          }
        },
      }
    }
  },
}
