import React, { Component } from 'react'

import Component1 from './functional/component1'
import Callback from './functional/callback'
import UnauthRedirect from './functional/unauthredirect'
import ProtectedRoute from './functional/protectedroute'

import Container1 from './containers/container1'
import Header from  './containers/header'
import Profile from './containers/profile'

import history from './utils/history'
import AuthCheck from './utils/authcheck'


import {  Router,Route,Switch, Redirect } from 'react-router-dom'
import Auth from './utils/auth'


const auth = new Auth()

const handleAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth()
    }
}

const PrivateRoute = ({component: Component, auth}) =>(
    
    <Route render={props => auth.isAuthenticated() === true 
     ? < Component auth={auth} {...props} />
    :  <Redirect  to={{pathname:'/redirect'}} /> 
  }
    />
)



class routes extends Component {
    
    render() {
        return (
            <div>
                <Router history={history} >
                    <div>
                    <Header auth={auth}/>
                    <Switch>
                    <Route exact path="/" render={() => <Container1 auth={auth}/>}/>
                    <Route path="/authcheck" render={() => <AuthCheck auth={auth} />} />
                    <Route path="/redirect" component={UnauthRedirect} />
                    <Route path="/callback" render={(props) => { handleAuthentication(props); return <Callback />}} />
                    <Route path="/component/:id" render={(props) => <Component1 {...props} />}/>

                    <PrivateRoute path="/privateroute" auth={auth}  component={ProtectedRoute} />
                    <PrivateRoute  auth={auth}  component={Profile} />
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default routes
