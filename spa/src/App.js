import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link,Redirect,Switch,NavLink} from 'react-router-dom'
import Home from './component/home.js'
import About from './component/about.js'
import Work from './component/work.js'
import Test from './component/Test.js'

let New=()=> <h1>我是新的页面，old改版</h1>
let Notfound=()=> <h1>我是404页面<Link to='/'>返回首页</Link></h1>
class App extends Component {
    constructor(){
        super();
        this.state={
            admin:false,
            title:'点击允许跳到About页面'
        }
    }
    handleState(){
        this.setState({
            admin:!this.state.admin,
            title: this.state.admin ? '点击允许跳到About页面' : '点击不允许跳到About页面'
        })
    }
  render() {
    return (
        <div>
            <button onClick={this.handleState.bind(this)}>{this.state.title}</button>
            <Router>
                <div>
                    <h1>欢迎光临</h1>
                    <NavLink className='seleced' to='/'>首页</NavLink>
                    <NavLink className='seleced' to='/about'>about页</NavLink>
                    <NavLink className='seleced'
                        to='/work/fyfyry'>work页面</NavLink>
                    <NavLink className='seleced' to='/new'>old页面</NavLink>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' render={props=> this.state.admin ? <About {...props}/> : <Redirect to='/'/>}/>
                        <Route path='/work/:ccc' component={Work}/>
                        {/* Redirect */}
                       <Redirect from='/old' to='/new'/>
                       <Route path='/new' component={New}/>
                       <Route component={Notfound}/>
                   </Switch>

                    <p>版权信息</p>
                </div>
            </Router>
            <Test/>
        </div>
    )
  }
}

export default App;
