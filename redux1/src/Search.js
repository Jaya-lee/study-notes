import React, { Component } from 'react'

class CommentBox extends Component {
    constructor(){
        super();
        // this.state={
        //     input:'',
        //     comment:[]
        // }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInput=this.handleInput.bind(this)
    }
    state={
        input:'',
        comment:[]
    }

    handleInput(e){
        this.setState({
            input:e.target.value
        })

    }

    handleSubmit(e){
        e.preventDefault()
        e.target.reset()
        if(this.state.input.trim()){
            this.setState({
                comment:[...this.state.comment,this.state.input]
            })

            this.setState({
                input:''
            })

            return this.props.num(this.state.comment.length+1)
        }

    }

  render() {


    return (
      <div className='comment-box'>
          <div className='search'>
              <ul>
                 {this.state.comment.map((item,index) =>
                 <li className='comment' key={Math.random()}
                >{item}</li>
             )}
              </ul>
              <form className='comment-form' onSubmit={this.handleSubmit}>
                  <input onChange={this.handleInput}
                      value={this.state.input}
                      className='input'></input>
                  <button className='submit-btn'>提交</button>
              </form>
              <div className='underline'></div>
          </div>
      </div>
    )
  }
}

export default CommentBox
