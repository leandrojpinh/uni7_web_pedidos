import * as statusType from '../types/status'
export function getColor(status) {
    switch (status) {
        case statusType.NOVO:
            return '#2196f3' //Azul
        case statusType.EM_PREPARACAO:
            return '#ffc400' //Amarelo
        case statusType.PRONTO_PARA_PAGAMENTO:
            return '#4caf50' //Verde
        case statusType.CONCLUIDO:
            return '#78909c' //Cinza
        default:
            return ''
    }
}