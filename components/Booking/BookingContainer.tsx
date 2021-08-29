import { observer, inject } from 'mobx-react'
import BookingCalendar from "./BookingCalendar"
import BookingDayView from "./BookingDayView"
import BookingForm from "./BookingForm"
import Loader from "react-loader-spinner";
import { Booking } from '../../types/Booking';

const BookingContainer = inject('store')(observer((props: any) => {
  const { store } = props;

  if (store.loading) {
    return (
      <div>
        <h1> {store.loading.text} </h1>

        <Loader type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          visible={store.isLoading}
        />
      </div>
    )
  }

  function renderPhase() {
    switch (store.bookingPhase) {
      case Booking.BookingPhase.SELECT_DATE:
        return <BookingCalendar />
      case Booking.BookingPhase.SELECT_TIME:
        return <BookingDayView />
      case Booking.BookingPhase.FILL_CONTACT:
        return <BookingForm />
    }
  }

  return (
    <div className="p-8 ">
      {renderPhase()}
    </div>
  )
}))

export default BookingContainer