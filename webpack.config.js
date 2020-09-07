const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        presets: ['@babel/preset-react']
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js'
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
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk:true,
    port: 8080
  }
}
