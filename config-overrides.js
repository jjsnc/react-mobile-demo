const path = require("path");
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addPostcssPlugins,
  addLessLoader
} = require('customize-cra');
module.exports = override(
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