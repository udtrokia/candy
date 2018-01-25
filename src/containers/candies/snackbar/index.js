import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const styles = theme => ({
    close: {
	width: theme.spacing.unit * 4,
	height: theme.spacing.unit * 4,
    },
    ctn:{
	width:'100%'
    }
});

class SimpleSnackbar extends React.Component {
    state = {
	open: true,
    };

    handleClick = () => {
	this.setState({ open: true });
    };

    handleClose = (event, reason) => {
	if (reason === 'clickaway') {
	    return;
	}

	this.setState({ open: false });
    };

    render() {
	const { classes } = this.props;
	return (
	    <div className={classes.ctn} >
		<Snackbar
		    anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		    }}
		    open={this.state.open}
		    onClose={this.handleClose}
		    SnackbarContentProps={{
			'aria-describedby': 'message-id',
		    }}
		    message={<span id="message-id">东方不败已经获得了大块头区块链赠送的100个糖果！</span>}
		    action={[
			<IconButton
			    key="close" aria-label="Close" color="inherit" className={classes.close} onClick={this.handleClose}>
			    <CloseIcon />
			</IconButton>,
		    ]}
		/>
	    </div>
	);
    }
}

SimpleSnackbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);