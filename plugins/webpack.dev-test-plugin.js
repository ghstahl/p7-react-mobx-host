const path = require('path');
// const ButternutWebpackPlugin = require('butternut-webpack-plugin').default;
const webpack = require('webpack');

module.exports = {
  entry: './test-plugin/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    'react': 'react',
    'React': "react",
    'react-dom': 'ReactDOM',
    'prop-types':'PropTypes',
    'mobx':'mobx',
    'mobx-react':'mobxReact' 
    

  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }, ],
  },
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    // fails with: TypeError: Cannot read property 'minify' of null
    // new ButternutWebpackPlugin(),
  ],
};

