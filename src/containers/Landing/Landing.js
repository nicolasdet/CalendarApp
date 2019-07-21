import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import relatif */
import './Landing.css';
import AppTitle from '../../composants/AppTitle';
import AppCalendar from '../Calendar/Calendar';
import CustomDatePicker from '../../composants/CustomDatePicker';
import UserSelectPicker from '../../composants/UserSelectPicker';
// import history from '../../history';
import { updateDatePicker, updateUserPicker, getEventUser } from '../../actions/main.actions';


class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      esling: false
    };

    this.updateDate = this.updateDate.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateDate(e) {
    this.props.updateDatePicker(e.target.value);
  }

  updateUser(e) {
    this.props.updateUserPicker(e.target.value);
    this.props.getEventUser(e.target.value);
  }

  render() {
    return (
      <div className="main">
        <AppTitle />
        <div className="top-elements">
          <CustomDatePicker date={this.props.data.DateSelected} update={this.updateDate} />
          <UserSelectPicker user={this.props.data.UserSelected} update={this.updateUser} />
        </div>
        <AppCalendar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      Home: state.main.Home,
      DateSelected: state.main.DateSelected,
      UserSelected: state.main.UserSelected
    }
  };
}

export default connect(mapStateToProps, { updateDatePicker, updateUserPicker, getEventUser })(Landing);
