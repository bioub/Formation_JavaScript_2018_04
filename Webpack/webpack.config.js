const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// 1 - Utiliser BannerPlugin pour ajouter
// © Moi 2018 (date en dynamique)

// 2 - Utiliser json5-loader pour permettre le
// chargement de fichier .json5
// https://webpack.js.org/loaders/json5-loader/

// 3 - optionnel
// Utiliser css-loader et style-loader en mode development
// En prod utiliser ExtractTextPlugin pour extraire dans
// un fichier css et balise link
// https://webpack.js.org/loaders/css-loader/#extract

module.exports = (env, {mode}) => {
  const minify = mode === 'production' ? {
    collapseWhitespace: true,
    removeComments: true,
    removeScriptTypeAttributes: true,
  } : false;

  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['vendor', 'commons', 'index'],
      minify
    }),
    new HtmlWebpackPlugin({
      template: './src/todos.html',
      filename: 'todos.html',
      chunks: ['vendor', 'commons', 'todos'],
      minify
    }),
    new HtmlWebpackPlugin({
      template: './src/page2.html',
      filename: 'page2.html',
      chunks: ['vendor', 'commons', 'page2'],
      minify
    }),
    new webpack.BannerPlugin({
      banner: `© Moi ${(new Date).getFullYear()}`,
    }),
  ];

  if (mode === 'production') {
     plugins.push(new ExtractTextPlugin({
      filename: '[name].[chunkhash].css'
    }))
  }

  return {
    devtool: false,
    entry: {
      index: './src/js/index',
      todos: './src/js/todos',
      page2: './src/js/page2',
    },
    output: {
      filename: mode === 'production' ? '[name].[chunkhash].js' : '[name].js',
    },
    plugins,
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                browsers: ['Chrome >= 65', 'IE >= 10'], // ajouter core-js dans le code
              }
            }]]
          }
        }
      }, {
        test: /\.json5$/,
        loader: 'json5-loader',
      }, {
        test: /\.css$/,
        use: mode === 'production'
        ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader' ]
        })
        : [ 'style-loader', 'css-loader' ]
      }]
    },
    // new Webpack 4
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /src/,
            name: "commons",
            chunks: "initial",
            minChunks: 2,
            minSize: 0,
          },
          vendor: {
            test: /node_modules/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    }
  };
}
