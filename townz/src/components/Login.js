import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  loggedIn:props.loggedIn
  }
 }
 handleClick=(e)=>{
	 fetch("/users/signin?username="+this.state.username+"&password="+this.state.password, {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  //make sure to serialize your JSON body
  
})
.then( (response) => { 

console.log(this.props)
localStorage.setItem("loggedIn",true);
this.props.parentContext.props.loginSet("abc123",true,"haroon789","","abcv.com");
   //do something awesome that makes the world a better place
});
 }
render() {
	console.log(this.props.parentContext.props.loggedIn)
	if(this.props.parentContext.props.loggedIn){
		
		return <Redirect to="/Dashboard"/>
	}else{
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
	}
  }
}
const style = {
 margin: 15,
};
export default Login;