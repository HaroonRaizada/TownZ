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

const Dashboard =(props)=>{
	
	

		
		const classes=props.classes;
	
		
		return (
		<div className={classes.root}>
		<Grid container justify="flex-start" spacing={3}>
		<Grid item xs={3}>
		<CardDetails menu ="Category1" title="Category1" onclick={()=>{window.location.href="#/"}}/>
		</Grid>
		<Grid item xs={3}>
		<CardDetails menu ="Category2" title="Category2" onclick={()=>{window.location.href="#/"}}/>
		</Grid>
		<Grid item xs={3}>
		<CardDetails menu ="Category3" title="Category3" onclick={()=>{window.location.href="#/"}}/>
		</Grid>
		</Grid>
		</div>
		)
		
	}
	

export default withStyles(useStyles)(Dashboard);