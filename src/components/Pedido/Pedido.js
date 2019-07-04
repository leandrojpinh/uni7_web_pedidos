import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { create } from '../../actions/pedidoActions'
import PedidoForm from '../Pedido/PedidoForm'

class Pedido extends Component {
    render() {
        if (this.props.redirect) {
            return <Redirect to='/' />
        }

        return (
            <PedidoForm onSubmit={this.props.create} />
        )
    }
}

const mapStateToProps = state => ({ redirect: state.pedidos.redirect });
const mapDispatchToProps = dispatch => bindActionCreators({ create }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pedido)