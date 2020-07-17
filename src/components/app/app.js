import React, { Component } from 'react';
import DailyStats from '../daily-stats/daily-stats'
import BottomNav from '../bottom-nav/bottom-nav'

export default class App extends Component {

  constructor(props) {
    super(props);
    // ..
  }

  render()  {
    return (
      <>
      <h1>COVID-alert</h1>
      <DailyStats />
      <BottomNav />
      </>
    )
  }

}