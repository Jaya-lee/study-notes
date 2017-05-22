import React, { Component } from 'react'

class PostBody extends Component {
  render() {

    console.log();
    return (
      <div className='post-body'>
          <span className='title'>Hello Redux</span>
          <div>
              <div className='num likes-num'>喜欢</div>
              <div className='num comment-num'>评论{this.props.comment}</div>
          </div>
      </div>
    )
  }
}

export default PostBody
