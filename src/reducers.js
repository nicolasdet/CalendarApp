import { combineReducers } from 'redux';
/* Import des reducers */
import mainReducer from './reducers/main.reducer';


const todoApp = combineReducers({
  main: mainReducer,
});

export default todoApp;
