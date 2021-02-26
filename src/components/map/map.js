import React, {Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle
} from "react-google-maps";
import { useHistory } from "react-router"

const Map = props => {

    let iconMarker = new window.google.maps.MarkerImage(
      "https://lh3.googleusercontent.com/bECXZ2YW3j0yIEBVo92ECVqlnlbX9ldYNGrCe0Kr4VGPq-vJ9Xncwvl16uvosukVXPfV=w300",
      null, /* size is determined at runtime */
      null, /* origin is 0,0 */
      null, /* anchor is bottom center of the scaled image */
      new window.google.maps.Size(32, 32)
    );

    let history = useHistory();

    const onMarkerClick = (evt) => {
      // console.log(evt);
      history.push({
        pathname: "/report",
        state: { lat: evt.latLng.lat(), lng: evt.latLng.lng() }
      });
    };

    return (
      <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center}
        onClick={onMarkerClick} 
      >
        
              <Marker 
                position={{
                  lat: props.latitude, // 48.9185051,
                  lng: props.longitude // 24.7152683
                }}
              />


        {props.sanitizers.map(sanitizer => {
          return (
            <Fragment key={sanitizer.id}>
              <Marker
                icon={iconMarker} 
                title={sanitizer.title} 
                position={{
                  lat: parseFloat(sanitizer.latitude),
                  lng: parseFloat(sanitizer.longitude)
                }}
              /> 
            </Fragment>
          );
        })}

        {props.places.map(place => {
          return (
            <Fragment key={place.id}>

              {/* <Marker
                position={{
                  lat: parseFloat(place.latitude),
                  lng: parseFloat(place.longitude)
                }}
              /> */}
              {place.circle && <Circle
                defaultCenter={{
                  lat: parseFloat(place.latitude),
                  lng: parseFloat(place.longitude)
                }}
                radius={place.circle.radius}
                options={place.circle.options}
              />}
            </Fragment>
          );
        })}
      </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map));
