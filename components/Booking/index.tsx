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
    todoList: ["Buy milk"]
  })

  return (
    <Provider store={store}>
      <BookingCalendar />
      {openedDayView && <BookingDayView date={openedDayView} />}
      <BookingForm appointments={appointments} />
    </Provider>
  )
}
