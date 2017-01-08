module.exports = {
    devtool:'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename:"bundle.js"
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel',
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'//添加对样式表的处理
            }
        ]
    },
    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc.")//在这个数组中new一个就可以了
    ],
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        // port: '8090',
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}