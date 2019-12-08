const pkg = require('./package')

import path from "path"
import glob from "glob"

var dynamicRoutes = getDynamicPaths({
  '/posts': 'posts/*.md'
});

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Patrick Tumbucon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'}
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
    'assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/prism'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/font-awesome'
  ],

  generate: {
    routes: dynamicRoutes
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config) {
      config.module.rules.push({
        test:  /\.md$/,
        include: path.resolve(__dirname, "content"),
        loader: 'frontmatter-markdown-loader'
      });
    }
  }
}

function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
    })
  );
}