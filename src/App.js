import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import AppComponent from './components/index'
import Acompanhamento from './components/Acompanhamento/Acompanhamento';
import Dashboard from './components/Dashboard/Dashboard';
import Pedido from './components/Pedido/Pedido';
import Message from './common/components/Message'

class App extends Component {
  render() {
    return (
      <div>
        <AppComponent>
          <Switch>
            <Route exact path='/' component={Acompanhamento} />
            <Route exact path='/pedido' component={Dashboard} />
            <Route path='/pedido/novo' component={Pedido} />
          </Switch>
        </AppComponent>
        <Message />
      </div>
    )
  }
}

export default App;
