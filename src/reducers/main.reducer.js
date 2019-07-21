import {
  UPDATE_HOME,
  UPDATE_DATE,
  UPDATE_USER
} from '../actions/main.actions';

const defaultState = {
  Home: true,
  DateSelected: new Date().toISOString().slice(0, 10),
  SelectStatus: false,
  UserSelected: null
};

const chatsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_HOME:
      return {
        ...state,
        Home: action.payload,
      };
    case UPDATE_DATE:
      return {
        ...state,
        DateSelected: action.payload,
        SelectStatus: true
      };
    case UPDATE_USER:
       return {
        ...state,
        UserSelected: action.payload,
      };   
    default:
      return state;
  }
};

export default chatsReducer;
