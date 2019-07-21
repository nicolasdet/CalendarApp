import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { updateDatePicker } from '../../actions/main.actions';

const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    start: new Date(),
    end: new Date(moment().add(1, 'days')),
    title: 'Some title'
  },
  {
    start: new Date(moment().add(2, 'days')),
    end: new Date(moment().add(2, 'days')),
    title: 'Some title'  
  }
];

class MyCalendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDateSelected: localizer,
    };
  }

  selectSlot = (e) => {
    console.log(e);
  }

  getDateCalendar() {
   return this.props.data.SelectStatus ? new Date(this.props.data.DateSelected) : null;
  }

  render() {

    return (
      <div className="main-calendar">
        <Calendar
          localizer={this.state.currentDateSelected}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          step={120}
          timeslots={1}
          selectable={true}
          onSelectSlot={this.selectSlot}
          date={this.getDateCalendar()}
          onNavigate={(date) => { this.props.updateDatePicker(date.toISOString().slice(0, 10))  }}
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
    }
  };
}

export default connect(mapStateToProps, {updateDatePicker})(MyCalendar);
