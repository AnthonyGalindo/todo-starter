
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser    = require('terser-webpack-plugin');

module.exports =  {
    mode: "production",

    output:{
        clean: true,
        filename: 'main.[contenthash].js'
    },

    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },

            {
                test: /\.css$/,
                exclude: /estilos.css$/,
                use: ['style-loader','css-loader'],
              
            },

            {
                test: /estilos.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            

            {
                test: /\.(png|jpe?g|gif|)$/,
                loader: 'file-loader',
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }



        ],
    },

    optimization:{
        minimize: true,
        minimizer : [
            new CssMinimizer(),
            new Terser(),
        ] 
    },
    
    plugins:[
        new HtmlWebpackPlugin(
           {
            title:'algo',
            // filename: 'index.html'
            template: './src/index.html'
           }
        ),

        new MiniCssExtractPlugin({
            // filename: '[name].[fullhash].css',
            filename: '[name].[fullhash].css',
            ignoreOrder: false,
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from:"src/assets/", to: "assets/" },
            ]
        }),

    ],

}

