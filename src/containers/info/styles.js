

const styles = theme => ({
    root: theme.mixins.gutters({
	paddingTop: 16,
	paddingBottom: 16,
	margin: theme.spacing.unit * 3,
	marginBottom: 0
    }),
    ctn:{
	display:'flex',
	flex:1,
	flexDirection:'column',
	alignItems:'center',
	justifyContent:'center',
	backgroundColor:'#db4e4e',
	height:'100vh'
    },
    btn:{
	display:'flex',
	margin: theme.spacing.unit * 3
    }
});

export default styles
