const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '127.0.0.1',
    port: 3502
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "app2",
        library: { type: "var", name: "app2" },
        filename: "remoteEntry.js",
        exposes: {
            'Print':'./src/components/Print'
        },
        shared: []
    }),
    new HtmlWebpackPlugin({
        template: "./pub/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:3502/"
  },
};