module.exports = {
  // assetsDir: "static",
  indexPath: "index.html",
  //包含运行时编译器,启用会增加10k左右
  // runtimeCompiler: true,
  //生产环境是否构建map
  productionSourceMap: false,
  pages:{
    index:{
      entry:"src/main.js",
      title:"玉书坊"
    }
  },
  pwa:{
    iconPaths:{
      favicon16: 'favicon.ico',
      favicon32: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    }
  },
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