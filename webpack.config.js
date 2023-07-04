const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "inline-source-map" : "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src"),
    ],
    alias: {
<<<<<<< HEAD
      "@components": path.resolve(__dirname, "src/components"),
      "@types": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/store"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
=======
      "@components": path.resolve(__dirname, "components/"),
>>>>>>> 8c7e392a9dd13d61c2b1fc1eccaa6bfccf827f47
    },
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
    liveReload: true,
    client: {
      overlay: false,
    },
  },
};
