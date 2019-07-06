import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DashboardList from './DashboardList'

import { loadDashboard, initializeDashboard } from '../../actions/dashboardActions'

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadDashboard()
  }

  render() {
    return ( <DashboardList dashboard={this.props.dashboard} /> )
  }
}

const mapStateToProps = state => ({ dashboard: state.dashboard.list, pedidos: state.pedidos.list });
const mapDispatchToProps = dispatch => bindActionCreators({ loadDashboard, initializeDashboard }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

