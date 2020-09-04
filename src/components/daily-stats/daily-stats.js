import React, { Component } from "react";
import MyChart from '../chart/chart'
import covidService from '../../services/covid.service';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';




export default class DailyStats extends Component {
  
  covidService = new covidService();

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

      <Paper variant="outlined">
      <Typography variant="h5" component="h3" style={{padding: 1 + 'em'}}>
      К-сть захворювань {cases}
      </Typography>
      {/* <Typography component="p">+20%</Typography> */}
      </Paper>
 

      <Paper variant="outlined">
      <Typography variant="h5" component="h3" style={{padding: 1 + 'em'}}>
      К-сть смертей {deaths}
      </Typography>
      {/* <Typography component="p">+20%</Typography> */}
      </Paper>
      <Paper variant="outlined">
      <Typography variant="h5" component="h3" style={{padding: 1 + 'em'}}>
      К-сть виздоровлень {recovered}
      </Typography>
      {/* <Typography component="p">+20%</Typography> */}
      </Paper>
      <Paper variant="outlined">
        <Typography variant="h5" component="h3" style={{padding: 1 + 'em'}}>
          Динаміка захворювань
        </Typography>  
        <MyChart />
      </Paper>        
      </>
    );
  }
}
