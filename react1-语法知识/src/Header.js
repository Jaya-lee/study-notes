import React from 'react'
import bg1 from './1.jpg'
class Header extends React.Component{
  getStyle(){
    return {
      color:'red',
     fontSize:'20px'
    }
  }
  render(){
    // let styles={
    //   color:'red',
    //   fontSize:'20px'
    // }
    return(
      <div>
        <h2>我的下面是从Hello里拿的</h2>
        {/* <h4 style={styles}>我要改变样式了</h4> */}
        <h4 style={this.getStyle()}>我要改变样式了</h4>
        {/* this指的是创建的组件Header */}
        <img src='bg1' alt='aaa' />
      </div>
    )
  }
}
export default Header;
