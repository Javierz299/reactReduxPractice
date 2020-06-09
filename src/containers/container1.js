import React, { Component } from 'react'

import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class container1 extends Component {

    

    render() {
      const usertext = "text 1"
        return (
            <div>
                <button onClick={() => this.props.auth.login()}>Login</button>
                <button onClick={() => console.log(this.props.user_input)}>get state</button>
                <button onClick={() => this.props.action1()}>Dispatch action 1</button>
                <button onClick={() => this.props.action2()}>Dispatch action 2</button>

                <button onClick={() => this.props.action_creator1()}>Dispatch action_creator1</button>
                <button onClick={() => this.props.action_creator2()}>dispatch action_creator2</button>

                <button onClick={() => this.props.action_creator3(usertext)}>Dispatch action creator 3</button>
                {this.props.stateprop1 ? <h1>{this.props.user_input}</h1> : null}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        stateprop1: state.reducer1.stateprop1,
        user_input: state.user_reducer.user_text
    }
}

function mapDispatchToProps(dispatch){  
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
       
        action_creator3: (txt) => dispatch(ACTIONS.user_input(txt)),
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (container1);
