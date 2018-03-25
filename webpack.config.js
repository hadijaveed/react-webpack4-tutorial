const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PORT = process.env.port || 3000


module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.[hash].js',
    path: __dirname + 'public/static/js',
    publicPath: '/',
  },
  
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      },
    ],
  },


  plugins: [

    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),

    new webpack.HotModuleReplacementPlugin(),
    
  ],

  devServer: {
    host: 'localhost',
    port: PORT,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
}