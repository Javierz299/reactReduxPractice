import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
    state = {
        nums: [{id: 1},{id: 2}, {id: 3}]
     }
 

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/privateroute">PrivateRoute</Link>
                <Link to="/profile">Profile</Link>
                {!this.props.is_authenticated
                ? <button onClick={() => this.props.auth.login()}>Login</button>
                : <button onClick={() => this.props.auth.logout()}>Logout</button>
                }

                {this.state.nums.map(num => 
                <Link key={num.id} to={{pathname: '/component/' + num.id}}>Component{num.id}</Link>
                )}
                
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("header",state.auth_reducer.is_authenticated)
    return {
        is_authenticated: state.auth_reducer.is_authenticated
    }
}

export default connect(mapStateToProps)(Header)
