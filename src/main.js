// require('./aa.js')
// console.log('这是main模块')


const $ = require('jquery')

// 导入css
require('./css/style.css')
require('./css/base.css')

$(function() {
  $('#app li:nth-child(odd)').css('color', 'red')
  $('#app li:nth-child(even)').css('color', 'green')
})