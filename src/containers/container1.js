import React, { Component } from 'react'

import * as ACTION_TYPES from '../store/actions/actions_types'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class container1 extends Component {
    render() {
        return (
            <div>
                <button onClick={() => console.log(this.props.stateprop1)}>get state</button>
                <button onClick={() => this.props.action1()}>Dispatch action 1</button>
                <button onClick={() => this.props.action2()}>Dispatch action 2</button>

                <button onClick={() => this.props.action_creator1()}>Dispatch action_creator1</button>
                <button onClick={() => this.props.action_creator2()}>dispatch action_creator2</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        stateprop1: state.stateprop1
    }
}

function mapDispatchToProps(dispatch){  
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(ACTIONS.failure())
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (container1);
