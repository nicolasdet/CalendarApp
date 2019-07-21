import {
  UPDATE_HOME,
  UPDATE_DATE
} from '../actions/main.actions';

const defaultState = {
  Home: true,
  DateSelected: new Date().toISOString().slice(0, 10),
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
      };
    default:
      return state;
  }
};

export default chatsReducer;
