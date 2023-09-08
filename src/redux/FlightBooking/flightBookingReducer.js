import { DELETEBOOKINGS, FLIGHTBOOKINGS } from "./actionTypes";

const initialState = {
  flightBookingData: [],
};

const flightBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTBOOKINGS:
      return {
        ...state,
        ...state.flightBookingData.push(action.payload),
      };
    case DELETEBOOKINGS:
      return {
        ...state,
        // value: action.payload,
      };

    default:
      return state;
  }
};

export default flightBookingReducer;