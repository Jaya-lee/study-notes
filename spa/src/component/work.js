import React from 'react'

const Work =(props)=>{
    return(
        <div>
            <h1>我是work页面下的</h1>
            {props.match.params.ccc}
        </div>
    )
}
export default Work;
