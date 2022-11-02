const { resolve } = require("path");
const PROJECT_ROOT = resolve(__dirname, "../");

module.exports = {
  outputPath: resolve(PROJECT_ROOT, "dist"),
  entry: resolve(PROJECT_ROOT, "src", "index.tsx"),
  template: resolve(PROJECT_ROOT, "public", "index.html"),
  favicon: resolve(PROJECT_ROOT, "public", "favicon.ico"),
};
