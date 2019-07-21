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

it("renders without crashing", () => {
  const div = document.createElement("div");
  const welcome = <h1>Cats gallery</h1>;
   ReactDOM.render(
  <Provider store={store}>
	<Router history={history}>
		<GetRoutes />
	</Router>
  </Provider>,
  div
);
  ReactDOM.unmountComponentAtNode(div);
});
