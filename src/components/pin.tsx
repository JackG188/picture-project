import * as React from 'react';
import './pin.scss';
import { connect } from 'react-redux';
import { selectLocation, viewModal } from '../actions/index';

export interface PinProps {
  lat: number;
  lng: number;
  text: string;
}

interface DispatchFromProps {
  selectLocation: (location: string) => void;
  toggleModal: () => void;
}

const mapDispatchToProps = (dispatch: any, ownProps: PinProps) => {
  return {
    selectLocation: (location: string) => dispatch(selectLocation(location)),
    toggleModal: () => dispatch(viewModal())
  };
};

class ConnectedPin extends React.Component<PinProps & DispatchFromProps, {}> {

  constructor(props: PinProps & DispatchFromProps) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.showPhotos} className="pin">
        {this.props.text}
      </div>
    );
  }

  showPhotos = () => {
    this.props.selectLocation(this.props.text);
    this.props.toggleModal();
  }
}

const Pin = connect<any, any, any, any>(null, mapDispatchToProps)(ConnectedPin);

export default Pin;
