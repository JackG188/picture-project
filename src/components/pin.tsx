import * as React from 'react';
import './pin.scss';

export interface PinProps {
  text: string;
  lat: number;
  lng: number;
}

class Pin extends React.Component<PinProps> {
  render() {
    return (
      <div onClick={this.showPhotos} className="pin">
        {this.props.text}
      </div>
    );
  }

  showPhotos = () => {
    window.alert('hi');
  }
}

export default Pin;
