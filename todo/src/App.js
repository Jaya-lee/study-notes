import React, { Component } from 'react';
import TodoList from './todolist.js'
import Classify from './Classify.js'

class App extends Component {
    constructor(){
        super();
        this.state={
            data:[
                // 存到todos，一开始放在本地
                // {text:'第一条li 已读',completed:true,id:13445},
                // {text:'第二条li 未读',completed:false,id:2555}
                {text:'第一条li 已读',completed:true,id:13445},
                {text:'第二条li 未读',completed:false,id:2555}
            ],
            input:'',
            choose:'ALL'
        }
    }
     componentWillMount(){ //本地存储历史记录
    //     if(localStorage.todos){
    //         this.setState({data:JSON.parse(localStorage.todos)})
    //     }else{
    //         this.setState({data:JSON.stringify([])})
    //     }
        if(!localStorage.todos){
            localStorage.todos=JSON.stringify(this.state.data)
        }
        this.setState({data:JSON.parse(localStorage.todos)})
     }
    handleSubmit(e){
        e.preventDefault();
        let value=this.state.input.trim()
        if(value){
            this.setState({
                data:[...this.state.data,{text:value,completed:false,id:Date.now()}]
            })
            localStorage.todos=JSON.stringify([...this.state.data,{text:value,completed:false,id:Date.now()}]) //setState异步操作
        }else{
            alert('输入的内容不能为空！')
        }
        this.setState({input:''}) //输入后清空
        this.input.focus()
    }
    handleComplted(id){
        let index=this.state.data.findIndex(item => item.id===id)
        // console.log(index);
        let newData=this.state.data
        newData[index].completed=! newData[index].completed
        this.setState({data:newData}) //修改了父级中的completed,同时子级中checkbox也props了父级的completed,完成了判断
        localStorage.todos=JSON.stringify(newData)
    }
    handleRemove(id){
        let index=this.state.data.findIndex(item => item.id===id)
        let r =confirm('是否确认删除')
        if(r){
            let newData=this.state.data
            newData.splice(index,1)
            this.setState({data:newData})
            localStorage.todos=JSON.stringify(newData)
        }
    }
    handleChoose(name){
        this.setState({choose:name})
    }
   render() {
       let showData= this.state.choose==='ALL' ? this.state.data :
           this.state.choose==='ACTIVE' ?
           this.state.data.filter(item => !item.completed) :
           this.state.data.filter(item => item.completed)
        //    如果状态是ALL，data里面为所有数据。
        //    如果状态是ACTIVE，data里面为没有选择过的数据（completed为false）。
        //    这两种都不是的话，data里面为选择过的数据（completed为true）。
    return (
      <div className='container'
          style={{width:`${50}vw`,margin:'0 auto'}}>
         <h1 className='text-center'>ToDo</h1>
         {/* 表单 */}
         <form className='form-inline text-center'
             onSubmit={this.handleSubmit.bind(this)}>
             <input type='text' className='form-control'
             value={this.state.input}
            onChange={e => this.setState({input:e.target.value})}
            ref={input => this.input=input}/>
             <button className='btn btn-info'>
                 {`ADD${this.state.data.length+1}`}
             </button>
             <br/>
         </form>

         {/* TodoList */}
         <TodoList data={showData}
         change={this.handleComplted.bind(this)}
        //  改变completed
         remove={this.handleRemove.bind(this)}/>
         {/* 删除数组 */}

         <Classify choose={this.handleChoose.bind(this)}
         color={this.state.choose}/>
     </div>
    )
  }
}

export default App;
