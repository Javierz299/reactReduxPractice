import * as ACTION_TYPES from '../actions/actions_types'

const intitialState = {
    user_text: "",
}



const UserReducer = (state = intitialState, action) => {
    switch(action.type){
        case ACTION_TYPES.USER_INPUT:
            return {
                ...state,
                user_text: action.payload,
            }
            default:
                return {
                    state
                }
    }
}

export default UserReducer