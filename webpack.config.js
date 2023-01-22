const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    mode: "production",
    plugins: [new HtmlWebpackPlugin({template: "index.html"})],
    optimization: {
        runtimeChunk: "single",
    }
}