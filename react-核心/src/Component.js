import React from 'react'
import Com from './Com'
class Component extends React.Component{
    constructor(){
        super();
        this.state={
            num:0
        }
    }
    render(){
        return(
            <div>
                {this.state.num}
                <br/>
                <button onClick={()=>this.setState({num:this.state.num+1})}>+1</button>
                <br/>
                <button onClick={()=>console.log(this.state)}>show state</button>
                <Com num={this.state.num}/>
            </div>
        )
    }
}
export default Component;
