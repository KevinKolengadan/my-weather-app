import {Geocode} from '../model/geocode.model';

export const initialState = new Geocode([]);
export const SET_GEOCODE = 'SET_GEOCODE';

export function geocodeReducer(state = initialState, action: {type: string, payload: Geocode}): {} {
  switch (action.type) {
    case SET_GEOCODE:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
