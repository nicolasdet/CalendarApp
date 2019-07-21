import React from 'react';
import ReactDOM from 'react-dom';
/* Redux */
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
/* Routes */
import { Router } from 'react-router-dom';
import { GetRoutes } from './routes';
import history from './history';

import globalReducers from './reducers';


const store = createStore(globalReducers, applyMiddleware(thunk));
export { store };


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <GetRoutes />
    </Router>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
