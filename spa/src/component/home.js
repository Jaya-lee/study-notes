import React from 'react'
class Home extends React.Component{
    componentDidMount(){
        // alert('3s后会跳到new页面')
        // setTimeout(()=>{
        //     this.props.history.push('/new')
        // },3000)
        
    }
    render(){
        return(
            <div>
                <h1>我是home页面</h1>
            </div>
        )
    }
}
export default Home;
