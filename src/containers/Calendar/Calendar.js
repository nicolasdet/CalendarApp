import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    start: new Date(),
    end: new Date(moment().add(1, 'days')),
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
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      Home: state.main.Home
    }
  };
}

export default connect(mapStateToProps)(MyCalendar);
