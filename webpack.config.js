const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({ template: '/public/index.html' })
    ],
    mode: 'development',
    devServer: {
        port: process.env.PORT || 3000,
        historyApiFallback: true,
        open: true,
        compress: true,

        // Setup output directory
        static: {
            directory: path.join(__dirname, 'public'),
            watch: {
                ignored: /node_modules/,
            },
        },
    },
}