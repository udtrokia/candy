
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import styles from './styles'
import Register from '../register'
import { connect } from 'react-redux'
import './index.css'
import _text from './text'

const sleep = ms => new Promise((resolve)=>{
	setTimeout( resolve, ms )
})

class Candies extends Component{
	state={
		arr:1,
		list:['gcx', 'gnx', 'kcash'],
	}
	componentDidMount(){
	    const constant = async() =>{
            while(true){
                await sleep(3000)
                await this.setState({list: ['gcx','gnx','kcash']})
                await sleep(3000)
                await this.setState({list: ['mvc', 'smt','meshbox']})
            }
        }
        constant()
	}
    render(){
		const { classes, dispatch } = this.props
		const _register = async(reddit) => {
			await dispatch({type:"REGISTER", reddit})
		}
		const intro = this.state.list.map((item)=>{
			return(
				<Typography key={item} className={classes._bar}
					style={{ backgroundImage: 'url('+require('./intro/'+ item +'.png') +')',}}>
				</Typography>
			)
		})
		const Intro = () =>{
			return(
				<div id="intro" >
					{intro}
				</div>
			)
		}
		return(
			<Grid className={classes.bg}>
				<Grid className={classes.ctn} style={{height:'100vh'}}>
					<Typography className={classes._banner} />
					<Typography className={classes._package}/>
					<Grid className={classes.candies}>
						<Typography className={classes.candy}/>
						<Typography className={classes.candy}/>
						<Typography className={classes.candy}/>
						<Typography className={classes.candy}/>
						<Typography className={classes.candy}/>
						<Typography className={classes.candy}/>
						<Typography id="big" className={classes.candy_big}/>			
					</Grid>
					<div className={classes._board}>			
						<Intro />
					</div>
					<Button onClick={()=>{ _register(true)}} className={classes.btn} > </Button>
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
