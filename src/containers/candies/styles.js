
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
		marginTop:33,
        width:180,
		height:45,
		backgroundImage: 'url(/candies/btn.png)',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    bg:{
		backgroundImage: 'url(/candies/bg.png)'
    },
    candies:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
    },
    candy:{
		marginRight:5,
		height:32,
		width: 32,
		backgroundImage: 'url(/candies/candy.png)',
		backgroundSize: "contain",
		backgroundRepeat: 'no-repeat',
    },    
    candy_no:{
		marginRight:5,
		height:32,
		width: 32,
		backgroundImage: 'url(/candies/candy_no.png)',
		backgroundSize: "cover",
		backgroundRepeat: 'no-repeat',
    },
    candy_big:{
		height:48,
		width: 48,
		backgroundImage: 'url(/candies/candy_big.png)',
		backgroundSize: '48px 48px',
		backgroundRepeat: 'no-repeat',
    },    
    _package:{
		marginTop:20,
		position:'relative',
		height: 84,
		width: 84,
		backgroundImage: 'url(/candies/package.png)',
		backgroundSize: "cover",
		backgroundRepeat: 'no-repeat',
    },
    _banner:{
		position:'relative',
		width:300,
		height:98,
		backgroundImage: 'url(/candies/banner.png)',
		backgroundSize: "cover",
		backgroundRepeat: 'no-repeat',	
    },
    _bar:{
		position:'relative',
		marginBottom:8,
		height:20,
		backgroundSize: "contain",
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
    },
    _board:{
		top:10,
		position:'relative',
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
        width: 300,
        height:198,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
		backgroundImage: 'url(/candies/board.png)',	

    }
    
})

export default styles
