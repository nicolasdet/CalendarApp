import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

function UserSelectPicker(props) {
  const DateSelected = props.date;
  const { user } = props;

  return (
    <form noValidate>
       <InputLabel htmlFor="outlined-age-simple">user</InputLabel>
        <Select
          value={user}
          onChange={props.update}
          input={<OutlinedInput name="age" id="outlined-age-simple" />}
        >

          <MenuItem value='nicolas' >Nicolas</MenuItem>
          <MenuItem value='kevin'   >Kevin</MenuItem>
        </Select>
    </form>
  );
}

export default UserSelectPicker;