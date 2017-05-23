import React, { Component } from 'react'
import {connect} from 'react-redux'

class PostBody extends Component {

render() {
console.log(this.props);
    return (
      <div className='post-body'>
          <span className='title'>Hello Redux</span>
          <div>
              <div className='num likes-num'>喜欢</div>
              {/* <div className='num comment-num'>评论{this.props.comment}</div> */}
              <div className='num comment-num'>评论{this.props.comment.length}</div>
          </div>
      </div>
    )
  }
}
//将store的值映射为一个props
const mapStateToProps =(state) =>({ //此时state里面是状态树store 必须返回一个对象
    comment:state
})
export default connect(mapStateToProps)(PostBody)
