import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import * as ReactModal from 'react-modal';
import * as ReactMarkdown from 'react-markdown';

import './modal.scss';
import { viewModal } from '../actions';

interface StateProps {
    location?: string;
    show: boolean;
}

interface ModalState {
    markdown: any;
    location: string;
}

interface DispatchProps {
    toggleModal: () => void;
}

const mapStateToProps = (state: RootState) => {
    return { 
        location: state.selectedLocation, 
        show: state.viewModal
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleModal: () => dispatch(viewModal())
    };
};

class ConnectedModal extends React.Component<StateProps & DispatchProps, ModalState> {

    constructor(props: StateProps & DispatchProps) {
        super(props);

        this.state = {
            markdown: '',
            location: ''
        };
    }

    componentDidUpdate() {
        if (this.props.location !== '' && this.props.location !== undefined && this.state.markdown === '') {
            const formattedLocation = this.props.location.toLowerCase();
            const readmePath = require(`../data/content/markdown/${formattedLocation}.md.js`);
            // console.log(readmePath);
            // if (readmePath !== undefined) {
            //     fetch(readmePath)
            //     .then(response => {
            //         console.log(response);
            //         return response.body;
            //     })
            //     .then(text => {
            this.setState({
            markdown: readmePath.default
            });
                // });
        }
    }

    render() {
        return (
            <ReactModal 
                    isOpen={this.props.show} 
                    onRequestClose={this.toggleModal} 
                    shouldCloseOnEsc={true} 
                    shouldCloseOnOverlayClick={true}
            >
                <div className="modalBody">
                    {this.state !== undefined && (
                        <ReactMarkdown className="markdownContainer" source={this.state.markdown}/>
                    )}
               </div>
            </ReactModal>
        );
    }

    toggleModal = () => {
        this.props.toggleModal();
        this.setState({markdown: ''});
    }
} 

const Modal = connect<any, any, any, any>(mapStateToProps, mapDispatchToProps)(ConnectedModal);

export default Modal;