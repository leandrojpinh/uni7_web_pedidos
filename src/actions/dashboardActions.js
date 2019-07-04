import axios from 'axios'

import * as types from './actionTypes'

const URL = 'http://localhost:3001/dashboard'

export function loadDashboard() {
    return dispatch => {
        axios.get(URL)
            .then(dash => {
                dispatch(loadDashboardSuccess(dash.data || []))
            }).catch(err => {
                dispatch(initializeDashboard())
            })
    }
}

export function updateDashboard(pedidos) {
    const dashboard = gerenateDashboard(pedidos)

    return dispatch => {
        dashboard.forEach(dash => {
            axios.put(`${URL}/${dash.id}`, dash)
            .then(response => {
                dispatch({ type: types.CREATE_DASHBOARD_SUCCESS })
            })
        })
    }
}

export function initializeDashboard() {
    const dashboard = gerenateDashboard([])

    return dispatch => {
        axios.post(URL, dashboard)
            .then(resp => {
                dispatch({ type: types.CREATE_DASHBOARD_SUCCESS })
            })
    }
}

function loadDashboardSuccess(dashboard) {
    return { type: types.LOAD_DASHBOARD_SUCCESS, dashboard }
}

function gerenateDashboard(pedidos) {
    const statusList = ['NOVO', 'EM PREPARAÇÃO', 'PRONTO PARA PAGAMENTO', 'CONCLUÍDO', 'EXCLUÍDO']
    const dashboard = []
    let id = 1;

    statusList.forEach(status => {
        const count = pedidos.filter(p => p.status === status).length || 0
        dashboard.push({ id, status, count })
        id++
    })
    return dashboard;
}