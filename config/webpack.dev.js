// 存放开发模式下的配置 development
const base = require('./webpack.base.js')
// 用于合并webpack配置的插件
const merge = require('webpack-merge')

// merge 可以接受多个参数, 把参数对象合并成一个对象
// 后面的对象属性, 会覆盖前面的对象属性
module.exports = merge(base, {
  // 配置开发服务器
  devServer: {
    port: 3000, // 端口号
    open: true // 自动打开浏览器
  },
  mode: 'development'
})