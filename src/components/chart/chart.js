import React, { Component } from "react";
import { Chart } from 'react-charts'
import covidService from '../../services/covid.service';

export default class MyChart extends Component {
  covidService = new covidService();
  
  state = {
    load_vol_chart: true,
    volume_chart_data: []
  };

  constructor(props) {
    super(props);
    this.updateStats();
  }

  updateStats() {
    this.covidService.getStats()
      .then((stats) => {
        // console.log(stats);
        // this.setState({ volume_chart_data: stats });
        this.setState({
          volume_chart_data: [
            {
              label: "Захворювань",
              data: stats.map(vol => ({
                x: Date.parse(vol.date),
                y: vol.cases
              }))
            },
            {
              label: "Смертей",
              data: stats.map(vol => ({
                x: Date.parse(vol.date),
                y: vol.deaths
              }))
            },
            {
              label: "Вилікувалося",
              data: stats.map(vol => ({
                x: Date.parse(vol.date),
                y: vol.recovered
              }))
            }
          ]
        })
      });
  }
      
  render() {
  
      return (
        <>
        <div style={{ height: '70vh', width: '100%' }} >
            <Chart data={this.state.volume_chart_data}  
            series={ {showPoints: false} } 
            axes={[
              { primary: true, type: 'time', position: 'bottom' },
              { type: 'linear', position: 'left' }
            ]} 
          tooltip />
        </div>    
        </>
      )
      
  }
}