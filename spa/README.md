# spa

单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML页面并在用户与应用程序交互时动态更新该页面的Web应用程序。最直观的来说，在跳转的时候页面不会刷新。

spa的广泛应用，于是为之服务的前端路由系统也相继出现了。

## react-router 路由系统

在 web 应用开发中，路由系统是不可或缺的一部分。在浏览器当前的 URL 发生变化时，路由系统会做出一些响应，用来保证用户界面与 URL 的同步。

1.首先 npm install react-router-dom

2.书写时：先在顶层
```js
<Router>
    <div>
        app
        <Route path='/' component={Home}/>
        <Route path='/about' component={About}/>
    </div>
</Router>
```
说明：
- Router组件本身只是一个容器，只有最外层需要写。真正的路由要通过Route组件定义。
- a标签会刷新页面，不用。 link to则不会刷新页面
- Route组件定义了URL路径与组件的对应关系：
匹配到对应的路径path,挂载相应组件component
- link 和 path的路径要确保一样，link相当于a，to实际你要到达的路径，从而根据path，挂载对应的组件

3.多个页面有增加时，可使用路由变量

4.Route可以多层嵌套

5.关于path

（1）paramName

    paramName匹配URL的一个部分，直到遇到下一个/、?、#为止。这个路径参数可以通过this.props.params.paramName取出。
（2）不添加路径时，可以匹配到所有。

（3）用*也可以匹配所有路径

（4）匹配的时候会有类似模糊匹配的现象，而exact path则表示路径完全相等。

6.```<Switch>```

从上往下找，找到符合的挂载上就不继续往下找了.

7.```<NavLink>```

通常用于导航，activeStyles className:seleced是常用值，可以实现点击对应导航的样式的变化。

8.```<redirect> ```重定向   

```js
<div>
   <Redirect from='/old' to='/new'/>
   <Route path='/new' component={New}/>
</div>
```
9.render()

通常配合redirect实现权限问题
```js
<Route path='/about' render={props=> this.state.admin ? <About {...props}/> : <Redirect to='/'/>}/>
```
**需要注意的是必须传props**

10.BrowserRouter  HashRouter

二者均可以实现只在一个html里跳转。区别：

BrowserRouter:使用时必须有服务器支持

HashRouter:没有服务器支持，地址url中会增加'/#'，类似于a标签中的锚点

## 更多内容
可以去[官方文档](https://reacttraining.com/react-router/web/example/basic)查看，把example都自己运行一次就更清楚了

---
补充：
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
