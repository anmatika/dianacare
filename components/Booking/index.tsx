import { Provider } from "mobx-react"
import React, { useState } from "react"
import BookingCalendar from "./BookingCalendar"
import BookingDayView from "./BookingDayView"
import BookingForm from "./BookingForm"
import Store from './store'

export const Booking = (props: any) => {
  const { appointments } = props
  const [openedDayView, setOpenedDayView] = useState(null)
  const store = Store.create({
    selectedDate: null,
    selectedTime: null
  })

  return (
    <Provider store={store}>
      <div className="grid grid-cols-2">
        <BookingCalendar />
        <BookingDayView />
        <BookingForm appointments={appointments} />
      </div>
    </Provider>
  )
}
