import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' render={() => (<div>This is the /</div>)} />

        <Route path='/home' render={() => (<div>This is the home</div>)} />

        <Route path='/login' render={() => (<div>This is the login</div>)} />

        <Route path='/signup' render={() => (<div>This is the signup</div>)} />

        <Route path='/logout' render={() => (<div>This is the logout</div>)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
