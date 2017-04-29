## React

可以让html写入js里

render() 渲染 :
1.渲染什么东西
2.渲染到浏览器的哪里
```js
ReactDom.render(hello,document.getElementById('root'))
```
#### [注意事项]

- jsx语法需要babel进行编译，转为这个方法React.creatElement();

- 相邻的jsx元素必须包裹在一个闭合标签里。Adjacent JSX elements must be wrapped in an enclosing tag
```js
let hello1=<div>fhdsf</div><p>fdgf</p>
ReactDom.render(hello1,document.getElementById('root'))
//修改
let hello1=<div><div>fhdsf</div><p>fdgf</p></div>
```
- 每个标签必须闭合. Unterminated JSX contents
```js
let hello =<input value='de'/>
<br/><img />
```
- 不同于html中的书写
```html
class-->className
<label>中for-->htmlFor
标签区分大小写(区分是原生或者自定义)
```
- **在jsx语法中可以嵌入变量或者表达式**
```
用{}包裹
可写js语法，但是不能写js语句。js语法必须有返回值
eg:不可以写if语句，可以写三目运算？：
```

## react组件（3）
两个点:render()、return 必须有
- 1.React.createClass()
```js
//基本不同这种方法
let Hello = React.createClass({
  render(){
    return (
      <div>
        <h1>第一种创建组件方式，即将废弃</h1>
      </div>
    )
  }
})
ReactDom.render(<Hello/>,document.querySelector('#root'))
//document.querySelector('')和jquery一样
```
创建一个组件，就和一个自定义标签一样用。必须和原生标签有所区分（首字母大写）

- 2.function [name] () {}
```js
function Hello(){
  let x='必须有返回值，'
  return (
  <div>
    <h1>第二种创建组件方式，必须有返回值，而且返回值必须是JSX elements</h1>
    <h1>第二种创建组件方式，{x}而且返回值必须是JSX elements</h1>
  </div>
  )
}
ReactDom.render(<Hello/>,document.querySelector('#root'))
```

- 3.class [name] extends React.Component{}
```js
class Hello extends React.Component{
  render(){
    return (
      <div>
        <h1>第三种创建方法</h1>
      </div>
    )
  }
}
ReactDom.render(<Hello/>,document.querySelector('#root'))
```

## 关于图片的处理：
```js
首先 import img1 from '相对路径'
1） 前景图<img>
    <img src='img1' alt='aaa'/>
2） 背景图 background
    background:`url(${img1})`
```

## 用React来布局
前面已经学习了很多的基本语法，也了解了组件，现在可以开始布局啦。首先我总结了每个文件的书写格式：

首先所有的文件包括js,css,img全部放在src文件夹里

- index.js
```js
出口必须是index.js(很重要!)
1) 导入(import)react[所有涉及到react语法的必须执行]
    import React from 'react';
2) 导入 react Dom [往浏览器渲染组件,只需出口里写]
    import ReactDom from 'react-dom';
3) 导入自定义的组件App(下面介绍)
    import App from './App.js'
4) 将App渲染到浏览器
    ReactDom.render(<App />,document.querySelector('#root'))
```

- App.js
```js
通常我们习惯在App.js 里导入我们构成页面的全部组件,然后整体导出一个组件,渲染到浏览器里.
1) import React from 'react';
2) 导入自己写的组件
    import [name] from './×××';
3）创建组件App
    class App extends React.Component{}
        使用自己写的js文件中的组件
4）导出 App[有export别的文件才可以使用]
    export default App;            
```
别的js文件就没什么特别要求了。

## 样式
1.引入外部样式
在入口src创建.css文件后，在index.js里：import './main.css'

2.行内样式（推荐）
```js
<div style={对象}></div>
```
这里的对象为{css属性1：属性值1,css属性2：属性值2,...}

对于标签内部添加一长串style看起来不是很好看，可以先定义（let）对象A，然后只在行内的style={A}，这种写法有点类似我们之前写的**内部样式**

[一定注意的是render(){let A={}} 在render里定义A]

### 写页面时必不可少的操作（合并对象）
- #### Object.assign()
```js
Object.assign(target,one,two,three)
返回值就是target
//用法
<h3 style={Object.assign({},styles.common,styles.spec)}>
样式中相同属性后面会把前面覆盖
```
- ...展开
之前学的es6语法中(可以看我前面es6-demo里的笔记)介绍过它的用法.
```js
let obj ={a:1}
let obj2 ={...obj,b:2}
console.log(obj2) //{a:1,b:2}
```
