import { Provider } from "mobx-react"
import makeInspectable from 'mobx-devtools-mst';
import BookingCalendar from "./BookingCalendar"
import BookingDayView from "./BookingDayView"
import BookingForm from "./BookingForm"
import Store from './store'

import Loader from "react-loader-spinner";

export const Booking = (props: any) => {
  const { appointments } = props

  const store = Store.create({
    selectedDate: null,
    selectedTime: null,
    appointments,
    modalIsOpen: false,
    isLoading: false
  })

  console.log('isLoading', store.isLoading)

  return (
    <Provider store={makeInspectable(store)}>
      <div className="grid grid-cols-2 gap-4">
        <Loader type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          visible={store.isLoading}
        />
        {!store.isLoading && <BookingCalendar />}
        {!store.isLoading && <BookingDayView />}
        <BookingForm />
      </div>
    </Provider>
  )
}
