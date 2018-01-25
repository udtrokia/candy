import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography';
import styles from './styles.js'


function PaperSheet(props) {
  const { classes } = props;
  return (
    <div className={classes.ctn}>
	<Typography type="headline" style={{width:'80vw',color:'#ffbb42'}}>
	    恭喜获得100个糖果！赠送给一个好友，再送60个糖果！
	</Typography>
	<Typography align="center"
	    style={{width:'80vw', color:'#ffbb42',marginTop:30, paddingTop:30,paddingBottom:30,paddLeft:10,paddingRight:10,backgroundColor:'#df5f5f'}}
	>
#送糖果啦#新年快乐！送你100个糖果，赶快来领取吧！www.candy.gift/candy1324
	</Typography>
	<Button raised style={{
	    backgroundColor:'#ffbb42',borderRadius:23,width:230,marginTop:50
	}}>复制文本</Button>
	<Typography type="body1" style={{marginTop:88,width:'80vw',color:'#ffbb42'}}>
	    ·登录candy.git官网获取最新糖果信息
	</Typography>	
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
