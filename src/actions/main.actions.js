export const UPDATE_HOME = 'UPDATE_HOME';
export const UPDATE_DATE = 'UPDATE_DATE';
export const UPDATE_USER = 'UPDATE_USER';

export const updateDatePicker = dateValue => ({
  type: UPDATE_DATE,
  payload: dateValue
});

export const updateUserPicker = userValue => ({
  type: UPDATE_USER,
  payload: userValue
})