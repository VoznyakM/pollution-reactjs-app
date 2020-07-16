import React, { Component } from 'react';
import DailyStats from '../daily-stats/daily-stats'
import BottomNavigation from '../bottom-navigation/bottom-navigation'

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
      <BottomNavigation />
      </>
    )
  }

}