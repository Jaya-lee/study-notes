import React from 'react'
class Footer extends React.Component{

  render(){
    let styles={
      common:{
        color:'purple',
        fontSize:'28px'
      },
      spec:{
        textAlign:'center',
        color:'blue'
      }
    }
    return(
      <div>
        <h3 style={styles.common}>这是footer里的东西</h3>
        <h3 style={styles.common}>这是footer里的东西</h3>
        <h3 style={Object.assign({},styles.common,styles.spec)}>
          这是footer里的东西</h3>
      </div>
    )
  }
}
export default Footer;
