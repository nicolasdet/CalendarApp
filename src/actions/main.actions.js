import { EVENT_LIST_KEVIN, EVENT_LIST_NICOLAS } from '../api/usersEvents';

export const UPDATE_HOME = 'UPDATE_HOME';
export const UPDATE_DATE = 'UPDATE_DATE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_EVENT_LISTE = 'UPDATE_EVENT_LISTE';
export const CREATE_EVENT = 'CREATE_EVENT';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const UPDATE_MODAL_TEXT = 'UPDATE_MODAL_TEXT';
export const UPDATE_MODAL_START_DATE = 'UPDATE_MODAL_START_DATE';
export const UPDATE_MODAL_END_DATE = 'UPDATE_MODAL_END_DATE';
export const UPDATE_USER_MODAL = 'UPDATE_USER_MODAL';
export const UPDATE_MODAL_START_TIME = 'UPDATE_MODAL_START_TIME';
export const UPDATE_MODAL_END_TIME = 'UPDATE_MODAL_END_TIME';

export const updateDatePicker = dateValue => ({
  type: UPDATE_DATE,
  payload: dateValue
});


export const updateUserPicker = userValue => ({
  type: UPDATE_USER,
  payload: userValue
})

export const setEventListe = listeEvent => ({
  type: UPDATE_EVENT_LISTE,
  payload: listeEvent
})

export const createEvent = e => ({
  type: CREATE_EVENT,
  payload: e 
})

export const getEventUser = (user) => {
  return (dispatch, getState) => { 
      // API GET 
  		if(user === 'kevin'){
  			dispatch(setEventListe(EVENT_LIST_KEVIN));
  		}else if(user === 'nicolas') {
  			dispatch(setEventListe(EVENT_LIST_NICOLAS));
  		}
  }
}

export const createNewEventAction = () => {
  return (dispatch, getState) => { 
    const state = getState();
    const { NewEventUser, NewEventText, NewEventStart, NewEventEnd, NewEventStartTime, NewEventEndTime } =  state.main;

    let event = {
        start: new Date(NewEventStart +'T'+ NewEventStartTime),
        end:  new Date(NewEventEnd +'T'+ NewEventEndTime),
        title: NewEventText
      };
      console.log(event);
      // API POST
      if(NewEventUser === 'kevin'){
        EVENT_LIST_KEVIN.push(event)
        dispatch(setEventListe(EVENT_LIST_KEVIN));
      }else if(NewEventUser === 'nicolas') {
        EVENT_LIST_NICOLAS.push(event)
        dispatch(setEventListe(EVENT_LIST_NICOLAS));
      }
        /*
      */
  }
}

export const closeModal = () => ({
    type: CLOSE_MODAL,
})

export const updateTextModal = modalText => ({
  type: UPDATE_MODAL_TEXT,
  payload: modalText  
})

export const updateModalStartDate = startDate => ({
  type: UPDATE_MODAL_START_DATE,
  payload: startDate  
})

export const updateModalEndDate = endDate => ({
  type: UPDATE_MODAL_END_DATE,
  payload: endDate  
}) 

export const updateUserModal = user => ({
  type: UPDATE_USER_MODAL,
  payload: user 
})
export const updateModalStartTime = time => ({
  type: UPDATE_MODAL_START_TIME,
  payload: time 
})
export const updateModalEndTime = time => ({
  type: UPDATE_MODAL_END_TIME,
  payload: time 
})

 