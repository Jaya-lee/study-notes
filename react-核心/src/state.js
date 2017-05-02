import React from 'react'
 class State extends React.Component{
   constructor(){ //写在这里是因为constructor一开始就执行
     super();//继承必须加super
     this.state= {
       num : 0,
       tab :0,
       show:true
     }
   }
  //  加一
   handleClick(j){
     this.setState({ //setState()方法可以修改定义了的state. state为异步
       num:this.state.num +1
     })
    console.log(j);
   }
   //减一
   againClick(j){
     this.setState({
       num:this.state.num -1
     })
     console.log(j);
   }
   //选项卡切换
   handleTab(i){
     this.setState({
       tab:i,
       show:!this.state.show
     })
   }

   render(){
     let styles ={
       width:'100px',
       height:this.state.show ? '100px' : '0' ,
       background:'teal',
       transition:'height .7s'
      //  display:this.state.show ? 'block' : 'none'
     }
     return(
       <div>
         <p>数量为:{this.state.num}</p>
         {/* <button onClick={this.handleClick}>+1</button>  this指向window*/}
         <button onClick={this.handleClick.bind(this,1)}>+1</button>
         <button onClick={this.againClick.bind(this,-1)}>-1</button>
         {/* 绑定this,this指向App */}
         {/* bind(this,实参) 传参  */}
         <br/>
         <br/>
         {/* 选项卡 */}
         <button onClick={this.handleTab.bind(this,0)}>选项卡一</button>
         <button onClick={this.handleTab.bind(this,1)}>选项卡二</button>
         <button onClick={this.handleTab.bind(this,2)}>选项卡三</button>
         <br/>
         <br/>
         {/* 新的思想，是谁就写入对应的组件 */}
        {
          this.state.tab===0 ? '我是选项卡一' :
          this.state.tab===1 ? '我是选项卡二' : '我是选项卡三'
        }
        {/* 以前的思想，点谁谁出现 */}
        <div style={styles}></div>
       </div>
     )
   }
 }

 export default State;
