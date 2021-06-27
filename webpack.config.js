/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
module.exports = (config) => {
  config.profile = true;
  config.plugins.push( new webpack.ProgressPlugin({profile: true}));
  return {...config, };
};
