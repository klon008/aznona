const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BaseWebpackConfig = require('./webpack.base.conf');


const BuildWebpackConfig = merge(BaseWebpackConfig, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
});

module.exports = new Promise(resolve => {
  resolve(BuildWebpackConfig);
});
