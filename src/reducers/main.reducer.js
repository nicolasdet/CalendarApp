import {
  UPDATE_HOME,
  UPDATE_DATE,
  UPDATE_USER,
  UPDATE_EVENT_LISTE,
  CREATE_EVENT,
  CLOSE_MODAL,
  UPDATE_MODAL_TEXT,
  UPDATE_MODAL_START_DATE,
  UPDATE_MODAL_END_DATE,
  UPDATE_USER_MODAL,
  UPDATE_MODAL_START_TIME,
  UPDATE_MODAL_END_TIME,
  EMPTY_MODAL,
  UPDATE_EVENT
} from '../actions/main.actions';
import moment from 'moment';

const defaultState = {
  Home: true,
  DateSelected: new Date().toISOString().slice(0, 10),
  SelectStatus: false,
  UserSelected: '',
  EventList: [],
  NewEvent: null,
  NewEventStart: new Date().toISOString().slice(0, 10),
  NewEventStartTime: '00:00:00',
  NewEventEnd: new Date().toISOString().slice(0, 10),
  NewEventEndTime: '00:00:00',
  modalCreateEvent: false,
  modalUpdate: false,
  NewEventText: '',
  NewEventUser: '',
  currentElement: null,
};

const mainReducer = (state = defaultState, action) => {
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
    case CREATE_EVENT:
      return {
        ...state,
        NewEvent: action.payload,
        NewEventStart: action.payload.start.toISOString().slice(0, 10),
        NewEventEnd: action.payload.end.toISOString().slice(0, 10),
        NewEventStartTime: moment(action.payload.start).format('hh:mm:ss'),
        NewEventEndTime: moment(action.payload.end).format('hh:mm:ss'),
        modalCreateEvent: true,
      };
    case UPDATE_EVENT:
      return {
        ...state,
        NewEvent: action.payload,
        NewEventStart: action.payload.start.toISOString().slice(0, 10),
        NewEventEnd: action.payload.end.toISOString().slice(0, 10),
        NewEventStartTime: moment(action.payload.start).format('hh:mm:ss'),
        NewEventEndTime: moment(action.payload.end).format('hh:mm:ss'),
        NewEventText: action.payload.title,
        currentElement: action.payload.id,
        NewEventUser: state.UserSelected,
        modalUpdate: true,
        modalCreateEvent: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalCreateEvent: false,
        modalUpdate: false,
      };
    case UPDATE_MODAL_TEXT:
      return {
        ...state,
        NewEventText: action.payload,
      };
    case UPDATE_MODAL_START_DATE:
      return {
        ...state,
        NewEventStart: action.payload,
      };
    case UPDATE_MODAL_END_DATE:
      return {
        ...state,
        NewEventEnd: action.payload,
      };
    case UPDATE_USER_MODAL:
      return {
        ...state,
        NewEventUser: action.payload,
      };
    case UPDATE_MODAL_START_TIME:
      return {
        ...state,
        NewEventStartTime: action.payload,
      };
    case UPDATE_MODAL_END_TIME:
      return {
        ...state,
        NewEventEndTime: action.payload,
      };
    case EMPTY_MODAL:
      return {
        ...state,
        NewEventStart: new Date().toISOString().slice(0, 10),
        NewEventEnd: new Date().toISOString().slice(0, 10),
        NewEventStartTime: '00:00:00',
        NewEventEndTime: '00:00:00',
        NewEventText: '',
        modalCreateEvent: false,
        modalUpdate: false,
      };
    default:
      return state;
  }
};

export default mainReducer;
