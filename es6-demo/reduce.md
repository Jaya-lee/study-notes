## 数组的reduce方法

```js
//reduce 四个参数(acc, cur,index,array,)
var arr=[0,1,2,3,4]
console.log(arr.reduce(function(acc, cur){
  return acc+cur;
})
);//10

```
需要注意的是必须有返回值

工作原理：
第一次特殊，将数组的第一位和第二位作为初始的acc,和cur.

eg:第一次的结果为 0 1 1 [0,1,2,3,4] 返回值：1

第二次会将第一次的返回值作为第一个参数acc,第二个参数值为第一次的cur后移一位,
所以结果为 1 2 2 [0,1,2,3,4]  返回值：3

第三次    3 3 3  [0,1,2,3,4] 返回值：6

第四次    6 4 4  [0,1,2,3,4] 返回值：10
这样看来就实现了连加。

**最后这个方法的返回值就是执行到最后一次时的返回值**

此外还可以实现连乘/取最大最小值
```js
//取出最大值
console.log(
  [0,10,2,3,4].reduce(function(acc,cur){
  return acc>cur ? acc : cur
})
)//10
```

## 顺便复习一下数组的另外几个方法

## map
```js
//map 三个参数(item,index,array)
let arr=[1,2,4,5]
let arr1=arr.map(function(item){
  return `<p>${item}</p>`
})
console.log(arr1);
```
渲染数组时，必须要给每项加key值，作为唯一的标识，且key值必须要连续。
map
## filter
```js
//filter 三个参数(item,index,array)
let arr3=[12,45,3,4,67]
let arr4=arr3.filter(function(item){
  return item>10
})
console.log(arr4);
```
- ### filter---> findIndex

      filter过滤 返回符合条件的数组/对象

      findIndex 返回符合条件的数组/对象的索引
- ### forEach  for in  for of
- ### keys
```js
//数组
var arr = ["a", "b", "c"];
console.log(Object.keys(arr));
// ["0","1","2"]
//对象
var obj = { 0 : "a", 1 : "b", 2 : "c"};
console.log(Object.keys(obj));
// ["0","1","2"]
```
.keys()返回的是一个数组，这样理解数组中的key值就是它的索引值，对象中的key值为属性名。

## includes

判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。
```js
var a = [1, 2, 3];
a.includes(2); // true
a.includes(4); // false
```
fromIndex 大于等于数组长度
```js
 如果fromIndex 大于等于数组长度 ，则返回 false 。该数组不会被搜索。
var arr = ['a', 'b', 'c'];
arr.includes('c', 2);   //true
arr.includes('c', 100); // false
```
arr.filter(items=>过滤条件[返回布尔值])
这两个常用做三目运算
