const path = require('path')
//引入html文件生成器
const HtmlWebpackPlugin = require('html-webpack-plugin')
//移入css文件合成器
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
   
   module.exports = {
     // entry: 配置入口文件 (从哪个文件开始打包)
     entry: './src/main.js',
   
     // output: 配置输出 (打包到哪去)
     output: {
       // 打包输出的目录 (必须是绝对路径)
       path: path.join(__dirname, 'dist'),
       // 打包生成的文件名
       filename: 'bundle.js'
     },
     module: {
       // loader的规则
       rules: [
         // 配置 css 文件的解析
         {
           test: /\.css$/,
           use: [ // 根据官方文档写的，注意'css-loader'的书写位置
             {
               loader: MiniCssExtractPlugin.loader,
               options: {
                 publicPath:'../',
               },
             },
             'css-loader'
           ]
         },
         {
           test: /\.less$/,
           use: [
             // 分离出 css 内容
             {
               loader: MiniCssExtractPlugin.loader,
               options: {
                   publicPath:'../',
               },
             }, 
             'css-loader',
             'less-loader' 
           ]
         },
         {
           test: /\.(png|jpg|gif)$/i,
           use: [
             { loader: 'url-loader' ,
               options: {
                 // 超过 8k 就不转 base64, 小于 8k 才转
                 limit: 8 * 1024,
                 name: '[name].[ext]',
                  // 配置静态资源的引用路径
                  publicPath: "../images/",
                  // 配置输出的文件目录
                  outputPath: "images/"
                }
              }
           ]
         },
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
       ]
     },
   
     // 打包模式 production 压缩/development 不压缩
     mode: 'development',
     plugins: [
       new HtmlWebpackPlugin({ template: './public/index.html' }),
       new MiniCssExtractPlugin({ 
          filename:'css/index.css'
        }),
       new CleanWebpackPlugin()
     ],
     devServer: {
        port: 3000, // 端口号
        open: true // 自动打开浏览器
      }
   }