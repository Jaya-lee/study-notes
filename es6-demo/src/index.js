//let
// if(!a in window){
//   var a='aaa';
// }
// console.log(a);

// for (let i=0;i<3;i++){
//   console.log('out',i);
//   for(let i=0;i<2;i++){
//     console.log('in',i);
//   }
// }

// {
//   let b=3;
// }
// let b=5;
// console.log(b);

// if(true){
//   let a = 1;
//   let a = 2;
// }

// console.log(j)
// let j=10;

//const
// const a={
//   name:'a'
// }
// a.name='b'
// console.log(a);
//解构
// let [a,b,,,c]=[5,6,7,8]
// console.log([a,b,c]);
//[5,6,undefined]
//空格会占一位，匹配不到时为undefined

// var [name,age] = ['zfpx',8];
// console.log(name,age)
// let obj={bar:'bbb',foo:'aaa'}
// let {foo,bar,sdf}=obj;
// console.log(foo,bar,sdf);


// const [a, b, c, d, e] = 'hello';
// console.log(a+b);

// let name='jaya';
// let age=20;
// let say=function(){
//   console.log('今天天气很好');
// }
//  let obj={
//    name,
//    age,
//    say,
//    run(){
//      console.log('run');
//    }
//  }
//  console.log(obj);


// let a=(num,num1)=>num*num1;//参数为一个可以省略，多个不可以省略
// console.log(a(3,5));
//
// let b=(num,num1)=>{
//   num=num++;
//   num1=num1++;
//   return num+num1
// }
// console.log(b(3,5));
// let c=(num,num1)=>({name:'aaa'})
// console.log(c(3,5));
//
// var obj={
//   say:()=>{console.log(this);}
// }
// obj.say()
//
// var name='jaya';
// var age='20';
// var str=`<p class='active'>姓名是 ${name} 年龄是 ${age}</p>`
// document.body.innerHTML=str
// console.log(str);
// function sum(num=5){
//   return num++
// }
// console.log(sum());
// function sun({name}){
//   console.log(name);
// }
// sun({name:'jaya',age:'20'});

// function restFunc(a, ...rest) {
//   console.log(a)
//   console.log(rest)
// }
// restFunc(1);
// restFunc(1, 2, 3, 4);
// var arr=[1,2,3]
// var arr1=[...arr,4,5]
// console.log(arr);
// console.log(arr1);
// let obj={a:{b:1}}
// let {...x}=obj;
// console.log(x);
// import { name as ne} from './test.js';
// console.log(ne) //as 作为了新的ne来用，之前的name已经没有了
// import newobj from './test.js'
// console.log(newobj);
// //map 三个参数(item,index,array)
// let arr=[1,2,4,5]
// let arr1=arr.map(function(item){
//   return `<p>${item}</p>`
// })
// console.log(arr1);
// //filter 三个参数(item,index,array)
// let arr3=[12,45,3,4,67]
// let arr4=arr3.filter(function(item){
//   return item>10
// })
// console.log(arr4);
// var arr = ["a", "b", "c"];
// console.log(Object.keys(arr));
// // "0,1,2"
//
// /* 类数组对象 */
// var obj = { 0 : "a", 1 : "b", 2 : "c"};
// console.log(Object.keys(obj));
// "0,1,2"
// class Point{
//   constructor(father){
//     this.father=father;
//   }
//   toString(){
//     console.log('2222');
//   }//相当于原型
// }
// // var p=new Point(5,8)
// // console.log(p);
// class Point2 extends Point{
//   constructor(x,y,father){
//     super(father)//继承时子类必须要加
//     //写父级的参数呼叫
//     this.x=x;
//     this.y=y;
//     console.log(433);
//   }
// }
// var m=new Point2(5,8,567)
// console.log(m);
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
