const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugins.delete('prefetch'); //prefetch 삭제
  },

  devServer: {
    proxy: {
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
})

