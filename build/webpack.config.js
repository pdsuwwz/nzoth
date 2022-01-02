const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')

const { resolve } = require('./utils')

/**
 * @type { webpack.Configuration }
 */
module.exports = {
  mode: 'production',
  entry: resolve('./src/main.js'),
  stats: 'minimal',
  output: {
    path: resolve('./lib'),
    publicPath: '/lib/',
    filename: 'lib-index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        },
        exclude: /node_modules/,
        include: resolve('src')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: resolve('babel.config.js')
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          esModule: false,
          name: '[name].[fullhash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          name: '[name].[fullhash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          name: '[name].[fullhash:7].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|woff2?|eot|ttf|otf|mp4|webm|ogg|mp3|wav|flac|aac)(\?\S*)?$/,
        loader: 'file-loader',
        include: /node_modules/,
        options: {
          name: '[name].[ext]?[fullhash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      root: resolve(),
      '@': resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
  devtool: 'source-map',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  },
  plugins: [
    new ESLintPlugin(),
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
