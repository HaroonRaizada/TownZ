import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
import {Redirect} from "react-router-dom";
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Login',
      isLogin:true
    }
  }
  handleClick=()=>{
	   var loginmessage;
    if(!this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
      loginmessage = "Registered  User?Sign In";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Sign In",
                     isLogin:true
                   })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login loginSet={this.props.loginSet} loggedIn={this.props.loggedIn} parentContext={this}/>);
      loginmessage = "New User?Sign Up";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Sign Up",
                     isLogin:false
                   })
    }
	  
	  
  }
  
  render() {
	  console.log("loginscreen",this.props.loggedIn)
	  if(this.props.loggedIn){
		
		return (<Redirect to="/"/>)
	}else{
    return (
      <div className="loginscreen">
	  {this.state.isLogin?(<Register parentContext={this}/>):( <Login loginSet={this.props.loginSet} loggedIn={this.props.loggedIn} />)}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
	}
  }
}
const style = {
  margin: 15,
};
export default Loginscreen;