import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography';
import styles from './styles.js'
import _text from './text.json'

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div className={classes.ctn+" "+classes.bg}>
	<Typography type="headline" align="center" className={classes.box} />
	<Typography align="center" className={classes.field} />
	<Button className={classes.btn} onClick={()=>{alert('复制成功！快去分享糖果吧！')}} />
	<Typography align="center" type="body1" className={[classes.p,classes.website]} >
	    {_text.website}
	</Typography>	
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
