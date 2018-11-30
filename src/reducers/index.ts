import { SELECT_LOCATION, VIEW_MODAL } from '../actions/actionTypes';
import { PinProps } from '../components/pin/pin';
import pins from '../data/pins';

export interface RootState {
    selectedLocation: string;
    viewModal: boolean;
    pins: PinProps[];
    markdown: string;
}

const initState: RootState = {
    selectedLocation: '',
    viewModal: false,
    pins: pins.pins,
    markdown: ''
};

const rootReducer = (state = initState, action: any) => {
    switch (action.type) {
        case SELECT_LOCATION:
            return {
                ...state,
                selectedLocation: action.payload
            };
        case VIEW_MODAL:
            return {
                ...state,
                viewModal: !state.viewModal
            };
        case 'SET_MARKDOWN':
            return {
                ...state,
                markdown: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;