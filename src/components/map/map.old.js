import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const Marker = props => {
  return <div className="SuperAwesomePin"><img src="http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1526555652/user_my7yzc.png" alt="" /></div>
}

export default class Map extends Component {
  
  static defaultProps = {
    center: {
      lat: 48.92,
      lng: 24.71
    },
    zoom: 11
  };

  state = {
    center: {
      lat: 48.92,
      lng: 24.71
    },
    //zoom: 11
  };

  componentDidMount() {
    // Get location of user
    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
      this.setState({
        center: {
          lat: latitude,
          lng: longitude
        }
      });
    };
  
    const error = () => {
      console.log("Unable to retrieve your location");
    };
  
    navigator.geolocation.getCurrentPosition(success, error);
  }
 
  
  render() {
    const { lat, lng } = this.state;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBLlwasnMbQP4pp1Qx0poPnCqnJ_C1lPhk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
          <Marker lat={lat} lng={lng} />



        </GoogleMapReact>
      </div>
    );
  }
}