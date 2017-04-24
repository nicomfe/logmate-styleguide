const path = require('path')
const webpack = require('webpack')
const cssnano = require('cssnano')

const NODE_ENV = 'production'

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: { warnings: false }}),
  ],
  progress: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /(\.scss)$/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
      { test:  /\.json$/, loader: 'json-loader' },
      {
        test: /(\.css)$/,
        loaders: [
          'style',
          'css',
          'postcss',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      safe: true,
      discardComments: {
        removeAll: true,
      },
    }),
  ],
}
