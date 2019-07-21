export const UPDATE_HOME = 'UPDATE_HOME';
export const UPDATE_DATE = 'UPDATE_DATE';

export const updateDatePicker = dateValue => ({
  type: UPDATE_DATE,
  payload: dateValue
});
