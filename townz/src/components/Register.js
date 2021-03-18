import React, { Component, Fragment  } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      isSuccess:false,
      last_name:'',
      email:'',
      password:'',
      authorization:localStorage.getItem("authorization")!=undefined?localStorage.getItem("authorization"):""
    }
  }
   handleClick=(e)=>{
	   let body={
"username":this.state.first_name,
"email":this.state.email,
"password":this.state.password,
"roles":
	[]
		   
	   }
	  fetch("/users/signup", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify(body)

  //make sure to serialize your JSON body
  
})
.then( (response) => { 

   this.setState({authorization:response.json().token,isSuccess:true});
   localStorage.setItem("authorization",response.json().token);
});
 }
  render() 
  {
    const options = {
      message: 'Registered',
      style: {
        backgroundColor: 'cornflowerblue',
        borderRadius: 0,
      },
      offset: '50px',
      position: 'top right',
      duration: 0,
    }


    return (
      <div>
      {this.state.isSuccess?(<Alert severity="success">Registered Succesfully.</Alert>):null}
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             disabled={this.state.isSuccess}
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             disabled={this.state.isSuccess}
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             disabled={this.state.isSuccess}
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             disabled={this.state.isSuccess}
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton  disabled={this.state.isSuccess} label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;