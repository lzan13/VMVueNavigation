const path = require("path");
module.exports = {
  publicPath: "/hao/",
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "./src/assets/less/reset.less"),
        path.resolve(__dirname, "./src/assets/less/variable.less")
      ]
    }
  }
}
