import {Weather} from '../model/weather.model';

export const initialState: Weather = {};
export const SET_WEATHER = 'SET_WEATHER';

export function weatherReducer(state = initialState, action: {type: string, payload: Weather}): {} {
  switch (action.type) {
    case SET_WEATHER:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
