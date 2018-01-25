
import { combineReducers } from 'redux'

const isAuthenticated = ( state = false, action ) =>{
    switch(action.type){
	case 'AUTH':
	    return(action.reddit)
	default:
	    return state
    }
    
}

const drops = ( state = false, action ) =>{
    switch(action.type){
	case 'DROPS':
	    return(action.reddit)
	default:
	    return state
    }
}

const register = ( state = false, action ) =>{
    switch(action.type){
	case 'REGISTER':
	    return(action.reddit)
	default:
	    return state
    }
}

const auth = combineReducers({
    isAuthenticated, register, drops
})

export default auth
