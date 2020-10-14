import React, { Component } from "react";
import MyChart from '../chart/chart'
import covidService from '../../services/covid.service';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';




export default class DailyStats extends Component {
  
  covidService = new covidService();

  state = {
    cases: null,
    deaths: null,
    recovered: null,
    loading: true
  };
  

  constructor(props) {
    super(props);
    this.updateStats();
  }

  updateStats() {
    this.covidService.getTodayStats()
      .then((stats) => {
        this.setState({
          cases: stats.cases,
          deaths: stats.deaths,
          recovered: stats.recovered,
          loading: false
        })
      });

      this.covidService.getYesterdayStats()
      .then((stats) => {
        this.setState({
          ycases: stats.cases,
          ydeaths: stats.deaths,
          yrecovered: stats.recovered
        })
      })  
  }

  render() {
    const { cases, deaths, recovered, loading, ycases, ydeaths, yrecovered, } = this.state;

    if (loading) {
      return ( <CircularProgress /> );
    }

    return (
      <>
      <Paper variant="outlined">
      <Typography variant="h6" component="h3" style={{padding: 1 + 'em'}}>
      К-сть захворювань: {cases} <small style={{fontSize: '0.6em'}}>{parseFloat(cases/ycases).toFixed(2)}%</small>
      </Typography>
      {/* <Typography component="p">+20%</Typography> */}
      </Paper>
 

      <Paper variant="outlined">
      <Typography variant="h6" component="h3" style={{padding: 1 + 'em'}}>
      К-сть смертей: {deaths} <small style={{fontSize: '0.6em'}}>{parseFloat(deaths/ydeaths).toFixed(2)}%</small>
      </Typography>
      {/* <Typography component="p">+20%</Typography> */}
      </Paper>
      <Paper variant="outlined">
      <Typography variant="h6" component="h3" style={{padding: 1 + 'em'}}>
      К-сть виздоровлень: {recovered} <small style={{fontSize: '0.6em'}}>{parseFloat(recovered/yrecovered).toFixed(2)}%</small>
      </Typography>
      {/* <Typography component="p">+20%</Typography> */}
      </Paper>
      <Paper variant="outlined">
        <Typography variant="h6" component="h3" style={{padding: 1 + 'em'}}>
          Динаміка захворювань
        </Typography>  
        <MyChart />
      </Paper>        
      </>
    );
  }
}
