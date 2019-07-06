import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastReducer }  from 'react-redux-toastr'
import pedidoReducer from './pedidoReducer'
import dashboardReducer from './dashboardReducer' 
import aplicacaoReducer from './aplicacaoReducer'

const rootReducer = combineReducers({
    pedidos: pedidoReducer,
    dashboard: dashboardReducer,    
    aplicacao: aplicacaoReducer,
    form: formReducer,
    toastr: toastReducer
})

export default rootReducer