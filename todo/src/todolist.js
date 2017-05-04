import React from 'react'
class TodoList extends React.Component{
    // handleChecked(i){
    //     this.props.change(i); //把index传给了父级
    // } //可以直接用箭头函数写
    render(){
        return(
            <ul style={{listStyle:'none',padding:0,marginTop:'50px'}}>
                {
                    this.props.data.map(item =>
                        <li key={item.id}>
                            <input type='checkbox'
                                className='pull-left'
                                checked={item.completed}
                                //onChange={this.handleChecked.bind(this,item.id)}
                                onChange={()=> this.props.change(item.id)}
                            />
                                {/* 这里是handleChecked接收到的Index */}
                            <span style={{textDecoration:item.completed ? 'line-through' : 'none'}}>
                                {item.text}</span>
                            <span className='glyphicon glyphicon-remove-circle
                                pull-right'
                                onClick={()=>this.props.remove(item.id)}></span>
                        </li>
                    )
                }

            </ul>
        )
    }
}
export default TodoList;
