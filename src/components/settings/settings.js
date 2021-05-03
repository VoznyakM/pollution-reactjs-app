import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import covidService from '../../services/covid.service';

export default class Settings extends Component {

  covidService = new covidService();

  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <>
        <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
        <h1>Моніторинг осередків підпалювання</h1>
        <Typography variant="h6">
        <p>
        Мета проєкту – допомогти еко-волонтерам фіксувати і повідомляти небайдужих про осередки підпалювання сухого листя та трави.
        </p>

        <p>Розробник: 
          <br />
          Возняк Мирослав 
        </p>

        </Typography>
        </Paper>
      </>
    );
  }
}

