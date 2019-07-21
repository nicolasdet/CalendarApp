import { API_URL } from '../.config';
export const UPDATE_HOME 				        = "UPDATE_HOME";

/*
export const fetchCatsListAction = CatsList => ({
  type: GET_ALL_CATS,
  payload: CatsList
});

export const fetchFailAction = Message => ({
  type: FETCH_FAIL,
  payload: Message
});


export const fetchCatsList = () => {
  return (dispatch, getState) => { 
    fetch(API_URL + '/getCats', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {

      if(typeof(json.error) != 'undefined') {
        return setTimeout(() => {dispatch(fetchFailAction("Une érreur s'est produite durant le chargement des petits chats à adoper. Veuillez nous excuser."))}, 1500);
      }
    	setTimeout(() => {dispatch(fetchCatsListAction(json))}, 1500);
    })
    .catch((e) => dispatch(fetchFailAction("Une érreur s'est produite durant le chargement des petits chats à adoper. Veuillez nous excuser.")));
  }
}
*/