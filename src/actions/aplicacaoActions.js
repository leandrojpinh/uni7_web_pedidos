import * as types from './actionTypes'

export function updateTitle(title) {
    return dispatch => {
        dispatch(updateBottomBar(getItem(title)))
        dispatch(() => {
            localStorage.setItem('page', JSON.stringify(title))
        })
        dispatch({ type: types.CHANGE_TITLE, title })
        dispatch({ type: types.LOAD_APP_SUCCESS })
    }
}

export function updateBottomBar(item) {
    return { type: types.CHANGE_BOTTOM_BAR, item }
}

function getItem(title) {
    const views = ['Acompanhar', 'Todos os Pedidos', 'Novo Pedido']

    return views.findIndex(t => t === title)
}