const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}']
      })
    ]
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/landing-page-google/' : '/'
}
