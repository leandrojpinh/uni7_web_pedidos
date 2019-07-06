import * as types from './actionTypes'
import axios from 'axios'
import { reset as resetForm } from 'redux-form'
import { toastr } from 'react-redux-toastr'

import { updateDashboard } from './dashboardActions'

const URL = 'http://localhost:3001/pedidos'

export function create(pedido) {
    pedido.id = generateId()
    pedido.status = 'NOVO'

    return dispatch => {
        axios.post(URL, pedido)
            .then(response => {
                dispatch(resetForm('pedidoForm'))
                dispatch(loadAll())
                dispatch({ type: types.CREATE_PEDIDO_SUCCESS })
                toastr.success('Sucesso!', `Pedido criado para ${pedido.cliente}`)
            }).catch(e => {
                toastr.error(`Erro: ${e}`)
            })
    }
}

export function updateStatus(pedido) {
    pedido.status = setStatus(pedido.status)

    return dispatch => {
        axios.put(`${URL}/${pedido.id}`, pedido)
            .then(response => {
                dispatch(loadAll())
                toastr.success('Sucesso!', `Pedido de ${pedido.cliente} ${pedido.status}`)
            }).catch(e => {
                toastr.error(`Erro: ${e}`)
            })
    }
}

export function remove(pedido) {
    pedido.status = 'EXCLUÍDO'

    return dispatch => {
        axios.put(`${URL}/${pedido.id}`, pedido)
            .then(response => {
                dispatch(loadAll())
                toastr.success('Sucesso!', `Pedido de ${pedido.cliente} ${pedido.status}`)
            }).catch(e => {
                toastr.error(`Erro: ${e}`)
            })
    }
}

export function loadAll() {
    return dispatch => {
        axios.get(URL)
            .then(pedidos => {
                dispatch(updateDashboard(pedidos.data))
                dispatch(loadPedidosSuccess(pedidos.data))
            }).catch(e => {
                toastr.error(`Erro: ${e}`)
            })
    }
}

function generateId() {
    return Date.now()
}

function setStatus(status) {
    const list = ['NOVO', 'EM PREPARAÇÃO', 'PRONTO PARA PAGAMENTO', 'CONCLUÍDO', 'EXCLUÍDO']
    const newState = list.findIndex(s => s === status)

    if (newState === 4)
        return list[newState]
    if (newState < 0)
        return list[0]

    return list[newState + 1]
}

function loadPedidosSuccess(pedidos) {
    return { type: types.LOAD_ALL_PEDIDOS_SUCCESS, pedidos }
}
