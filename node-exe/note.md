# npm 使用

### 初始化node项目
```bash
  npm init
```
多了一个.json文件，有刚才输入的信息

### 用npm安装第三方模块（eg.jquery）

```js
npm install [packagename] [--save]
//安装到了node_modules文件夹
--save:记录到json文件的dependencies字段中
--save-dev:记录到json文件的devDependencies字段中
--global:缩写为-g 全局
```

### 卸载模块
```bash
  npm uninstall [packagename] [-g]
```
# json文件格式很严格
### json文件中 每一项的最后一句不能加','

注意每一个配置为对象，最外面也是一个大的对象
### json文件中必须为双引号

# node.js 基本语法
node中我们可以使用require这个关键字来导入模块.使用exports导出所需要的东西。
require和exports是配对使用的。
### 下面这三大法则就是module.exports和exports的主要区别
<ul>
<li>module.exports原本就是一个空对象</li>
<li>exprots是这个对象的一个引用变量</li>
<li>平时我们require进来的就是module.exports对象</li>
</ul>
