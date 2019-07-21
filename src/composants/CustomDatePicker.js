import React from 'react';
import TextField from '@material-ui/core/TextField';

function CustomDatePicker(props) {
  const DateSelected = props.date;
  const { name } = props;

  return (
    <form noValidate>
      <TextField
        id="date"
        label={name}
        type="date"
        defaultValue={DateSelected}
        value={DateSelected}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => { props.update(e); }}
      />
    </form>
  );
}

export default CustomDatePicker;
