import { EVENT_LIST_KEVIN, EVENT_LIST_NICOLAS } from '../api/usersEvents';

export const UPDATE_HOME = 'UPDATE_HOME';
export const UPDATE_DATE = 'UPDATE_DATE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_EVENT_LISTE = 'UPDATE_EVENT_LISTE';

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

export const getEventUser = (user) => {
  return (dispatch, getState) => { 
  		if(user === 'kevin'){
  			dispatch(setEventListe(EVENT_LIST_KEVIN));
  		}else if(user === 'nicolas') {
  			dispatch(setEventListe(EVENT_LIST_NICOLAS));
  		}
  }
}