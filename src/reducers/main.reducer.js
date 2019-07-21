import {
  UPDATE_HOME,
} from '../actions/main.actions';

const defaultState = {
    Home: 		   true,
};

const chatsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_HOME:
        return {
          ...state,
          Home: action.payload,
        }
    default:
      return state;
  }
};

export default chatsReducer;