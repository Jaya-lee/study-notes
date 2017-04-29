
//package.json里显示已经装包好，所以拿进来直接用

// let age=20;
// let mes='HEllo'
// let hello =<div>
// <label htmlFor='name'>姓名{mes.toLowerCase()}</label>
// <input placeholder='de' id='name'/>
// <p className='pe'>fgr{age+100}</p>
// </div>
// ReactDom.render(hello,document.getElementById('root'))

//第一种
// let Hello = React.createClass({
//   render:function(){
//     return (
//       <div>
//         <h1>第一种创建组件方式，即将废弃</h1>
//       </div>
//     )
//   }
// })

//第二种
// function Hello(){
//   let x='必须有返回值，'
//   return (
//   <div>
//     <h1>第二种创建组件方式，必须有返回值，而且返回值必须是JSX elements</h1>
//     <h1>第二种创建组件方式，{x}而且返回值必须是JSX elements</h1>
//   </div>
//   )
// }
// ReactDom.render(<Hello/>,document.querySelector('#root'))

//组件之间是可以相互嵌套的
// function Word(){
//   return(
//   <div>
//     <p>我的下面是从Hello里拿的</p>
//     <Hello></Hello>
//   </div>
//   )
// }


//第三种
// class Hello extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>第三种创建方法</h1>
//       </div>
//     )
//   }
// }
// ReactDom.render(<Hello/>,document.querySelector('#root'))
import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js'
// import './main.css'
ReactDom.render(<App />,document.querySelector('#root'))
