import React from "react";
import {Redirect,Route} from "react-router-dom";

const PersonalRoute=({
	component:Component,
	logout,
	loggedIn,
	userName,
	authorization,
	lastactiveTime,
	permission,
	...rest
	
	
}




)=>{
	console.log("inside log",loggedIn);
	return (<Route {...rest} render={props=>
	loggedIn?(<Component loggedIn={loggedIn} userName={userName} authorization={authorization} {...props}/>):
	
	
	(<Redirect to={{pathname:"/login",
	
	state:{from :props.location,loggedIn:false}
	}}/>
	
	)}
	
	
	/>
	);
	
};

export default PersonalRoute;
