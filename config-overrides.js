const path = require("path");
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addPostcssPlugins,
  addLessLoader
} = require('customize-cra');
// 获取当前活动
let pageEnv = process.argv.find((n) => n.includes("page="))
let activeName = pageEnv ? pageEnv.substr(5) : "active-default"
console.log(`src/pages/${activeName}/index.js`, '当前运行的活动名字')
module.exports = {
  paths: function (paths, env) {
    /* 
     *  appIndexJs 配置入口文件
     *  appBuild   配置打包编译目录
     */
    paths.appIndexJs = path.resolve(__dirname, `src/pages/${activeName}/index.js`);
    paths.appBuild = path.resolve(__dirname, `build/${activeName}`);
    return paths;
  },
  webpack: override(
    addLessLoader(),
    addWebpackAlias({  //增加路径别名的处理
      '@': path.resolve('./src')
    }),
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
    addPostcssPlugins([require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*']
    }),])
  )
}