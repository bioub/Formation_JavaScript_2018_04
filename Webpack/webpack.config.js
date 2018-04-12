const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, {mode}) => {
  const minify = mode === 'production' ? {
    collapseWhitespace: true,
    removeComments: true,
    removeScriptTypeAttributes: true,
  } : false;

  return {
    entry: {
      index: './src/js/index',
      page1: './src/js/page1',
      page2: './src/js/page2',
    },
    output: {
      filename: mode === 'production' ? '[name].[chunkhash].js' : '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['vendor', 'commons', 'index'],
        minify
      }),
      new HtmlWebpackPlugin({
        template: './src/page1.html',
        filename: 'page1.html',
        chunks: ['vendor', 'page1'],
        minify
      }),
      new HtmlWebpackPlugin({
        template: './src/page2.html',
        filename: 'page2.html',
        chunks: ['vendor', 'commons', 'page2'],
        minify
      }),
    ],
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                browsers: ['Chrome >= 65', 'IE >= 10']
              }
            }]]
          }
        }
      }]
    },
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
