import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { updateDatePicker, createEvent , updateEvent} from '../../actions/main.actions';

const localizer = momentLocalizer(moment);


class MyCalendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDateSelected: localizer,
    };
  }

  selectSlot = (e) => {
    this.props.createEvent(e);
  }
  selectEvent = (e) => {
    console.log(e);
    this.props.updateEvent(e);
  }

  getDateCalendar() {
   return this.props.data.SelectStatus ? new Date(this.props.data.DateSelected) : null;
  }



  render() {

    return (
      <div className="main-calendar">
        <Calendar
          localizer={this.state.currentDateSelected}
          events={this.props.data.EventList}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          step={90}
          timeslots={1}
          selectable={true}
          onSelectSlot={this.selectSlot}
          date={this.getDateCalendar()}
          onNavigate={(date) => { this.props.updateDatePicker(date.toISOString().slice(0, 10))  }}
          onSelectEvent={this.selectEvent}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      Home: state.main.Home,
      SelectStatus: state.main.SelectStatus,
      DateSelected: state.main.DateSelected,
      EventList: state.main.EventList
    }
  };
}

export default connect(mapStateToProps, {updateDatePicker, createEvent, updateEvent})(MyCalendar);
