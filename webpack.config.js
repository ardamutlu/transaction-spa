const { merge } = require("webpack-merge");
const commonConfig = require("./build-utils/webpack.common");

const addons = (addonsArg) => {
  let addons = [...[addonsArg]].filter(Boolean);
  return addons.map((addonName) =>
    require(`./build-utils/addons/webpack.${addonName}.js`)
  );
};

module.exports = (env) => {
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  return merge(commonConfig, envConfig, ...addons(env.addons));
};
