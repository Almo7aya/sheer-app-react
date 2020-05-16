import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './styles.scss';

import Home from '../Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Redirect exact path='/' to='/home' />
          <Route path='/home' component={Home} />
          <Route path='/login' render={() => (<div>This is the login</div>)} />
          <Route path='/signup' render={() => (<div>This is the signup</div>)} />
          <Route path='/logout' render={() => (<div>This is the logout</div>)} />
          <Route render={() => (<div>404</div>)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
