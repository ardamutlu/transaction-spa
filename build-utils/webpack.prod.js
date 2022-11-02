const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const config = require("./common-paths");

module.exports = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: config.outputPath,
    publicPath: "/",
  },
  target: "web",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
        vendor: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
  ],
};
