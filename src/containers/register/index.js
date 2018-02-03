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
import axios from 'axios'
const history = createHistory()

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


function getModalStyle() {
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
		country_code: '86',
		phone_number: '',
		verification_code: '',
		friendid: "",
		w: 9
	}
	componentWillMount(){
		if(window.location.search){
			this.setState({
				friendid: window.location.search.slice(1)
			})
		}
	}
	codeBack = async () => {
		this.setState({
			disabled: false,
			btnColor: '#ffbb42',
			fontColor: '#db4e43',
		})

		let res = await axios({
			method: 'post',
			url: 'http://localhost:8080/api/verify/start',
			data: {
				country_code: this.state.country_code,
				phone_number: this.state.phone_number,
				verification_code: this.state.verification_code,
				friendid: this.state.friendid
			}
		})
		console.log(res)
		if (res.data.Success){
			localStorage.setItem('auth',true)
			history.push('/info')
			history.go(0)
		}		
	}
	codeSend = async () => {
		let myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		const { country_code, phone_number } = this.state
		if ( country_code.toString().length < 0 || country_code.toString().length > 3 ){
			alert('请输入正确的区号')
		} else if ( this.state.w ===9 &&phone_number.toString().length !== 11 ){
			alert('请输入正确的电话号码')
		} else {
			this.setState({
				disabled: true,
				btnColor: '#dfdfdf',
				fontColor:'#999',
			})
			let res = await axios({
				method: 'post',
				url: 'http://localhost:8080/verify/start',
				data: {
					country_code: this.state.country_code,
					phone_number: this.state.phone_number,
					verification_code: this.state.verification_code,
					friendid: this.state.friendid
				}
			})			
			console.log(res)
			if (res.data.Success){
				this.setState({
					disabled: false,
					btnColor: '#ffbb42',
					fontColor: '#db4e43',
					label: "验证码",
					phone_number:'',
					w:12
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
						<Grid container >
							{ this.state.w===9 ?<Grid item xs={3}>
								<FormControl style={{marginTop:25,color:'#ffbb42'}}	>
									<InputLabel htmlFor="_input">区号</InputLabel>
									<Input defaultValue={86} type="number"
									style={{color:'#ffbb42'}} id="_input"
									onChange={ item => { this.setState({ country_code: item.target.value }) }}
									/>
								</FormControl>	
							</Grid> :<div></div>}
							<Grid item xs={this.state.w}>
								<FormControl style={{marginTop:25,color:'#ffbb42'}}	>
									<InputLabel htmlFor="_input">{this.state.label}</InputLabel>
									<Input
									fullWidth
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
