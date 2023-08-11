const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            ['@babel/preset-env',{targets : 'defaults'}],
                            ['@babel/preset-react',{runtime: 'automatic'}]
                        ]
                    }
                },
                exclude: /node_modules/,
                resolve:{
                    extensions:['.js','.jsx']
                }
            },
            {
                test: /.css$/,
                use:['style-loader', 'css-loader'],
                resolve:{
                    extensions: ['.css']
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}