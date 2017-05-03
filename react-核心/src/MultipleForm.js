import React from 'react'
class MultipleForm extends React.Component{
    constructor(){
        super();
        this.state={
            input:'',
            textarea:'',
            select:'lime',
            sex:'女',
            checkbox:true
        }
    }
    handleSubmit(e){
        e.preventDefault()
        let obj={
            input:this.state.input,
            textarea:this.state.textarea,
            select:this.state.select,
            sex:this.state.sex,
            checkbox:this.state.checkbox
        }
        console.log(obj);
    }
    handleChange(e){
            let target=e.target
            console.log(target.name)
            let value= target.name==='checkbox' ? target.checked : target.value
            this.setState({
            [target.name]:value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h5>文本框</h5>
                    <input placeholder='name' value={this.state.input}
                    onChange={this.handleChange.bind(this)}
                    name='input'/>
                    <h5>文本域</h5>
                    <textarea value={this.state.textarea}
                    onChange={this.handleChange.bind(this)}
                    name='textarea'/>
                    <h5>下拉列表</h5>
                    <select value={this.state.select}
                        onChange={this.handleChange.bind(this)} name='select'>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <h5>单选</h5>
                    <input type='radio' value='男' name='sex'
                        onChange={this.handleChange.bind(this)}
                    />男
                    <input type='radio' value='女' name='sex'
                        onChange={this.handleChange.bind(this)}
                        checked={this.state.sex==='女'}/>女
                    <h5>复选框</h5>
                    <input type='checkbox' name='checkbox'
                        checked={this.state.checkbox}
                        onChange={this.handleChange.bind(this)}/>同意
                    <br/>
                    <br/>
                    <button>提交</button>
                </form>
            </div>
        )
    }
}
export default MultipleForm;

//这里主要运用了一个对象赋值 属性名+属性值都为变量的情况：
// let name='aa'
// let obj={[name]:10}
// console.log(obj); //aa:10
// obj['bb']=20 // aa:10,bb:20
// obj['cc']=30 //aa:10,bb:20,cc:30
