# Class
 ## 1.基本语法
```js
//定义类
## class [name]{}
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

可以看到定义一个类，有一个constructor方法，还有一个toString方法。

类的所有方法都定义在类的prototype属性上面。
```js
class Point {
  constructor(){
    // ...
  }
  toString(){
    // ...
  }
  toValue(){
    // ...
  }
}
// 等同于
Point.prototype = {
  toString(){},
  toValue(){}
};

```
- ####  constructor方法
```js
constructor() {}
```

constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。

一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

constructor方法默认返回实例对象（this），this的指向和之前一样，谁调用指向谁。
- #### 不存在变量提升
这一点跟之前ES5的function不一样
```js
new Foo(); // ReferenceError
class Foo {}
//先执行后定义是错误的
```
## 2.继承
- ### extends

```js
 class [name] extends [fathername]{}

```
class内只能一个一个写方法，方法与方法之间什么都不加，不可以有逗号。
- ### super
```js
class [name] extends [fathername]{
 constructor(){
   super()
 }
}
```

子类必须在**constructor**方法中调用super方法.

这是因为子类没有自己的this对象，而是继承父类的this对象，如果不调用super方法，子类就得不到this对象。

ES6的继承机制不同于ES5，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this
```js
//demo1
class Point{
  constructor(father){
    this.father=father;
  }
  toString(){
    console.log('2222');
  }
}

class Point2 extends Point{
  constructor(x,y,father){
    super(father)//继承时子类必须要加
    //写父级的参数呼叫
    this.x=x;
    this.y=y;
    console.log(433);
  }
}
var m=new Point2(5,8,567)
console.log(m);
```
```js
//demo2
class Father{
  _render(){
    throw new Error('子类必须实现')
  }
  render(){
    return(`
      <ul>
        ${this._render()}
      </ul>
    `)
  }
}
class Son extends Father{
  _render(){
    return (`
      <li>jaya</li>
    `)
  }
}
var son=new Son();
console.log(son.render());
```
