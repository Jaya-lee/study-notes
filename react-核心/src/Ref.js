import React from 'react'
class Ref extends React.Component{
    constructor(){
        super(),
        this.state={
            addInput:[],
            node: <input placeholder='haha'/>
        }
    }
    handleClick(){
        let p =document.getElementById('test')
        console.dir(p) // p#test  console.dir()可以显示一个对象所有的属性和方法。
        console.log(this.refs.test)//<p>aaa</p> 被淘汰 只能拿固定的字符串,不能变量

        // this.input.focus()  //获取了input的焦点
        // console.log(typeof this.input);

        this.setState({addInput:[...this.state.addInput,this.state.node]})
        //添加了Input

    }
    render(){
        let inpArr=this.state.addInput
        console.log(inpArr);
        return(
            <div>
                <p id="test">真实dom节点</p>
                <p ref='test'>ref字符串</p>
                <p ref={(test) => this.test=test}>aaa</p>
                {/* (test)是参数,      this指向组件Ref 又拿到了自己本身 */}
                <input placeholder='haha'/>

                <button onClick={this.handleClick.bind(this)}>click</button>
                {inpArr}
            </div>
        )
    }
}
export default Ref;
