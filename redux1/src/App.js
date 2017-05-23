import React, { Component } from 'react'

import PostBody from './Hello'
import CommentBox from './Search'
import {Provider }from 'react-redux'
import store from './redux/store'

class App extends Component {
    constructor(){
        super();
        this.state={
            all:''
        }
        // this.handleNum=this.handleNum.bind(this)

    }
    // handleNum(i){
    //     this.setState({
    //         all:i
    //     })
    // }

  render() {
    return (
        <Provider store={store}>
          <div>
            <div className='top clearfix'>
                {/* <PostBody comment={this.state.all}/> */}
                <PostBody/>
            </div>
            <div className='bottom clearfix'>
                {/* <CommentBox num={this.handleNum}/> */}
                <CommentBox/>
            </div>
          </div>
      </Provider>
    )
  }
}

export default App
