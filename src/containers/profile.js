import React, { Component } from 'react'
import history from '../utils/history'
import { connect } from 'react-redux'

class Profile extends Component {

    RenderProfile = (props) => {

        if(props.profile === null){
            return (
                <div> <h1>must be logged in</h1></div>
            )
        } else {
            return (
<div>
            <h1>{props.profile.profile.nickname}</h1>
            <br/>
            <img src={props.profile.profile.picture} alt="pic" />
            <br/>
            <h4>{props.profile.profile.email}</h4>
            <h4>{props.profile.profile.name}</h4>
            <br/>
            <h5>Email verified: </h5> {props.profile.profile.email_verified 
            
            ? <p>yes</p> : <p>no</p>}

        </div>
            )
        }

        
}


    render() {
        return (
            <div>
                <this.RenderProfile profile={this.props.profile} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        profile: state.auth_reducer.profile
    }
}

export default connect(mapStateToProps)(Profile)