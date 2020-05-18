module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      '': {
        // target: 'https://pc.ltyes.com',
        target: 'http://localhost:9915',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '': ''
        }
      }
    },
    before: app => {}
  }
};