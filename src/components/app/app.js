import React, { Component } from 'react';
import DailyStats from '../daily-stats/daily-stats'
import Map from '../map/map'
import BottomNav from '../bottom-nav/bottom-nav'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Help() {
  return <h3>Вбирайте чисті труси і вірус вас омине</h3>;
}


export default class App extends Component {

  render()  { // { match }
    return (
      <>
      <h1>COVID-alert</h1>
      
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Статистика</Link>
            </li>
            <li>
              <Link to="/help">Допомога</Link>
            </li>
            <li>
              <Link to="/map">Карта</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <DailyStats />
          </Route>
        </Switch>
      </div>
    </Router>

      {/* <BottomNav /> */}
      </>
    )
  }

}