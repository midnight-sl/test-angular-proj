const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpaclPlugin = require('copy-webpack-plugin');

module.exports = function () {
    return {
        entry: './src/main.ts',
        output: {
            path: __dirname + '/dist' ,
         filename: 'app.js'
        },
        
        module: {
            rules: [
                {test: /\.ts$/, loaders: ['@ngtools/webpack']},
                { test: /\.css$/, loader: 'raw-loader' },
                { test: /\.html$/, loader: 'raw-loader' }
            ]
         },

        plugins: [
            new CopyWebpaclPlugin([
                { from: 'src/assets', to: 'assets'}
            ]),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist',
                inject: 'head'
             })
        ]
    };
}