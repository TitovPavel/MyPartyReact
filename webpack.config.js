const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./app.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "app_bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:
                    {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        historyApiFallback: true
        }
};