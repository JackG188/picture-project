import { SELECT_LOCATION, VIEW_MODAL } from './actionTypes';

export const selectLocation = (location: string) => ({
    type: SELECT_LOCATION,
    payload: location
});

export const viewModal = () => ({
    type: VIEW_MODAL
});