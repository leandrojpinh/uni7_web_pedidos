import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AcompanhamentoList from './AcompanhamentoList'
import { loadAll } from '../../actions/pedidoActions'

class Acompanhamento extends Component {
    componentDidMount() {
        this.props.loadAll()
    }

    render() { return ( <AcompanhamentoList pedidos={this.props.pedidos} /> ) }
}

const mapStateToProps = state => ({ pedidos: state.pedidos.list });
const mapDispatchToProps = dispatch => bindActionCreators({ loadAll }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Acompanhamento)