
//
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import styles from './styles'
import Register from '../register'
import { connect } from 'react-redux'
import './index.css'
import _text from './text'
import Drops from '../drops'

class Candies extends Component{
    render(){
	const { classes, dispatch } = this.props
	const _register = async(reddit) => {
	    await dispatch({type:"DROPS", reddit})	    	    
	    await dispatch({type:"REGISTER", reddit})

	}
	const _drops = reddit => dispatch({type:"DROPS", reddit})
	return(
	    <Grid>
		<Drops />
		<Grid className={classes.ctn} style={{height:'100vh'}}>
		    <Typography type="headline" className={classes.title}>
			{_text.title}
		    </Typography>
		    <Typography >
			<img alt="pics" className={classes.img} src={require('./WechatIMG8.png')}/>
		    </Typography>
		    <Typography type="subheading" style={{color:'#ffbb42'}} >
			{_text.present}
		    </Typography>
		    <Divider className={classes.divider} />
		    <Typography className={classes.p}>
			{_text.presentIntro}
		    </Typography>
		    <Button onClick={()=>{ _register(true)}} className={classes.btn} raised >领取</Button>
		    <Register />
		</Grid>
		<Grid className={classes.ctn} style={{justifyContent:'flex-start',paddingBottom:50}}>
		    <Typography align="left" type="subheading" className={classes.p} style={{ margin:20 }}>
			{_text.planTitle}
		    </Typography>
		    <Typography className={classes.p} gutterBottom>
			{_text.planContent1}
		    </Typography>
		    <Typography style={{width:'80vw',color:'#ffbb42'}} gutterBottom>
			{_text.planContent2}
		    </Typography>
		    <Typography type="subheading" className={classes.p} style={{ margin:20 }}>
			{_text.ruleTitle}
		    </Typography>
		    <Typography className={classes.p} gutterBottom>
			{_text.ruleContent}
		    </Typography>
		    <Typography type="subheading" className={classes.p} style={{ margin:20 }}>
			{_text.timeTitle}
		    </Typography>
		    <Typography className={classes.p} gutterBottom>
			{_text.timeContent}
		    </Typography>
		    <Typography type="subheading" className={classes.p} style={{ margin:20 }}>
			{_text.orgTitle}
		    </Typography>
		    <Typography className={classes.p} gutterBottom>{_text.orgContent}</Typography>
		</Grid>
	    </Grid>
	)
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})
export default connect(mapStateToProps)(withStyles(styles)(Candies))
