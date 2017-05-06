import React from 'react'
import { Route, Link} from 'react-router-dom'

const Xiaomei = () => <h1>小美</h1>
const Xiaohua = () => <h1>小花</h1>
class About extends React.Component{
    render(){
        console.log(this.props);//.match.url
        return(
            <div>
                <h1>我是about页面</h1>
                <br/>
                {/* `${this.props.match.url}`==/about */}
                <Link to={`${this.props.match.url}`}>关于小美</Link>
                <Link to={`${this.props.match.url}/xiaohua`}>关于小花</Link>

                <Route exact path={`${this.props.match.url}`}
                    component={Xiaomei}/>
                    {/* 一打开about就是小美页 */}
                <Route path={`${this.props.match.url}/xiaohua`}
                component={Xiaohua}/>
            </div>
        )
    }
}
export default About;
