const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './client/index.js',
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-react', { 'runtime': 'automatic' }]
        ]
      }
    }, {
      test: /\.(css|scss)$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        "css-loader" ,
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [ "postcss-preset-env" ],
            },
          },
        },
        "sass-loader"
      ]
    }]
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.scss', '.css'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js'
  },
  optimization: {
    minimize: true,
    usedExports: true,
    nodeEnv: 'production',
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10
        }
      }
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: 'static/css', to: 'css'
      }]
    }),
    new HtmlWebpackPlugin ({
      template: 'static/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk:true,
    historyApiFallback: true,
    port: 8080
  }
}
