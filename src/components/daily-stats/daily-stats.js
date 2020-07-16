import React, { Component } from "react";
import covidService from '../../services/covid.service';

export default class DailyStats extends Component {

  covidService = new covidService('/stats');

  state = {
    cases: null,
    deaths: null,
    recovered: null
  };

  constructor(props) {
    super(props);
    this.updateStats();
  }

  updateStats() {
    this.covidService.getStats()
      .then((stats) => {
        console.log(stats[0]);
        this.setState({
          cases: stats[0].cases,
          deaths: stats[0].deaths,
          recovered: stats[0].recovered
        })
      })
  }

  render() {
    const { cases, deaths, recovered } = this.state;
    return (
      <>
        <h2>Випадків {cases}</h2>
        <h2>Смертей {deaths}</h2>
        <h2>Виздоровлень {recovered}</h2>
      </>
    );
  }
}
