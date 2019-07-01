const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Mock = require('mockjs')
module.exports={
    mode: 'development',
    entry:path.join(__dirname,'./main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/pages/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader']},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.styl(us)?$/,use:['vue-style-loader','css-loader','stylus-loader']},
            {test: /\.scss$/,loaders: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias:{
            "vue$":"vue/dist/vue.js",
            "@C":path.resolve(__dirname,"./src/components"),
            "@I":path.resolve(__dirname,"./src/static/imgs"),
            "@P":path.resolve(__dirname,"./src/pages")
        }
    },
}