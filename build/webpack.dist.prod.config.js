const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: __dirname + '/../src/index.js',
    output: {//输出文件
        filename: 'form-create.min.js',
        path: __dirname + '/../dist',
        library: 'formCreate',
        libraryTarget:'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new UglifyjsWebpackPlugin({
            parallel: true,
            sourceMap: true
        }),
        new webpack.BannerPlugin('form-create v1.4 | github https://github.com/xaboy/form-create | author xaboy')
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};
