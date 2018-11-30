import * as React from 'react';
import './App.css';
import Grid from './components/grid/grid';
import Modal from './components/modal/modal';

class App extends React.Component {

  // static defaultProps: MapProps = {
  //   center: {
  //     lat: 54.9692157,
  //     lng: -1.6714645
  //   },
  //   zoom: 4
  // };

  render() {
    return (
      <div className="App">
        <Grid />
        <Modal/>
      </div>
    );
  }
}

export default App;