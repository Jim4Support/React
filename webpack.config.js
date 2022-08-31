const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output:  {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: "/"
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader","less-loader"]
            },
            {
                test: /\.(jpg|png|jpeg|svg)$/,
                use: ["file-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }
        ]
    }
}
