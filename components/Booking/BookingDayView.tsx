import { observer, inject } from 'mobx-react'

const BookingDayView = inject('store')(observer((props: any) => {
  const { store } = props;
  return (
    <div>


      {JSON.stringify(store.selectedDate)}
    </div>
  )
}))

export default BookingDayView