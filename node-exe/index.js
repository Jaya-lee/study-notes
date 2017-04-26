// 通过npm装的包，require直接加包名；也属于第三方
var $=require('jquery')
console.log($);

//引入第三方模块时直接加模块名 去node_modules里找
var he=require('a')
console.log(he(5,7))
// 自己写的js必须要加相对路径
//require 拿到的是别人导出的
var aaa=require('./teacher.js')
aaa.sayname('hua')
aaa.sayname1('hu')
aaa.sayname2('ua')
