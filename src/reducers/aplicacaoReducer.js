import * as types from '../actions/actionTypes'

const INITIAL_STATE = {
    title: '',
    item: -1
}

export default function aplicacaoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return { ...state, title: action.title }
        case types.CHANGE_BOTTOM_BAR:
            return { ...state, item: action.item }

        default:
            return state;
    }
}