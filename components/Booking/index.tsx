import { Provider } from "mobx-react"
import makeInspectable from 'mobx-devtools-mst';
import BookingCalendar from "./BookingCalendar"
import BookingDayView from "./BookingDayView"
import BookingForm from "./BookingForm"
import Store from './store'

export const Booking = (props: any) => {
  const { appointments } = props

  const store = Store.create({
    selectedDate: null,
    selectedTime: null,
    appointments,
    modalIsOpen: false,
    bookingConfirmed: false
  })

  return (
    <Provider store={makeInspectable(store)}>
      <div className="grid grid-cols-2 gap-4">
        <BookingCalendar />
        <BookingDayView />
        <BookingForm />
      </div>
    </Provider>
  )
}
