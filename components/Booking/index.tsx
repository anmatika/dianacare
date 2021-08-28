import { Provider } from "mobx-react"
import makeInspectable from 'mobx-devtools-mst';
import Store from './store'
import BookingContainer from "./BookingContainer";

export const Booking = (props: any) => {
  const { appointments } = props

  const store = Store.create({
    selectedDate: null,
    selectedTime: null,
    appointments,
    modalIsOpen: false,
    loading: null
  })

  return (
    <Provider store={makeInspectable(store)}>
      <BookingContainer />
    </Provider>
  )
}
