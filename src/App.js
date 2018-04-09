import React, { Component } from 'react';
import './App.css';
import Map from './components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Picture Project</h1>
        </header>
        <Map></Map>
      </div>
    );
  }
}

export default App;
