import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import createHistory from "history/createBrowserHistory"
const history = createHistory()

//function rand() {
//  return Math.floor(Math.random() * 20) - 10;
//}
const navigate = path =>{
    history.push(path)
    history.go()
}

function getModalStyle() {
    //  const top = 50 + rand();
    //  const left = 50 + rand();
    const top = 50
    const left = 50
    
    return {
	position: 'absolute',
	width: `60%`,
	top: `${top}%`,
	left: `${left}%`,
	transform: `translate(-${top}%, -${left}%)`,
	border: '1px solid #e5e5e5',
	backgroundColor: '#fff',
	boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
	padding: 8 * 4,
    };
}

class SimpleModal extends React.Component {

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
		    <Typography type="title" id="modal-title">糖果社区</Typography>
		    <Grid style={{display:'flex',flexDirection:'column'}}>
			<TextField id="name" label="手机号" margin="normal" />
			<TextField id="name" label="验证码" margin="normal" />
			<Button
			    onClick={()=>navigate('/info')} color="secondary" raised style={{marginTop:25}}>
			    查看我的糖果！
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

export default connect(mapStateToProps)(SimpleModal);
