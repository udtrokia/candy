
const styles = theme =>({
    ctn:{
	display:'flex',
	alignItems:'center',
	flexDirection:'column',

    },
    title:{
	fontSize:32,
	color:'#ffbb42',
	marginTop:45
    },
    img:{
	width:228,
	height:228
    },
    divider:{
	height:1,
	width:'80vw',
	marginBottom:15,
	backgroundColor:'#ffbb42',	
    },
    p:{
	width:'80vw',
	color:'#ffbb42'
    },
    btn:{
	marginTop:15,
        width:'55vw',
	height:'15vw',
	backgroundImage: 'url('+require('./assets/btn.png') +')',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    bg:{
	backgroundImage: 'url('+require('./assets/bg.png') +')'
    },
    candies:{
	display:'flex',
	flexDirection:'row'
    },
    candy:{
	height:'48px',
	width: '48px',
	backgroundImage: 'url('+require('./assets/candy.png') +')',
	backgroundSize: "48px 48px",
	backgroundRepeat: 'no-repeat',
	position:'absolute'
    },
    _package:{

	height:'156px',
	width: '156px',
	backgroundImage: 'url('+require('./assets/package.png') +')',
	backgroundSize: "156px 156px",
	backgroundRepeat: 'no-repeat',
    },
    _banner:{
	width:'90vw',
	height:'30vw',
	backgroundImage: 'url('+require('./assets/banner.png') +')',
	backgroundSize: "cover",
	backgroundRepeat: 'no-repeat',	
    },
    _bar:{
	width:'90%',
	height:'30vw',
	backgroundImage: 'url('+require('./assets/bar.png') +')',
	backgroundSize: "cover",
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center'
    },
    
})

export default styles
