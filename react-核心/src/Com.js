import React from 'react'
class Com extends React.Component{
    constructor(){
        super();
        console.log('Com constructor');
    }
    componentWillMount(){
        console.log('Com will');
    }
    componentDidMount(){
        console.log('Com did');
    }
    componentWillReceiveProps(){ //props改变则触发
        console.log('Com props');
    }
    render(){
        return(
            <div>
                Com下的{this.props.num}
            </div>
        )
    }
}
export default Com;
