import React, { Component } from 'react';
import './map.scss';
import Pin from './pin'
import GoogleMapReact from 'google-map-react';

class Map extends Component {
//54.9692157,-1.6714645,
    static defaultProps = {
        center: {
            lat: 54.9692157,
            lng: -1.6714645
        },
        zoom: 15
        };

  render() {
    return (
        <div className="mapContainer" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={ {key:''} /* YOUR KEY HERE */ }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Pin
            lat={54.9692157}
            lng={-1.6714645}
            text={'Home'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map; 