const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
    entry: "./src/01_app/index.tsx",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@app": path.resolve(__dirname, "src/01_app"),
            "@pages": path.resolve(__dirname, "src/02_pages"),
            "@widgets": path.resolve(__dirname, "src/03_widgets"),
            "@features": path.resolve(__dirname, "src/04_features"),
            "@entities": path.resolve(__dirname, "src/05_entities"),
            "@shared": path.resolve(__dirname, "src/06_shared")
        },
        extensions: [".tsx", ".ts", ".js"],

    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        // new BundleAnalyzerPlugin(),
    ],
    devServer: {
        static: "./dist",
        hot: true,
        historyApiFallback: true,
        port: 3000,
        open: true,
    },
    mode: "development",
};