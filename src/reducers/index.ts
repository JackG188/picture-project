import { SELECT_LOCATION, VIEW_MODAL } from '../actions/actionTypes';

export interface RootState {
    selectedLocation: string;
    viewModal: boolean;
}

const initState: RootState = {
    selectedLocation: '',
    viewModal: false
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