# ES6
先要知道 ECMAScript就是JavaScript中的语法规范！
它定义了很多重要的东西，包括：

语法 – 解析规则，关键字，语句，声明，操作等

类型 – 布尔型，数字，字符串，对象等

原型和继承

内置对象和函数的标准库 – JSON，数字（Math），数组方法，对象内省的方法等等。

JavaScript由三部分组成：
- ECMAScript（核心）
- DOM（文档对象模型）
- BOM （浏览器对象模型）

ECMAScript标准的版本分别是1、2、3、5、6。

Es6新增了许多特性。
#### 1. Let + Const 块级作用域和常量
***
1)const

声明一个常量。

```js
只读不可以改写
const a=5;
a=6; //错误
// 当a为对象时。可以改里面的属性值
const a={
  name:'a'
}
a.name='b'
```
2)let
let声明的变量只在其声明的块或子块中可用。与var不同的是，var有变量提升，而let没有。
```js
// 重复定义会报错
if(true){
  let a = 1;
  let a = 2; //Identifier 'a' has already been declared
}

// 不存在变量的提升
console.log(i)
let i=10;//i is not defined
```
#### 2.解构
解构意思就是分解一个东西的结构,可以用一种类似数组的方式定义N个变量，可以将一个数组中的值按照规则**赋值** 。
***
##### 数组的解构赋值

按数组下标去匹配。空格会占一位，匹配不到时为undefined
```js
let [a,b,,,c]=[5,6,7,8]
console.log([a,b,c]);//结果为[5,6,undefined]
```
##### 对象的解构赋值

按对象名去匹配。匹配不到时为undefined
```js
let obj={bar:'bbb',foo:'aaa'}
let {foo,bar,sdf}=obj;
console.log(foo,bar,sdf);//结果为aaa,bbb,undefined
```
##### 字符串的解构赋值
同数组，按下标匹配
```js
const [a, b, c, d, e] = 'hello';
console.log(a + b + f)//heundefined
```
##### 对象的声明方法

当**属性名与属性值相等**时，可以只写一个。
对象里面有function时，声明方法也有所改变。
```js
let name='jaya';
let age=20;
let say=function(){
  console.log('今天天气很好');
}
let obj={
 name,//注意和之前的不同
 age,
 say,
 run(){
   console.log('run')
 }
}
console.log(obj);
```
#### 3.Arrows 箭头函数
- 箭头函数简化了函数的的定义方式，():代表参数 =>:代表返回值

```js
//es5
var a=function(){}
//es6
let a=()=>8;
//有一个参数时可以省略，多个参数不可以省略
//函数里面有多条语句时。
//es5
var b=function(num,num1){
  num=num++;
  num1=num1++;
  return num+num1
}
//es6
let b=(num,num1)=>{
  num=num++;
  num1=num1++;
  return num+num1
}
//返回一个对象时
let c=(num,num1)=>({name:'aaa'})
将对象用()包起来，{}表示执行多条语句
```
- this指向
一开始在哪里声明，this就绑定在了谁的身上，无论后面是谁调用this的指向都不变。

#### 4.Template Strings 字符串模板

ES6中允许使用反引号``来创建字符串，字符串用``包起来，里面有变量用${}表示。

```js
var name='jaya';
var age='20';
var str=`<p class='active'>姓名是 ${name} 年龄是 ${age}</p>`
```
#### 5.Rest 剩余参数

- 不定参数是在函数中使用命名参数同时接收不定数量的未命名参数。类似之前js中学的arguments。
- 不定参数的格式是三个句点后跟代表所有不定参数的变量名。
```js
function fun(a, ...rest) {
  console.log(a)
  console.log(rest)
}
fun(1);//a:1 rest:[]
fun(1, 2, 3, 4); //a:1 rest[2,3,4]
```
下面涉及到数组的reduce方法，在文件reduce.md中详细介绍。
```js
//将所有参数相加的函数
function add(...x){
    return x.reduce((m,n)=>m+n);
}
//传递任意个数的参数
console.log(add(1,2,3));//输出：6
console.log(add(1,2,3,4,5));//输出：15
```
#### 6.Spread 扩展操作符
demo1
```js
var arr=[1,2,3]
var arr1=[...arr,4,5]
console.log(arr1);//[1,2,3,4,5]
```
demo2
```js
let obj={a:{b:1}}
let {...x}=obj;
console.log(x);//a:{b:1}
```
#### 7.Default 默认参数值
还有一种是参数里可以对象解构

```js
//传统的指定默认参数的方式
//必须要传参数
function sayHello1(name){
    var name=name||'dude';
    console.log('Hello '+name);
}
//运用ES6的默认参数
//当没有传参时，就使用默认参数，传了参时，就用实际参数。
function sayHello2(name='dude'){
    console.log(`Hello ${name}`);
}
sayHello1();//输出：Hello dude
sayHello1('zf');//输出：Hello zf
sayHello2();//输出：Hello dude
sayHello2('zf');//输出：Hello zf

```
#### 8.Modules 模块

将不同功能的代码分别写在不同文件中，各模块只需导出公共接口部分，然后通过模块的导入的方式可以在其他地方使用。

```js
//test.js中
let name='jaya'
let obj={
  sex:'女',
  age:'20'
}
export{name,obj}//命名导出
export default obj;//默认导出，只允许有一项
//index.js中
import { name} from './test.js';
console.log(name) //jaya
import newobj from './test.js'
console.log(newobj);//随意命名
//as
import { name as newname} from './test.js';
console.log(newname)//jaya
//而且使用了as后在index.js中就没有name了
```
