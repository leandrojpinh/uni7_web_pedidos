import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pedidoReducer from './pedidoReducer'
import dashboardReducer from './dashboardReducer' 

const rootReducer = combineReducers({    
    pedidos: pedidoReducer,
    dashboard: dashboardReducer,    
    form: formReducer
})

export default rootReducer