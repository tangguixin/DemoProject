const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
    .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    config.module
      .rule('swf')
      .test(/\.swf$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000
      })
  },
}