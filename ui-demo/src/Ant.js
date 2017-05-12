import React from 'react'

import Rate from 'antd/lib/rate';  // 加载 JS
import 'antd/lib/rate/style/css';        // 加载 CSS

import Icon from 'antd/lib/icon'
import 'antd/lib/icon/style/css';        // 加载 CSS

import BackTop from 'antd/lib/back-top';
import 'antd/lib/back-top/style/css';

import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class Ant extends React.Component{
    render(){
        return(
            <div style={{height:'2000px'}}>
                <Rate allowHalf defaultValue={2.5}
                count={4}/>
                <h1>icon</h1>
                <Icon type="right-circle-o" />
                <Icon type="meh" />
                <Icon type="share-alt" />
                <Icon type="poweroff" />
                <BackTop/>
            </div>
        )
    }
}

export default Form.create()(Ant);
