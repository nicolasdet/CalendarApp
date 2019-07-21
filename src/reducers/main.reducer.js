import {
  UPDATE_HOME,
  UPDATE_DATE,
  UPDATE_USER,
  UPDATE_EVENT_LISTE
} from '../actions/main.actions';

const defaultState = {
  Home: true,
  DateSelected: new Date().toISOString().slice(0, 10),
  SelectStatus: false,
  UserSelected: '',
  EventList: [],
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
    case UPDATE_EVENT_LISTE:
      return {
        ...state,
        EventList: action.payload,
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
