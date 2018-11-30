import * as React from 'react';
import './map.scss';
import { connect } from 'react-redux';
import Pin, { PinProps } from '../pin/pin';
import GoogleMapReact, { Options } from 'google-map-react';
import { RootState } from '../../reducers';
import mapStyles from '../mapStyles';

export interface MapProps {
  center: LocationObject;
  zoom: number;
  pins?: PinProps[];
}

export interface LocationObject {
  lat: number;
  lng: number;
}

const mapStateToProps = (state: RootState) => {
  return {
    pins: state.pins
  };
};

const mapOptions: Options = {
  styles: mapStyles
};

class ConnectedMap extends React.Component<MapProps> {
  render() {
    return (
      <div className="mapContainer">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            options={mapOptions}
            bootstrapURLKeys={{key: ''}/* YOUR KEY HERE */}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.props.pins !== undefined && this.props.pins.map(pin => (
              <Pin
                lat={pin.lat}
                lng={pin.lng}
                text={pin.text}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

const Map = connect<any, any, any, any>(mapStateToProps, {})(ConnectedMap);

export default Map; 