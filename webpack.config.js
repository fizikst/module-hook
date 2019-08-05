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
  externals: {
    react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
    },
    'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
    }
  },
  output: {
    path: path.join(__dirname, "/"),
    filename: "index.js",
    libraryTarget: 'commonjs2'
  },
};
