import React, { Component } from 'react'

import Component1 from './functional/component1'
import Callback from './functional/callback'

import Container1 from './containers/container1'
import Header from  './containers/header'
import history from './utils/history'


import {  Router,Route,Switch } from 'react-router-dom'
import Auth from './utils/auth'

const auth = new Auth()

const handleAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth()
    }
}

class routes extends Component {
    
    render() {
        return (
            <div>
                <Router history={history} >
                    <div>
                    <Header />
                    <Switch>
                    <Route exact path="/" render={() => <Container1 auth={auth}/>}/>
                    <Route path="/callback" render={(props) => { handleAuthentication(props); return <Callback />}} />
                    <Route path="/component/:id" render={(props) => <Component1 {...props} />}/>
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default routes
