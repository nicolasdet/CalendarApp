import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import relatif */
import './ModalCreateEvent.css';
import AppTitle from '../../composants/AppTitle';
import AppCalendar from '../Calendar/Calendar';
import CustomDatePicker from '../../composants/CustomDatePicker';
import UserSelectPicker from '../../composants/UserSelectPicker';
import Typography     from '@material-ui/core/Typography';
import Modal          from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Button         from '@material-ui/core/Button';
// import history from '../../history';
import { 
  closeModal, updateTextModal, updateModalStartDate, updateModalEndDate, 
  updateUserModal, createNewEventAction, updateModalStartTime, updateModalEndTime
   } from '../../actions/main.actions';


class ModalCreateEvent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      esling: false
    };

  }

  updateDate(e) {
    this.props.updateDatePicker(e.target.value);
  }

  createEventTrigger() {
    if(this.props.data.NewEventUser !== ''){
      this.props.createNewEventAction();
    }
  }

  ModalForm() {

    return ( 
        <form noValidate className="FormModalCreateEvent">
          <div>
            <TextField
              id="date"
              label='Start date'
              type="date"
              value={this.props.data.NewEventStart}
              onChange={(e) => { this.props.updateModalStartDate(e.target.value); }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              type="time"
              label='time'
              value={this.props.data.NewEventStartTime}
              onChange={(e) => { this.props.updateModalStartTime(e.target.value); }}
              className='time-picker'
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </div>
          <div>
            <TextField
              id="date"
              label='End Date'
              type="date"
              value={this.props.data.NewEventEnd}
              onChange={(e) => { this.props.updateModalEndDate(e.target.value); }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              type="time"
              label='time'
              value={this.props.data.NewEventEndTime}
              onChange={(e) => { this.props.updateModalEndTime(e.target.value); }}
              className='time-picker'
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            </div>
            <TextField
              id="date"
              label='Text'
              type="text"
              value={this.props.data.NewEventText}
              onChange={(e) => { this.props.updateTextModal(e.target.value); }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div>
            <InputLabel htmlFor="outlined-age-simple">user</InputLabel>
            <Select
              label='User'
              value={this.props.data.NewEventUser}
              onChange={(e) => { this.props.updateUserModal(e.target.value); }}
              input={<OutlinedInput name="age" id="outlined-age-simple" />}
            >
            <MenuItem value='nicolas' >Nicolas</MenuItem>
            <MenuItem value='kevin'   >Kevin</MenuItem>
          </Select>
          </div>
            <Button variant="outlined" onClick={() => { this.createEventTrigger() }} >
              Create event
            </Button>
        </form>
        );
  }

  render() {
    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.data.modalCreateEvent}
          onClose={this.props.closeModal}
        >
          <div  className="modal-paper">
              <Typography variant="h6" id="modal-title">
                 Create an event
              </Typography>
              {this.ModalForm()}
          </div>
        </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      Home: state.main.Home,
      DateSelected: state.main.DateSelected,
      UserSelected: state.main.UserSelected,
      modalCreateEvent: state.main.modalCreateEvent,
      NewEvent : state.main.NewEvent,
      NewEventStart: state.main.NewEventStart,
      NewEventEnd: state.main.NewEventEnd,
      NewEventText: state.main.NewEventText,
      NewEventUser: state.main.NewEventUser,
      NewEventStartTime: state.main.NewEventStartTime,
      NewEventEndTime: state.main.NewEventEndTime
    }
  };
}

export default connect(mapStateToProps, { 
  closeModal, updateTextModal, updateModalStartDate, updateModalEndDate, 
  updateUserModal, createNewEventAction, updateModalEndTime, updateModalStartTime
})(ModalCreateEvent);
