import * as types from '../actions/actionTypes'

const INITIAL_STATE = {
    list: [],
    redirect: false
}

export default function pedidoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CREATE_PEDIDO:
            return [...state, Object.assign({}, action.pedido)]

        case types.CREATE_PEDIDO_SUCCESS:
            return { ...state, redirect: true }

        case types.LOAD_ALL_PEDIDOS_SUCCESS:
            return { ...state, list: action.pedidos }

        case types.LOAD_APP_SUCCESS:
            return { ...state, redirect: false }

        default:
            return state
    }
}