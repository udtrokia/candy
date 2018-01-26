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
	    await dispatch({type:"REGISTER", reddit})
	}
	return(
	    <Grid className={classes.bg}>
		<Drops />
		<Grid className={classes.ctn} style={{height:'100vh'}}>
		    <Typography className={classes._banner} />
		    <Grid className={classes.candies}>
		    <Typography id="c1" className={classes.candy}/>
		    <Typography id="c2" className={classes.candy}/>
		    <Typography id="c3" className={classes.candy}/>
		    <Typography id="c4" className={classes.candy}/>
		    <Typography id="c5" className={classes.candy}/>
		    <Typography id="c6" className={classes.candy}/>
		    <Typography id="c7" className={classes.candy}/>
		    <Typography id="c8" className={classes.candy}/>		    
		    </Grid>
		    <Typography className={classes._package}/>
		    <Typography className={classes._bar}/>
		    <Divider className={classes.divider} />
		    <Typography className={classes.p}>
			{_text.presentIntro}
		    </Typography>
		    <Button onClick={()=>{ _register(true)}} className={classes.btn} />
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
