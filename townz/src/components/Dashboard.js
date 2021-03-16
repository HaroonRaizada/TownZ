import React,{Component} from "react";

import {withStyles} from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import ViewListIcon from "@material-ui/icons/ViewList";
import CardDetails   from "./CardDetails";


const useStyles=theme=>({
	root:{
		flexGrow:1
		
	},
	card:{
		minWidth:100
		
	},
	title:{
		fontSize:14
		
	},
	pos:{
		marginBottom:12
		
	},
	buttonRoot:{
		display:"flex",
		alignItems:"center"
		
	}
	
	
})

class Dashboard extends Component{
	
	constructor(props){
		super(props);
		this.state={permission:this.props.permission}
		
	}
	render(){
		
		const {classes}=this.props;
		const {permission}=this.state;
		
		return (
		<div className={classes.root}>
		<Grid container justify="flex-start" spacing={3}>
		<Grid item xs={3}>
		<CardDetails menu ="Town Details" title="Town Details" onclick={()=>{window.location.href="#/"}}/>
		</Grid>
		</Grid>
		</div>
		)
		
	}
	
}
export default withStyles(useStyles)(Dashboard);