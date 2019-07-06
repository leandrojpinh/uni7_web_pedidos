import React from 'react'
import AcompanhamentoListRow from './AcompanhamentoListRow'
import Alert from '../../common/components/Alert'
import { getColor } from '../../common/utils/utils'

const AcompanhamentoList = ({ pedidos }) => {
    const list = pedidos.filter(p => p.status !== 'EXCLUÍDO')

    if (list.length === 0) {
        return <Alert>Nenhum pedido para acompanhamento</Alert>
    } else {
        return (
            <div>
                { list.map(pedido => <AcompanhamentoListRow key={pedido.id} pedido={pedido} color={getColor(pedido.status)} />) }
            </div>
        )
    }
}

export default AcompanhamentoList