const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),

    output: {
        path:path.join(__dirname,'/dist'),
        filename:"bundle.js"
    },

    devServer: {
        port:9528,
        open:true,
        // 通过 webpack-dev-server 实现反向代理的功能：
        // 过程：
        // 1 我们在代码中发送请求的地址为：/api/movie/in_theaters
        // 2 devServer 拦截我们发送的所有请求，并通过我们配置好的规则，来与发送的请求地址进行匹配
        // 3 `/api` 能够匹配 `/api/movie/in_theaters`
        // 4 通过 pathRewrite 将 /api 替换为 ''，替换之后的请求地址为：/movie/in_theaters
        // 5 将第4步中替换后的请求地址， 与 target 的值 https://api.douban.com/v2，拼接到一起：
        //    https://api.douban.com/v2/movie/in_theaters
        // 6 这样就获取到真正的接口地址了：https://api.douban.com/v2/movie/in_theaters
        // 7 由 devserver 代理发送请求，并且将请求拿到数据交给发起请求的方法
        // 8 最终，获取到了数据
        proxy: {
            // 使用：/api/movie/in_theaters
            // 访问 ‘/api/movie/in_theaters’ ==> 'https://api.douban.com/v2/movie/in_theaters'
    
            // 键值对中的 '/api'键：用来告诉 dev-server ，将来你看到请求地址是以 /api开头的，你就代理发送请求
            '/api': {
            // 代理的目标服务器地址
            target: 'https://api.douban.com/v2',
            // https请求需要该设置
            secure: false,
            // 必须设置该项
            changeOrigin: true,
            // '/api/movie/in_theaters' 路径重写为：'/movie/in_theaters'
            pathRewrite: { "^/api": "" }
            }
        }
    },
    module:{
        rules:[
            // { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader","postcss-loader"]
                })
              },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ['css-loader', 'sass-loader']
                })
            },
            { test: /\.(png|jpg|jpeg|gif|bmp)$/, use: 'url-loader' }
        ]
    },

    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json']
    },

    plugins: [
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/inedx.html')
        }),
        new ExtractTextPlugin("css/style.css"),
    ]

}