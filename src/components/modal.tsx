import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import './modal.scss';

interface StateProps {
    location?: string;
    show?: boolean;
}

const mapStateToProps = (state: RootState) => {
    return { 
        location: state.selectedLocation, 
        show: state.viewModal
    };
};

class ConnectedModal extends React.Component<{} & StateProps> {

    constructor(props: {} & StateProps) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.show ? 'modal' : 'hide'}>
               Test {this.props.location}
            </div>
        );
    }
}

const Modal = connect<any, any, any, any>(mapStateToProps, null)(ConnectedModal);

export default Modal;