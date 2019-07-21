import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import relatif */
import './Landing.css';
import AppTitle from '../../composants/AppTitle';
import AppCalendar from '../Calendar/Calendar';
import CustomDatePicker from '../../composants/CustomDatePicker';
// import history from '../../history';
import { updateDatePicker } from '../../actions/main.actions';


class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      esling: false
    };

    this.updateDate = this.updateDate.bind(this);
  }

  updateDate(e) {
    this.props.updateDatePicker(e.target.value);
  }

  render() {
    return (
      <div className="main">
        <AppTitle />
        <CustomDatePicker date={this.props.data.DateSelected} update={this.updateDate} />
        <AppCalendar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      Home: state.main.Home,
      DateSelected: state.main.DateSelected
    }
  };
}

export default connect(mapStateToProps, { updateDatePicker })(Landing);
