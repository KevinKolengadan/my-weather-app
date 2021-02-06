import * as moment from 'moment';

export const initialState = moment().format('H');
export const SET_HOUR_SELECTION = 'SET_HOUR_SELECTION';

export function hourSelectionReducer(state = initialState, action: {type: string, payload: string}): {} {
  switch (action.type) {
    case SET_HOUR_SELECTION:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
