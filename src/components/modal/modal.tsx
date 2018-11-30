import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import * as ReactModal from 'react-modal';
import * as ReactMarkdown from 'react-markdown';

import './modal.scss';
import { viewModal, setMarkdown } from '../../actions';

interface StateProps {
    location?: string;
    show: boolean;
    markdown: string;
}

interface DispatchProps {
    toggleModal: () => void;
    setMarkdown: (md: string) => void;
}

const mapStateToProps = (state: RootState) => {
    return { 
        location: state.selectedLocation, 
        show: state.viewModal,
        markdown: state.markdown
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleModal: () => dispatch(viewModal()),
        setMarkdown: (md: string) => dispatch(setMarkdown(md))
    };
};

class ConnectedModal extends React.Component<StateProps & DispatchProps> {

    constructor(props: StateProps & DispatchProps) {
        super(props);
    }

    componentDidUpdate() {
        if (this.props.location !== '' && this.props.location !== undefined) {
            const formattedLocation = this.props.location.toLowerCase();
            try {
                this.props.setMarkdown(require(`../../data/content/markdown/${formattedLocation}.md.js`).default);
            } catch {
                console.log('error reading markdown file');
            }
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
                        <ReactMarkdown className="markdownContainer" escapeHtml={false} source={this.props.markdown}/>
                    )}
               </div>
            </ReactModal>
        );
    }

    toggleModal = () => {
        this.props.toggleModal();
    }
} 

const Modal = connect<any, any, any, any>(mapStateToProps, mapDispatchToProps)(ConnectedModal);

export default Modal;