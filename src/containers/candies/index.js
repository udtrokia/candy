
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


class Candies extends Component{
    render(){
	const { classes, dispatch } = this.props
        const register = reddit => {
            const action = {
                type: 'REGISTER',
                reddit
            }
            dispatch(action)
        };
	return(
	    <Grid>
	    <Grid className={classes.ctn} style={{height:'100vh'}}>
		<Typography type="headline" className={classes.title}>新年糖果大派送!</Typography>
		<Typography ><img alt="pics" className={classes.img} src={require('./WechatIMG8.png')}/></Typography>
		<Typography type="subheading" style={{color:'#ffbb42'}} >Ripple送你20个</Typography>
		<Divider style={{backgroundColor:'#ffbb42',height:1,width:'75vw',marginTop:15,marginBottom:15}} />
		<Typography style={{width:'75vw',color:'#ffbb42'}}>瑞波币是Ripple网络的基础货币，它可以在整个ripple网络中流通，总数量为1000亿，并且随着交易的增多而逐渐减少，瑞波币的运营公司为Ripple Labs（其前身为OpenCoin）。</Typography><Register />
	    </Grid>
	    <Grid className={classes.ctn} style={{justifyContent:'flex-start',paddingBottom:50}}>
		<Typography aligb="left" type="subheading" style={{width:'80vw',color:'#ffbb42',margin:20}}>| 年终糖果计划</Typography>
		<Typography style={{width:'80vw',color:'#ffbb42'}} gutterBottom>
		    数字货币在今年迎来了爆发式增长，全世界都为之不眠我们的想法一样，希望在2018年，很多项目得到大家的支持，他们和的中国春节，回馈大家最喜爱的糖果。</Typography>
		<Typography style={{width:'80vw',color:'#ffbb42'}} gutterBottom> 我们结盟了很多项目方，准备一起为大家带来一场史上最大的糖果盛宴。这些项目把他们的糖果放入我们的仓库，我们将糖果加工，打包，装箱，变成CANDY.CANDY的价值代表着这些糖果的价值，我们会用各种方法带给大家。
		最后，预祝大家新春快乐！
		</Typography>
		<Typography type="subheading" style={{color:'#ffbb42',margin:20,width:'80vw',}}>| 活动规则</Typography>
		<Typography style={{width:'80vw',color:'#ffbb42'}} gutterBottom> 		    在Candy.gift，我们结合了一大堆伟大的项目，给每个人最好的农历新年礼物：免费代币！每个项目都把他们的象征糖果放在我们的盒子里。然后我们发行了一个CANDY硬币，这个硬币按比例代表了所有这些代币的价值！只需注册即可领取您的CANDY，并邀请您的朋友获取更多candy。
		</Typography>
		<Typography type="subheading" style={{color:'#ffbb42',margin:20,width:'80vw'}}>| 活动时间</Typography>
		<Typography style={{width:'80vw',color:'#ffbb42'}} gutterBottom> 2018.02.02-2018.02.10</Typography>
		<Typography type="subheading" style={{color:'#ffbb42',margin:20,width:'80vw',}}>| 组织方</Typography>
		<Typography style={{width:'80vw',color:'#ffbb42'}} gutterBottom> 糖果社区</Typography>
	    </Grid>
	    </Grid>
	)
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})
export default connect(mapStateToProps)(withStyles(styles)(Candies))
