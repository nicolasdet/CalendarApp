import React 		from "react";
import ReactDOM 	from "react-dom";
/* Routes */
import { GetRoutes } from '../../routes';
import { Router } from "react-router-dom";
import history from '../../history';
/* Redux */
import { Provider } 					from 'react-redux';
import thunk 							from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import globalReducers 					from '../../reducers';
import Landing from './Landing';
import renderer from 'react-test-renderer';


const store = createStore(globalReducers, applyMiddleware(thunk));
export {store};


it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}>
	<Router history={history}>
		<Landing />
	</Router>
  </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});