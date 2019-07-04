import React, { Component } from 'react';
import './App.css';

import NavigatiomBottomBar from './common/NavigatiomBottomBar'
import TopBar from './common/TopBar';
import { Switch, Route } from 'react-router-dom';
import Acompanhamento from './components/Acompanhamento/Acompanhamento';
import Dashboard from './components/Dashboard/Dashboard';
import Pedido from './components/Pedido/Pedido';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar tittle='Acompanhar' />
        <Switch>
          <Route exact path='/' component={Acompanhamento} />
          <Route exact path='/pedido' component={Dashboard} />
          <Route path='/pedido/novo' component={Pedido} />
        </Switch>
        <NavigatiomBottomBar />
      </div>
    )
  }
}

export default App;
