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
标签区分大小写
```
- **在jsx语法中可以嵌入变量或者表达式**
```
用{}包裹
可写js语法，但是不能写js语句。js语法必须有返回值
```
