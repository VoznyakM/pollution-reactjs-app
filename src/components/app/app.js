import React, { Component } from 'react';
import DailyStats from '../daily-stats/daily-stats'
import Map from '../map/map'
import Settings from '../settings/settings'
// import BottomNav from '../bottom-nav/bottom-nav'
import MyAppBar from '../app-bar/app-bar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from '../chat/chat'


function Help() {
  return <>
  <h3>Знання достовірних фактів і дотримання запобіжних заходів допоможуть вам захистити себе й оточуючих. 
    Виконуйте поради місцевого органу охорони здоров’я.</h3>
<p>Як зупинити поширення COVID-19:
часто мийте руки милом і водою або використовуйте спиртовмісний антисептик для рук;
тримайтеся на безпечній відстані від усіх, хто кашляє або чхає;
вдягайте маску, якщо дотримуватися дистанції неможливо;
не торкайтеся очей, носа або рота;
під час кашлю або чхання прикривайте ніс і рот зігнутим ліктем або серветкою;
не виходьте з дому, якщо погано почуваєтесь;
якщо у вас лихоманка, кашель і вам важко дихати, зверніться до лікаря.</p>
  </>;
}


export default class App extends Component {


  
  render()  { // { match }
  


    return (
      <>

      <MyAppBar />
      
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Статистика</Link>
            </li>
            <li>
              <Link to="/help">Рекомендації</Link>
            </li>
            <li>
              <Link to="/map">Карта</Link>
            </li>
            <li>
              <Link to="/chat">Зв'язок з лікарем</Link>
            </li>
            <li>
              <Link to="/settings">Налаштування</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>      
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