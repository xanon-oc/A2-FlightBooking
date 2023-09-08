import { createStore } from "redux";
import flightBookingReducer from "./FlightBooking/flightBookingReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(flightBookingReducer);
export default store;
