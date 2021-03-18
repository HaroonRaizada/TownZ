import React,{Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ViewListIcon from '@material-ui/icons/ViewList';



const useStyles=makeStyles(({breakpoints,spacing})=>({
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
	
	
}));

const GetIcon=props=>{
	if (props.menu=="Town Details"){
		
		return (<ViewListIcon color="primary"/>);
	}else{
		return (<ViewListIcon color="primary"/>);

	}
	
}

class CardDetails extends Component {
	
	constructor(props){
		super(props);
		
	}
render(){return (
<Card >
<CardContent>
<Typography>{this.props.title}</Typography>
<Button id={this.props.menu} onclick={this.props.onclick}>
<GetIcon menu={this.props.menu}/>
</Button>
</CardContent>
</Card>	
	);
	
};
}
export default CardDetails;