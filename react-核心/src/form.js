import React from 'react'
class Form extends React.Component{
    constructor(){
        super();
        this.state={
            input:'',
            textarea:'',
            select:'lime',
            radio:'女',
            checkbox:true
        }
    }
    handleSubmit(e){
        e.preventDefault()
        e.target.reset() //清空
    }
    handleInput(e){
            console.log(e.target.value)
        this.setState({
            input:e.target.value
        })
    }
    handleText(e){
        console.log(e.target.value)
        this.setState({
            textarea:e.target.value
        })
    }
    handleSelect(e){
        console.log(e.target.value)
        this.setState({
            select:e.target.value
        })
    }
    handleRadio(e){
        console.log(e.target.value)
        this.setState({
            radio:e.target.value
        })
    }
    handleCheckbox(e){
        console.log(e.target.checked)
        this.setState({
            checkbox:e.target.checked
        })
    }
    render(){
        console.log();
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h5>受控</h5>
                    <input placeholder='name' value={this.state.input}
                    onChange={this.handleInput.bind(this)}/>

                    <h5>非受控</h5>
                    <input placeholder='name' defaultValue='jaya'/>

                    <h5>受控</h5>
                    <textarea value={this.state.textarea}
                    onChange={this.handleText.bind(this)}/>

                    <h5>非受控</h5>
                    <textarea defaultValue='说点什么'/>

                    <h5>受控</h5>
                    <select value={this.state.select}
                        onChange={this.handleSelect.bind(this)}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>

                    <h5>非受控</h5>
                    <select defaultValue='mango'>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <br/>
                    <br/>
                    <button>提交</button>

                    <h5>非受控[推荐]</h5>
                    <input type='radio' value='男' name='sex'/>男
                    <input type='radio' value='女' name='sex' defaultChecked />女

                    <h5>受控[复杂]</h5>
                    <input type='radio' value='男' name='sex1'
                        onChange={this.handleRadio.bind(this)}
                    />男
                    <input type='radio' value='女' name='sex1'
                      onChange={this.handleRadio.bind(this)}
                        checked={this.state.radio==='女'}/>女

                    <h5>多选</h5>
                    <input type='checkbox'
                        checked={this.state.checkbox}
                        onChange={this.handleCheckbox.bind(this)}/>同意
                </form>
            </div>
        )
    }
}
export default Form;
