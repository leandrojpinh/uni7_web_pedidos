import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import NavigatiomBottomBar from '../common/components/NavigatiomBottomBar'
import Container from '../common/components/Container'
import TopBar from '../common/components/TopBar';
import { updateTitle } from '../actions/aplicacaoActions'

class AppComponent extends Component {
    componentWillMount() {
        this.props.updateTitle(JSON.parse(localStorage.getItem('page')) || 'Acompanhar')
    }

    render() {
        return (
            <div>
                <TopBar tittle={this.props.title} />
                <Container>
                    {this.props.children}
                </Container>
                <NavigatiomBottomBar item={this.props.item} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ title: state.aplicacao.title, item: state.aplicacao.item });
const mapDispatchToProps = dispatch => bindActionCreators({ updateTitle }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)