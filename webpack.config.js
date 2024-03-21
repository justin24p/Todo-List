const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        watchFiles: ["./src/.index.html"],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Todo-App",
            template: "./src/index.html",
            filename: "index.html",
            inject: "body",
        }),
    ],
};
