import React, { Component } from 'react'
import { connect } from 'react-redux'
import Candy from './candy.png'
import './index.css'

class Drops extends Component{
    render(){
	const { auth } = this.props
	let candy = "candy_drops"
//	if(auth.register){
//	    candy = "candy_drops"
//	}else{	
//	    candy = "candy"
//	}
	var arr = new Array(12);
	for(var i = 0;i < 12;i++){
	    arr[i] = i
	}
	let CandyItem = () =>{
	    let random = Math.random(1)*85
	    let random2 = Math.random(1)*50
	    return(
		<img style={{left:`${random}%`,top:`${random2}%`}} className={candy} src={Candy} alt='candy'/>
	    )
	}
	const Candys = arr.map((item)=>
	    <CandyItem key={item} />
	)
	return (
	    <div id="ctn">
		{Candys}
	    </div>
	)
    }
}


const mapStateToProps = state =>({
    auth : state.auth
})

export default connect(mapStateToProps)(Drops)
