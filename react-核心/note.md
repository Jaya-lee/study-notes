## React 核心
### 1.state 管理组件内部的方法（异步操作）

state是react的核心. 在react中要有与之前不同的**思想**:有变换就不要写固定值,写在state里,然后根据满足的条件来改变。

state写在constructor(){this.state{num:0}},这样代码加载完就会执行。

#### 改变state的方法：setState()

更新state时，会执行render,也就会重新渲染页面(不操作dom)

prevState是setState里的一个参数:可以拿到修改之前的state里的值
```js
handleclick(){
        this.setState( prevState=>({num:prevState.num+10}))
    }
```
---
 console.log()可以取代alert()或document.write()，在网页脚本中使用console.log()时，会在浏览器控制台打印出信息。

console.dir()可以显示一个对象所有的属性和方法。

---
### 2.ref 拿到真实的dom节点

React支持一个特殊的属性，你可以将这个属性加在任何通过render()返回的组件中。因为react中拿到的都是虚拟dom ,而ref可以拿到实例。
- ref字符串使用

    this.refs.A(只能拿字符串，不能拿变量，将淘汰不使用)
- ref回调函数
```js
ref属性也可以是一个回调函数。
这个函数将要在组件被挂载之后立即执行。即当render()执行后才能拿到dom节点，才可以操作。
这里需要注意，当这个参照组件被卸载并且这个ref改变的时候，先前的ref的参数值将为null。这将有效的防止了内存的泄露。
```
eg.获取焦点
```js
<input placeholder='haha' ref={input => this.input=input}/>
第一个：形参
第二个：组件的属性
第三个：实参 拿到节点
this.input.focus()
```

### 3.props 组件与组件间的沟通
单项数据流：只能父级往子级传
组件App里有组件Btn,App为父组件
```js
创建父组件的js中：Btn加一个属性A
创建子组件的js中：{this.prop.A}
变量为数字用{}，字符串`${}`
```

在创建子组件的js中：将父组件中所有定义过的属性全部写进去（this.props）,然后再写子组件本身默认的属性.defaultProps

安装好propTypes包，可以规定写入参数的数据类型
```js
Btn.propTypes={
    title:PropTypes.string,
    pad:PropTypes.number
}
```
##### children(特殊的props)
```js
父组件：
<Card>
    <h1>fhdsjgh</h1>
    <h1>fhdsjgh</h1>
    <h1>fhdsjgh</h1>
    <h1>fhdsjgh</h1>
</Card>
子组件：
{this.props.children} 写在标签的内部
```
