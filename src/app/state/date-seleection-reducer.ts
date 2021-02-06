import {Geocode} from '../model/geocode.model';

export const initialState = 0;
export const SET_DATE_SELECTION = 'SET_DATE_SELECTION';

export function dateSelectionReducer(state = initialState, action: {type: string, payload: number}): {} {
  switch (action.type) {
    case SET_DATE_SELECTION:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
