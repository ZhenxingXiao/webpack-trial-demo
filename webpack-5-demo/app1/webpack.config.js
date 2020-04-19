const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3501
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "app1",
        library: { type: "var", name: "app1" },
        remotes: {
            app2: "app2"
        },
        shared: []
    }),
    new HtmlWebpackPlugin({
        template: "./pub/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:3501/"
  },
};