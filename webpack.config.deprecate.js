const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build/"),
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new CopyPlugin({
      patterns: [{ from: "_redirects" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },

    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, "src/"),
      Styles: path.resolve(__dirname, "src/styles/"),
    },
  },
  module: {
    rules: [
      {
        test: [/\.m?js$/, /\.jsx?$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: [/\.css$/],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
