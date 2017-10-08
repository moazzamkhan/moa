const path = require("path")

module.exports = {
  devtool: "source-map",
  entry: { app: "./src/renderer.js", test: "./src/test-redux.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
}
