const Dotenv = require("dotenv-webpack");
const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: port,
    historyApiFallback: true,
    allowedHosts: "all",
  },
  plugins: [new Dotenv()],
};
