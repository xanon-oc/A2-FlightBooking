import { DELETEBOOKINGS, FLIGHTBOOKINGS } from "./actionTypes";

export const flightBookings = (value) => {
  return {
    type: FLIGHTBOOKINGS,
    payload: value,
  };
};
export const deleteBooking = (value) => {
  return {
    type: DELETEBOOKINGS,
    payload: value,
  };
};
