import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

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
      {/* <form>
        <h1>Налаштування</h1>
        <h2>привіт, {this.state.username}</h2>
        <input
          type="text"
          onChange={this.myChangeHandler}
        />
      </form> */}
        <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
        <h1>Моніторинг осередків підпалювання</h1>
        <Typography variant="h6">
        <p>
        Мета проєкту – створити доступний аналог безконтактного дезінфектора, а також розробка додатку 
        
        для оповіщення користувачів інформацією про ризики захворювання з цільовим призначенням в закладах 
        освіти.​</p>

        <p>Розробник: 
          <br />
          Возняк Мирослав - розробка додатку та сайту
        </p>

        </Typography>
        </Paper>
      </>
    );
  }
}

