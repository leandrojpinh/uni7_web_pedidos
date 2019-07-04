import * as types from '../actions/actionTypes'

const INITIAL_STATE = {
    list: [],
    redirect: false
}

export default function dashboardReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.LOAD_DASHBOARD_SUCCESS:
            return { ...state, list: action.dashboard }

        case types.CREATE_DASHBOARD:
            return [...state, Object.assign({}, action.dashboard)]

        default:
            return state
    }
}