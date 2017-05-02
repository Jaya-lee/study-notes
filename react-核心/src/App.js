import React from 'react'

import State from './state'
import Ref from './Ref'
import Btn from './Btn'

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>state部分--------------</h1>
                <State></State>
                <h1>ref部分--------------</h1>
                <Ref></Ref>
                <h1>props部分--------------</h1>
                <div>
                    <Btn title='注册' pad={13} bg='black'/>
                    {/* 变量为数字用{}，字符串`${}` */}
                    <Btn title='登录'/>
                    <Btn title='忘记'/>
                </div>
            </div>
        )
    }
}
export default App;
