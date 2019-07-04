import React, { Component } from 'react'
import { connect } from 'react-redux'
import AcompanhamentoList from './AcompanhamentoList'
import { bindActionCreators } from 'redux'
import { loadAll } from '../../actions/pedidoActions'

class Acompanhamento extends Component {
    componentDidMount() {
        this.props.loadAll()
    }

    render() {
        return (
            <div style={{ margin: 10, marginTop: 20, marginBottom: 65 }}>
                <AcompanhamentoList pedidos={this.props.pedidos} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ pedidos: state.pedidos.list });
const mapDispatchToProps = dispatch => bindActionCreators({ loadAll }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Acompanhamento)