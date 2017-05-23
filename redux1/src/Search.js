import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from './redux/store'
class CommentBox extends Component {
    constructor(){
        super();

        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInput=this.handleInput.bind(this)
    }
    state={
        input:''
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
            //发出action
            store.dispatch({type:'ADD_COMMENT',comment:this.state.input})

            this.setState({
                input:''
            })

            // return this.props.num(this.state.comment.length+1)
        }

    }
  render() {
    return (
      <div className='comment-box'>
          <div className='search'>
              <ul>
                 {this.props.comment.map((item,index) =>
                 <li className='comment' key={Math.random()}
                >{item}</li>
            )}
              </ul>
              {/* <li className='comment' key={Math.random()}>{comments}</li> */}

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
const mapStateToProps=(state)=>({
    comment:state
})
export default connect(mapStateToProps)(CommentBox)
