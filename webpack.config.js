const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
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
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./src/index.html",
            meta: {
                preconnect: {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                    crossorigin: true,
                },
                preconnect2: {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: true,
                },
            },
        }),
    ],
};
