

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
	top:50,
	position:'relative',
	width:220,
	height:55,
	backgroundImage: 'url('+require('./images/btn.png') +')',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
    },
    p:{
	width:'80vw',
	color:'#ffbb42'
    },
    box:{
	top: theme.spacing.unit * 5,
	right: theme.spacing.unit * 1,
	position:'relative',
	width:170,
	height:179,
	color:'#ffbb42',
	backgroundImage: 'url('+require('./images/box.png') +')',
	backgroundSize:'cover',
	backgroundRepeat: 'no-repeat',
    },
    field:{
	top:theme.spacing.unit * 4,
	position:'relative',
	width:318,
        height:169,
	color:'#ffbb42',
	backgroundImage: 'url('+require('./images/bar.png') +')',
	backgroundSize:'cover',
	backgroundRepeat: 'no-repeat',

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
