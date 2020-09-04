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
      {/* <form>
        <h1>Налаштування</h1>
        <h2>привіт, {this.state.username}</h2>
        <input
          type="text"
          onChange={this.myChangeHandler}
        />
      </form> */}
        <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
        <h1>МАЛЮК ЦОІ</h1>
        <Typography variant="h6" noWrap>
            Alert COVID
        </Typography>
        </Paper>
      </>
    );
  }
}

