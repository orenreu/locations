/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 23/04/2017
 * Time: 22:37
 */
var path = require('path');
const webpack = require('webpack');

module.exports = env => {
    return {
        entry: './app/App.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        module: {
            loaders: [
                {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
                {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader", exclude: /node_modules/},
                {test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader'}
            ]
        }
    }
};