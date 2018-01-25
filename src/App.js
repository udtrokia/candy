//

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
//    Redirect,
} from 'react-router-dom'
import Info from './containers/info'
import Candies from './containers/candies'

class Root extends Component{
    render(){
//        const PrivateRoute = ({ component: Component, ...rest }) => (
//            <Route {...rest} render={props => (
//                localStorage.auth ? (
//                    <Component {...props}/>
//                ) : (
//                    <Redirect to={{
//                        pathname: '/auth',
//                        state: { from: props.location }
//                    }}/>
//                )
//            )}/>
//        )
        return(
            <Router>
                <div>
                    <Route path="/" exact component={Candies}/>
                    <Route path="/info" component={Info} />
                </div>
            </Router>
        )
    }
}


const mapStatesToProps = state =>({
    auth: state.auth
})

export default connect(mapStatesToProps)(Root)
