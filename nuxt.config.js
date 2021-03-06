module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&subset=latin-ext' },
      // { rel: 'stylesheet', href: 'https://rocket.cdn-moneysmart.com/dist/assets/styles/rocketship.bundle.3.11.0.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** include nuxt modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** include all third party plugins 
  */
  plugins: ['~/plugins/vue-form-wizard'],
  /*
  ** include all css here from node_modules 
  */
  css: [
    'animate.css/animate.min.css',
    { src: 'bulma/bulma.sass', lang: 'sass' }
  ],
  mode: 'universal',
  loading: {
    color: '#8dc63f'
  }
}
