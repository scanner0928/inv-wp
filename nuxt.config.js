const baseName = process.env.BASE_NAME || 'in-visible.net'
const baseDesc = process.env.BASE_DISC || '共通のディスクリプション。共通のディスクリプション。'
const baseUrl = process.env.BASE_URL || 'http://in-visible.net'
const baseOgp = process.env.BASE_OGP || '/lib/img/ogp'
const baseDir = process.env.BASE_DIR || '/'

export default {
  mode: 'universal',
  env: {
    baseName: baseName,
    baseDesc: baseDesc,
    baseUrl: baseUrl,
    baseOgp: baseOgp,
  },
  router: {
    base: baseDir,
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    title: baseName,
    meta: [
      { hid: 'description', name: 'description', content: baseDesc },
      { hid: 'og:site_name', property: 'og:site_name', content: baseName },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      { hid: 'og:description', property: 'og:description', content: baseDesc },
      { hid: 'og:image', property: 'og:image', content: `${baseOgp}/common.jpg` },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@Twitter' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/components.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: true }
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  axios: {
    // proxyHeaders: false
  },
  styleResources: {
    scss: [
      '~/assets/sass/_vars.scss',
      '~/assets/sass/base/_reset.scss',
      '~/assets/sass/base/_gm_reset.scss',
      '~/assets/sass/base/_functions.scss',
    ]
  },
}
