import * as React from 'react';
import './tile.scss';
import { connect } from 'react-redux';
import { selectLocation, viewModal } from '../../../actions/index';

interface TileProps {
    location: string;
    date: string;
    img: string;
}

interface TileDispatchProps {
    selectLocation: (location: string) => void;
    toggleModal: () => void;
  }
  
const mapDispatchToProps = (dispatch: any, ownProps: TileProps) => {
    return {
      selectLocation: (location: string) => dispatch(selectLocation(location)),
      toggleModal: () => dispatch(viewModal())
    };
};

class ConnectedTile extends React.Component<TileProps & TileDispatchProps, {}> {

    render() {
        return (
            <div className="tile" onClick={this.showPhotos}>
                <img src={this.props.img} />
                <div className="tile-info">
                    <span className="location">{this.props.location}</span>
                    <span className="date">{this.props.date}</span>
                </div>
            </div>
        );
    }

    showPhotos = () => {
        this.props.selectLocation(this.props.location);
        this.props.toggleModal();
      }
}

const Tile = connect<any, any, any, any>(null, mapDispatchToProps)(ConnectedTile);

export default Tile;