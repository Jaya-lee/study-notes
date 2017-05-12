import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import DatePicker from 'material-ui/DatePicker';
import  Alarm from 'material-ui/svg-icons/action/alarm'
// 主题更改
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
class App extends React.Component{
    render(){
        return(
            <div>
                <MuiThemeProvider  >
                    <div>
                        <h1>按钮</h1>
                        <RaisedButton label="Default" />
                        <h1>日历</h1>
                        <DatePicker
                          hintText="Controlled Date Input"
                          value={new Date()}
                          onChange={(e,value)=>console.log(value)}
                          okLabel={'666OK'} cancelLabel={'nonono'}
                        />
                        <h1>图标</h1>
                        <Alarm style={{width:'50px',height:'50px'}}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default App;
