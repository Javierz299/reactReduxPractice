import * as ACTION_TYPES from '../actions/actions_types'

const initialState = {
    is_aunthenticated: false,
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                is_aunthenticated: true,
            }
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                is_aunthenticated: false,
            }
            default:
                return state
    }
}

export default AuthReducer