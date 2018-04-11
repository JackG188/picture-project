import { SELECT_LOCATION, VIEW_MODAL } from '../actions/actionTypes';
import { PinProps } from '../components/pin';
import pins from '../data/pins';

export interface RootState {
    selectedLocation: string;
    viewModal: boolean;
    pins: PinProps[];
}

const initState: RootState = {
    selectedLocation: '',
    viewModal: false,
    pins: pins.pins
};

const rootReducer = (state = initState, action: any) => {
    switch (action.type) {
        case SELECT_LOCATION:
            console.log(state);
            return {
                ...state,
                selectedLocation: action.payload
            };
        case VIEW_MODAL:
            return {
                ...state,
                viewModal: !state.viewModal
            };
        default:
            return state;
    }
};

export default rootReducer;