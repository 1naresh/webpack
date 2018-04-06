const path = require('path');
const webpack=require('webpack');
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    context: path.join(__dirname, 'app'),
    entry: './app.js',
    devtool:"source-map",
    output: {
    path: path.join(__dirname, 'build'),
    filename: 'index..min.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  watch:true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },

  module: {
      rules:[
        {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
            }
        },
        {
          test : /\.(css)$/,
          loader : ['style-loader', 'css-loader']
        }            
      ]
  },
  plugins: [
    
      new CompressionPlugin({
        test: /\.js/
      })
        
  ],
 
}