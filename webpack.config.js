const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "inline-source-map" : "source-map",
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.json" })],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
        },
      },
      {
        test: /\.css$/,
        include: [/node_modules\/antd/],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules\/antd/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
          {
            loader: "esbuild-loader",
            options: {
              minify: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: "file-loader",
      },
    ],
    parser: {
      javascript: {
        url: false,
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: true,
    liveReload: false,
    client: {
      overlay: false,
    },
  },
};
