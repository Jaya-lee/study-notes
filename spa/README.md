# spa
单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML页面并在用户与应用程序交互时动态更新该页面的Web应用程序。最直观的来说，在跳转的时候页面不会刷新。

用function创建组件时，会默认接收一个参数props,利用对象解构赋值，可以拿到属性值
```js
function App({title,age}){
    console.log(title,age); //jaya 18
        return(
            <div>
                aaa
            </div>
        )
}
ReactDOM.render(<App title='jaya' age='18'/>,  document.getElementById('root'))

```
先在顶层
```js
<Router>
    <div>
        app
        <Route path='/' component={Home}/>
        <Route path='/about' component={About}/>
    </div>
</Router>
```
Router组件本身只是一个容器，真正的路由要通过Route组件定义。
a刷新，不用。 link to
Route组件定义了URL路径与组件的对应关系
匹配到对应的路径path,挂载相应组件component

多个页面有增加时，路由变量

嵌套
link 和 path的路径要确保一样
四、通配符
（1）:paramName
:paramName匹配URL的一个部分，直到遇到下一个/、?、#为止。这个路径参数可以通过this.props.params.paramName取出。

<redirect> 重定向
    权限问题
```js
<div>
   <Redirect from='/old' to='/new'/>
   <Route path='/new' component={New}/>
</div>
```
没写path所有都会匹配到
switch 从上往下找，找到符合的挂载上就不继续往下找了

render()实现权限问题

BrowserRouter
HashRouter
