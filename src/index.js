import React 		from "react";
import ReactDOM 	from "react-dom";
/* Routes */
import { GetRoutes } from './routes';
import { Router } from "react-router-dom";
import history from './history';
/* Redux */
import { Provider } 					from 'react-redux';
import thunk 							from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import globalReducers 					from './reducers';


const store = createStore(globalReducers, applyMiddleware(thunk));
export {store};


ReactDOM.render(
  <Provider store={store}>
	<Router history={history}>
		<GetRoutes />
	</Router>
  </Provider>,
  document.getElementById('root')
);