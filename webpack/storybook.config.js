"use strict";

const common = require("./common");
const webpackConfig = require("@kadira/storybook/dist/server/config/defaults/webpack.config.js");

module.exports = (config, env) => {
    const newConfig = webpackConfig(config, env);

    newConfig.module.noParse = common.module.noParse;
    newConfig.resolve = common.resolve;

    return newConfig;
};
