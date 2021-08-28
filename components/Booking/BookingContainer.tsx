import { observer, inject } from 'mobx-react'
import BookingCalendar from "./BookingCalendar"
import BookingDayView from "./BookingDayView"
import BookingForm from "./BookingForm"
import Loader from "react-loader-spinner";

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

  return (
    <div className="grid grid-cols-2 gap-4">
      <BookingCalendar />
      <BookingDayView />
      <BookingForm />
    </div>
  )
}))

export default BookingContainer