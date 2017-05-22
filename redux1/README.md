```js
const App =()=>{

}
```
## Redux
### 两个组件间的数据流的控制
在constructor里给事件绑定this，效率更高
```js
this.handleSubmit=this.handleSubmit.bind(this)

```
immutablitity
t凡是不通过ser修改state
