const path = require("path");

const loaders = [];

loaders.push({
  test: /(\.jsx|\.js)$/,
  exclude: /node_modules/,
  use: 'babel-loader',
});

module.exports = {
  entry: "./src/Test.js",
  module: {
    rules: loaders,
  },
  output: {
    path: path.join(__dirname, "/"),
    filename: "index.js",
    libraryTarget: 'commonjs2'
  },
};
