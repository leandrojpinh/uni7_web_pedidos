import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'

import AcompanhamentoListRow from './AcompanhamentoListRow'

import * as colors from '../../common/statusColors'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginBottom: 5
    }
}));

function getColor(status) {
    switch (status) {
        case colors.NOVO:
            return '#2196f3' //Azul
        case colors.EM_PREPARACAO:
            return '#ffc400' //Amarelo
        case colors.PRONTO_PARA_PAGAMENTO:
            return '#4caf50' //Verde
        case colors.CONCLUIDO:
            return '#78909c' //Cinza
        default:
            return ''
    }
}

const AcompanhamentoList = ({ pedidos }) => {
    const classes = useStyles();
    const list = pedidos.filter(p => p.status !== 'EXCLUÍDO')
    if (list.length === 0) {
        return (
            <Paper className={classes.paper}>Nenhum pedido para acompanhamento</Paper>
        )
    } else {
        return (
            <div>
                {list.map(pedido => {
                    const color = getColor(pedido.status)
                    return (
                        <AcompanhamentoListRow key={pedido.id} pedido={pedido} color={color} />
                    )
                })}
            </div>
        )
    }
}

export default AcompanhamentoList