import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Input, {InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid'
import { connect } from 'react-redux'
import createHistory from "history/createBrowserHistory"
import { withStyles } from 'material-ui/styles'
const history = createHistory()


//function rand() {
//  return Math.floor(Math.random() * 20) - 10;
//}

function getModalStyle() {
    //  const top = 50 + rand();
    //  const left = 50 + rand();
    const top = 50
    const left = 50
    return {
		position: 'absolute',
		width: 200,
		height:175,
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
		boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
		padding: 8 * 4,
        backgroundImage: 'url(/register/board.png)',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',	
    };
}

const styles = {
	_underline:{
		backgroundColor:'#fff'
	}
}
const getCode = async(verify, candies)=> {
	verify()
}
const getCandies = async()=> {
	history.push('/info')
	history.go()
}
class SimpleModal extends React.Component {
	state = {
		verify: true,
		disabled: false,
		btnColor: '#ffbb42',//dfdfdf
		fontColor: '#db4e43',//ddd
		label: '手机号',//验证码
		click: getCode//get candies
	}
	getCodeCB = async()=> {
		this.setState({
			disabled: true,
			btnColor: '#dfdfdf',
			fontColor:'#999',
		})
	}
    render() {
		const { auth, dispatch } = this.props
		const handleClose = reddit => dispatch({type:"REGISTER",reddit})
		
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={auth.register}
				onClose={()=>handleClose(false)}>
				<div style={getModalStyle()}>
					<Typography type="title" id="modal-title"
								style={{color:'#ffbb42'}}>糖果社区</Typography>
					<Grid style={{display:'flex',flexDirection:'column'}}>
						<FormControl style={{marginTop:25,color:'#ffbb42'}}	>
							<InputLabel htmlFor="_input">{this.state.label}
							</InputLabel>
							<Input style={{color:'#ffbb42'}} id="_input" />
						</FormControl>
						<Button disabled={this.state.disabled}
							style={{
								marginTop:30,color:this.state.fontColor,
								backgroundColor:this.state.btnColor,
							}}
							onClick={()=>this.state.click(this.getCodeCB)} raised >
							{this.state.disabled?"查看我的糖果！":"发送验证码"}
						</Button>
					</Grid>
				</div>
			</Modal>
		);
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps)(withStyles(styles)(SimpleModal));
