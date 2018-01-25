

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
	backgroundColor:'#ffbb42',
	borderRadius:23,
	width:230,
	marginTop:50
    },
    p:{
	width:'80vw',
	color:'#ffbb42'
    },
    field:{
	width:'80vw',
	color:'#ffbb42',
	marginTop:30,                                                          
	paddingTop:30,
	paddingBottom:30,
	paddLeft:10,
	paddingRight:10,
	backgroundColor:'#df5f5f'
    },
    website:{
	display:'flex',
	marginTop:188,
	justifyContent:'flex-end',
	alignItems:'flex-end',
    }
});

export default styles
