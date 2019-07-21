import React from 'react';
import TextField from '@material-ui/core/TextField';

function CustomDatePicker(props) {
  const DateSelected = props.date;

  return (
    <form noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue={DateSelected}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => { props.update(e); }}
      />
    </form>
  );
}

export default CustomDatePicker;
