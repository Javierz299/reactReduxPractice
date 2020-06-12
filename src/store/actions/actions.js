import * as ACTION_TYPES from './actions_types'

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}

export const login_success = () => {
    return {
       type: ACTION_TYPES.LOGIN_SUCCESS
    }
}

export const login_failure = () => {
    return{
        type: ACTION_TYPES.LOGIN_FAILURE
    }
}

export const user_input = (txt) => {
    console.log(txt)
    return {
        type: ACTION_TYPES.USER_INPUT,
        payload: txt
    }
}

export const add_profile = (profile) => {
    return {
        type: ACTION_TYPES.ADD_PROFILE,
        payload: profile
    }
}

export const remove_profile = () => {
    return {
        type: ACTION_TYPES.REMOVE_PROFILE
    }
}