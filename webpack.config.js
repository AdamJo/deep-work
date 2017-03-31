const path = require('path');
const HappyPack = require('happypack');

const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServer = require('@webpack-blocks/dev-server2');

const {
  addPlugins,
  createConfig,
  entryPoint,
  env,
  setOutput,
  sourceMaps,
  defineConstants,
  webpack
} = require('@webpack-blocks/webpack2');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const StringReplacePlugin = require('string-replace-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/');

const sourcePath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

const isVendor = ({ userRequest }) =>
  userRequest &&
  userRequest.indexOf('node_modules') >= 0 &&
  userRequest.match(/\.js$/);

const config = createConfig([
  entryPoint([
    'babel-regenerator-runtime',
    sourcePath
  ]),
  setOutput({
    filename: '[name].[hash].js',
    path: outputPath,
    publicPath
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath
  }),
  addPlugins([
    new HappyPack({
      loaders: ['babel-loader'],
      cacheContext: {
        env: process.env.NODE_ENV
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public/index.html')
    })
  ]),
  () => ({
    resolve: {
      modules: ['src', 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'happypack/loader',
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          loader: StringReplacePlugin.replace({
            replacements: [
              {
                pattern: /print\((.*)\);?/ig,
                replacement: function(match, p1, offset, string) {
                  return `console.log(${p1})`;
                }
              }
            ]
          })
        },
        { test: /\.(png|jpe?g|svg)$/, loader: 'url-loader?&limit=8000' },
        { test: /\.(woff2?|ttf|eot)$/, loader: 'url-loader?&limit=8000' },
      ]
    }
  }),
  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      publicPath,
      host,
      port
    }),
    sourceMaps(),
    addPlugins([new webpack.NamedModulesPlugin()])
  ]),
  env('production', [
    setOutput({
      filename: '[name].[chunkHash].js',
      path: outputPath,
      publicPath
    }),
    addPlugins([
      new CleanWebpackPlugin(['dist'], { root: path.join(__dirname, '..') }),
      new CopyWebpackPlugin([{ from: 'public' }]),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: isVendor
      }),
      new WebpackMd5Hash(),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
      new OfflinePlugin(),
      // new BundleAnalyzerPlugin(),
    ])
  ])
]);

module.exports = config;
