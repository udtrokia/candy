

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
	height:'100vh'
    },
    btn:{
	width:230,
	height:170,
	marginTop:40,
	paddingBottom:30,
	backgroundImage: 'url('+require('./images/btn.png') +')',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
    },
    p:{
	width:'80vw',
	color:'#ffbb42'
    },
    box:{
	display:'flex',
	width:'45vw',
	color:'#ffbb42',
	marginTop:30,                                              
	paddingTop:30,
	paddingBottom:30,
	paddLeft:10,
	paddingRight:10,
	backgroundImage: 'url('+require('./images/box.png') +')',
	backgroundSize:'cover',
	backgroundRepeat: 'no-repeat',
        height:'100%'	
    },
    field:{
	width:'85vw',
	color:'#ffbb42',
	display:'flex',
	paddingTop:50,
	paddingBottom:50,
	paddLeft:10,
	paddingRight:10,
	backgroundImage: 'url('+require('./images/bar.png') +')',
	backgroundSize:'cover',
	backgroundRepeat: 'no-repeat',
        height:'120vw'	
    },
    website:{
	display:'flex',
	marginTop:100,
	marginBottom:30,
	justifyContent:'center',
	alignItems:'center',
    },
    bg:{
        backgroundImage: 'url('+require('./images/bg.png') +')',
	backgroundSize:'cover',
	backgroundRepeat: 'no-repeat',	
    }
});

export default styles
