import React, { Component } from 'react'

import PostBody from './Hello'
import CommentBox from './Search'
class App extends Component {
    constructor(){
        super();
        this.state={
            all:''
        }
        this.handleNum=this.handleNum.bind(this)

    }
    handleNum(i){
        this.setState({
            all:i
        })
    }

  render() {
    return (
      <div>
        <div className='top clearfix'>
            <PostBody comment={this.state.all}/>
        </div>
        <div className='bottom clearfix'>
            <CommentBox num={this.handleNum}/>
        </div>
      </div>
    )
  }
}

export default App
