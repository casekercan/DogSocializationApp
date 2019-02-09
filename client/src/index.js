import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Login from './components/LoginWidget';
import Register from './components/LoginWidget';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();


