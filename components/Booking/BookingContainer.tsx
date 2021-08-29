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
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <BookingCalendar />
      <BookingDayView />
      <BookingForm />
    </div>
  )
}))

export default BookingContainer