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

//const getCandies = async()=> {
//	history.push('/info')
//	history.go()
//}
class SimpleModal extends React.Component {
	constructor(props){
		super(props)
		window.location.search.slice(1)
	}
	state = {
		disabled: false,
		btnColor: '#ffbb42',//dfdfdf
		fontColor: '#db4e43',//ddd
		label: '手机号',//验证码
		codeVerify: false,
		country_code: 86,
		phone_number: '',
		verification_code: '',
		invater: Number
	}
	componentWillMount(){
		if(window.location.search){
			this.setState({
				invater: window.location.search.slice(1)
			})
		}
	}
	codeBack = async () => {
		this.setState({
			disabled: false,
			btnColor: '#ffbb42',
			fontColor: '#db4e43',
		})
		let data = {
			country_code: this.state.country_code,
			phone_number: this.state.phone_number,
			verification_code: this.state.verification_code,
			invater: this.state.invater
		}
		let _headers = new Headers()
		_headers.append('Content-Type', 'application/json')
		let requests = new Request('url', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: _headers
		})
		let res = await fetch(requests)
		if (res.Success){
			localStorage.setItem('auth',true)
			history.push('/info')
			history.go(0)
		}		
	}
	codeSend = async () => {
		const { country_code, phone_number } = this.state
		if ( country_code.toString().length < 0 || country_code.toString().length > 3 ){
			alert('请输入正确的区号')
		} else if ( phone_number.toString().length !== 11 ){
			alert('请输入正确的电话号码')
		} else {
			this.setState({
				disabled: true,
				btnColor: '#dfdfdf',
				fontColor:'#999',
			})
			let data = {
				country_code: this.state.country_code,
				phone_number: this.state.phone_number
			}
			let _headers = new Headers()
			_headers.append('Content-Type', 'application/json')
			let requests = new Request('url', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: _headers
			})
			let res = await fetch(requests)
			if (res.Success){
				this.setState({
					send:true,
					label: "验证码"
				})
			}
		}

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
						<Grid container>
							{ !this.state.codeVerify ?<Grid item xs={3}>
								<FormControl style={{marginTop:25,color:'#ffbb42'}}	>
									<InputLabel htmlFor="_input">区号</InputLabel>
									<Input defaultValue={86} type="number"
									style={{color:'#ffbb42'}} id="_input"
									onChange={ item => { this.setState({ country_code: item.target.value }) }}
									/>
								</FormControl>	
							</Grid> :<div></div>}
							<Grid item xs={9}>
								<FormControl style={{marginTop:25,color:'#ffbb42'}}	>
									<InputLabel htmlFor="_input">{this.state.label}</InputLabel>
									<Input
									value={this.state.phone_number}
									style={{color:'#ffbb42'}} id="_input" type="number"
									onChange={ item => { this.setState({ phone_number: item.target.value }) }}
									/>
								</FormControl>
							</Grid>								
						</Grid>								
						<Button disabled={this.state.disabled}
							style={{
								marginTop:30,color:this.state.fontColor,
								backgroundColor:this.state.btnColor,
							}}
							onClick={this.codeSend} raised >
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
