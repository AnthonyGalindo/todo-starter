
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports =  {
    mode: "development",

    output:{
        clean: true,
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
            }



        ],
    },

    optimization:{},
    
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
            filename: '[name].css',
            ignoreOrder: false,
        }),

        new copyWebpackPlugin({
            patterns: [
                { from:"src/assets/", to: "assets/" },
            ]
        })
    ],

}

