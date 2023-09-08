import { useDispatch, useSelector } from "react-redux";
import { flightBookings } from "../redux/FlightBooking/action";
import imageFrame1 from "../assets/icons/Frame.svg";
import { v4 as uuidv4 } from "uuid";
const UserForm = () => {
  const flightBookData = useSelector((state) => state.flightBookingData);
  console.log(flightBookData);
  const dispatch = useDispatch();

  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const from = form.from.value;
    const to = form.to.value;
    const date = form.date.value;
    const guests = form.guests.value;
    const ticketClass = form.ticketClass.value;
    const id = uuidv4();

    const passengerData = { id, from, to, date, guests, ticketClass };
    dispatch(flightBookings(passengerData));
  };

  return (
    <form className="first-hero lws-inputform" onSubmit={handleFormData}>
      {/* <!-- From --> */}
      <div className="des-from">
        <p>Destination From</p>
        <div className="flex flex-row">
          <img src="../assets/icons/Frame.svg" alt="" />
          <select
            className="outline-none px-2 py-2 w-full"
            name="from"
            id="lws-from"
            required
          >
            <option value="" hidden>
              Please Select
            </option>
            <option>Dhaka</option>
            <option>Sylhet</option>
            <option>Saidpur</option>
            <option>Cox's Bazar</option>
          </select>
        </div>
      </div>

      {/* <!-- To --> */}
      <div className="des-from">
        <p>Destination To</p>
        <div className="flex flex-row">
          <img src={imageFrame1} alt="" />
          <select
            className="outline-none px-2 py-2 w-full"
            name="to"
            id="lws-to"
            required
          >
            <option value="" hidden>
              Please Select
            </option>
            <option>Dhaka</option>
            <option>Sylhet</option>
            <option>Saidpur</option>
            <option>Cox's Bazar</option>
          </select>
        </div>
      </div>

      {/* <!-- Date --> */}
      <div className="des-from">
        <p>Journey Date</p>
        <input
          type="date"
          className="outline-none px-2 py-2 w-full date"
          name="date"
          id="lws-date"
          required
        />
      </div>

      {/* <!-- Guests --> */}
      <div className="des-from">
        <p>Guests</p>
        <div className="flex flex-row">
          <img src="./img/icons/Vector (1).svg" alt="" />
          <select
            className="outline-none px-2 py-2 w-full"
            name="guests"
            id="lws-guests"
            required
          >
            <option value="" hidden>
              Please Select
            </option>
            <option value="1">1 Person</option>
            <option value="2">2 Persons</option>
            <option value="3">3 Persons</option>
            <option value="4">4 Persons</option>
          </select>
        </div>
      </div>

      {/* <!-- Class --> */}
      <div className="des-from !border-r-0">
        <p>Class</p>
        <div className="flex flex-row">
          <img src="./img/icons/Vector (3).svg" alt="" />
          <select
            className="outline-none px-2 py-2 w-full"
            name="ticketClass"
            id="lws-ticketClass"
            required
          >
            <option value="" hidden>
              Please Select
            </option>
            <option>Business</option>
            <option>Economy</option>
          </select>
        </div>
      </div>

      {flightBookData.length >= 3 ? (
        <button
          className="text-sm addCity bg-red-600 text-white"
          disabled
          type="submit"
          id="lws-addCity"
        >
          <svg
            width="15px"
            height="15px"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-sm ">Book Disabled</span>
        </button>
      ) : (
        <button className="text-sm addCity" type="submit" id="lws-addCity">
          <svg
            width="15px"
            height="15px"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-sm ">Book the flight</span>
        </button>
      )}
    </form>
  );
};

export default UserForm;
