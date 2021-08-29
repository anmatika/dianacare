import { Provider } from "mobx-react"
import makeInspectable from 'mobx-devtools-mst';
import Store from './store'
import BookingContainer from "./BookingContainer";
import { Booking } from "../../types/Booking";

export default function BookingComponent(props: any) {
  const { appointments } = props

  const store = Store.create({
    selectedDate: null,
    selectedTime: null,
    appointments,
    modalIsOpen: false,
    loading: null,
    bookingPhase: Booking.BookingPhase.SELECT_DATE
  })

  return (
    <Provider store={makeInspectable(store)}>
      <BookingContainer />
    </Provider>
  )
}
