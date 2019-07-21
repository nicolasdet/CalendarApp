import React, { Component } from "react";
import { connect }          from 'react-redux';
import Loader               from 'react-loader-spinner';

/* Material UI */
// Ref-card: https://material-ui.com/fr/components/cards/
import Card           from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions    from '@material-ui/core/CardActions';
import CardContent    from '@material-ui/core/CardContent';
import CardMedia      from '@material-ui/core/CardMedia';
import Button         from '@material-ui/core/Button';
import Typography     from '@material-ui/core/Typography';

/* Import relatif */
import "./Landing.css";
import history                               from '../../history';
//import { fetchCatsList, startSpinnerAction, setCatAction } from '../../actions/main.actions';


class Landing extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="gallery">
       <h1>Mon calendrier</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      Home:           state.main.Home,  
    }
  };
}

export default connect(mapStateToProps) (Landing);
