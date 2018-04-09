import * as React from 'react';
import './map.scss';
import Pin from './pin';
import GoogleMapReact from 'google-map-react';

export interface MapProps {
  center: LocationObject;
  zoom: number;
}
//
export interface LocationObject {
  lat: number;
  lng: number;
}

class Map extends React.Component<MapProps> {
  render() {
    return (
      <div className="mapContainer">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{key: ''}/* YOUR KEY HERE */}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Pin
              lat={54.9692157}
              lng={-1.6714645}
              text={'Newcastle'}
            />
            <Pin
              lat={41.3948976}
              lng={2.0787282}
              text={'Barcelona'}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map; 