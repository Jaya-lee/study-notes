import React from 'react'
import PropTypes from 'prop-types'
class Btn extends React.Component{
    render(){
        console.log(this.props);
        let styles={
            padding:`${this.props.pad}px`,
            background:`${this.props.bg}`,
            color:'teal'
        }
        return(
            <div>
                <button style={styles}>
                    {this.props.title}
                </button>

            </div>
        )
    }

}
Btn.defaultProps={
    title:'默认标题',
    bg:'pink',
    pad:10
}
Btn.propTypes={
    title:PropTypes.string,
    pad:PropTypes.number
}
export default Btn;
