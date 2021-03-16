import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';


import './App.css';
import Loginscreen from './components/Loginscreen';
import Dashboard from './components/Dashboard';
import PersonalRoute from './components/PersonalRoute';
import {Switch,HashRouter,Route,Router} from "react-router-dom";
class App extends Component {
  constructor(props){
    super(props);
	
    this.state={
      loginPage:[],
      uploadScreen:[],
	  loggedIn:localStorage.getItem("loggedIn")!=undefined?localStorage.getItem("loggedIn"):false
    }
  }
  componentWillMount(){
    var loginPage =[];
   
  }
  loginSet=(authorization,loggedIn,userName,permission,email)=>{
	  console.log("asms",loggedIn);
	  this.setState({
		  authorization:authorization,
		  userName:userName,
		  email:email,
		  loggedIn:true
		  
		  
	  })
	  localStorage.setItem("authorization",authorization);
	  localStorage.setItem("userName",userName);
	  localStorage.setItem("loggedIn",true);
	  localStorage.setItem("email",email);
	  
	  
  }
  
  logout=()=>{
	   this.setState({
		  authorization:"",
		  userName:"",
		  email:"",
		  loggedIn:false
		  
		  
	  })
	  localStorage.setItem("authorization","");
	  localStorage.setItem("userName","");
	  localStorage.setItem("loggedIn",false);
	  localStorage.setItem("email","");
	  
	  
  }
  render() {
	  
    return (
      <div className="App">
	  <HashRouter>
	  <Switch>
	  <Route
	  path="/login"
	  render={props=>(
	  <Loginscreen loginSet={this.loginSet} loggedIn={this.state.loggedIn} parentContext={this}/>
	  )}
	  />
       <PersonalRoute path="/"
	   component={Dashboard}
	   logout={this.logout}
	   loggedIn={this.state.loggedIn}
	   userName={this.state.userName}
	   authorization={this.state.authorization}
	   />
        {this.state.uploadScreen}
		 </Switch>
		  </HashRouter>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;