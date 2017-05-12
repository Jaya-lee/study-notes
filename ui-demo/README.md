# [material-ui](http://www.material-ui.com/#/)
１．装包
yarn add material-ui
yarn add  react-tap-event-plugin(支持各种事件)

2.为了使各种事件可以正常运行，先在外面执行
```js
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()
```

3.<MuiThemeProvider/>只能包裹一个节点，若含多个需用div包裹.它在最顶层，只用一次，类似<Router/>

```js
<MuiThemeProvider>
    <div>
        <RaisedButton label="Default" />
        <RaisedButton label="Default" />
        <RaisedButton label="Default" />
    </div>
</MuiThemeProvider>

```
4.所有的date例子都是在<DatePicker/>下面进行修改值.
而且在父级中引时，只需将return里的内容引进即可。

5.icons

用fonticon时，还需在html引进字体库
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
```

建议用[svg-icons](https://material.io/icons/)
```js
import ××× from 'material-ui/svg-icons/分类/名字'
<xxx />
```

6.主题
```js
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

<MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}/>
```
给<MuiThemeProvider>一个muiTheme属性，调用引入的getMuiTheme()方法，把darkBaseTheme传进来。
darkBaseTheme是一个对象，我们可以自定义一个对象来改为自己想要的主题

# [AntDesign](https://ant.design/index-cn)

组件：这里是 Ant Design 的 React 实现，开发和服务于企业级后台产品。

1.安装：yarn add antd

2.按需加载
```js
自动: yarn add babel-plugin-import
import { DatePicker } from 'antd';
        这个要对webpack进行配置

手动: import DatePicker from 'antd/lib/date-picker';  // 加载 JS
import 'antd/lib/date-picker/style/css';        // 加载 CSS
```

3.它们都在使用，基本全是心仪公司，要好好用～
- 蚂蚁金服
- 阿里巴巴
- 口碑
- 美团
- 滴滴

要用form，先把它封装的方法拿进来，才可以使用

4.关于组件的使用看doc就好了，与material-ui的使用还是比较类似的。这里需要特别说明一下form的使用。

### 表单域

在AntDesign中，将表单封装成了表单域 <Form.Item />
```js
<Form.Item {...props}>
  {children}
</Form.Item>
```
封装了之后就会注入了props，添加了很多方法，才能实现表单的多种功能。　这样在书写的时候就需要
```js
const newAnt = Form.create()(Ａnt);
ReactDOM.render(<newAnt />, mountNode);
```
或者是在导出组件时给它一个Form.create()的方法
```js
export default Form.create()(Ant);
```
