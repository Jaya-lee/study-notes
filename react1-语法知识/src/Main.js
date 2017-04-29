import React from 'react'

import bg from './1.jpg'
import {colorStyle,font,colorTwo} from './theme.js'
class Main extends React.Component{
  render(){
    return (
      <div>
        <h2 style={{color:colorStyle,background:`url(${bg})`,height:'300px'}}>我是从main里的</h2>
      </div>
    )
  }
}
export default Main;
