const babelJestMd = require('babel-jest');
const babelJest = babelJestMd.__esModule ? babelJestMd.default : babelJestMd;

const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
};
// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = babelJest.createTransformer(babelOptions);
