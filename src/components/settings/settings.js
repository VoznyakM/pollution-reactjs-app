import React, { Component } from 'react';
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
      <form>
        <h1>Налаштування</h1>
        <h2>привіт, {this.state.username}</h2>
        <input
          type="text"
          onChange={this.myChangeHandler}
        />
      </form>
      </>
    );
  }
}

