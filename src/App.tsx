import * as React from 'react';
import './App.css';
import Map, { MapProps } from './components/map';
import Modal from './components/modal';

class App extends React.Component {

  static defaultProps: MapProps = {
    center: {
      lat: 54.9692157,
      lng: -1.6714645
    },
    zoom: 4
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Picture Project</h1>
        </header>
        <Map center={App.defaultProps.center} zoom={App.defaultProps.zoom}/>
        <Modal/>
      </div>
    );
  }
}

export default App;