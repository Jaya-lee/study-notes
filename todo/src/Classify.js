import React from 'react'
class Classify extends React.Component{
    render(){
        let btns=['ALL','ACTIVE','COMPLETED']
        return(
            <div className='text-center' style={{marginTop:'50px'}}>
                分类：
                {
                    btns.map((item,index) =>
                        <button key={index} style={{marginRight:'10px'}}
                            onClick={()=>this.props.choose(item)}
                            className={`btn ${this.props.color===item ?
                            'btn-primary' : 'btn-default' }`}>
                            {item}
                        </button>
                    )
                }
            </div>
        )
    }
}
export default Classify;
