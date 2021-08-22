import { observer, inject } from 'mobx-react'
import possibleTimes from './booking.possibleTimes'

const BookingDayView = inject('store')(observer((props: any) => {
  const { store } = props;
  function bookTime(from: any, to: any) {
    console.log('booktime', from, to)
  }

  if (store.selectedDate == null) return <div />

  return (
    <div>
      {possibleTimes.map((t, i: number) => (
        <div
          onClick={() => bookTime(t.from, t.to)}
          className="border-2 p-2 rounded hover:bg-blue-100 cursor-pointer"
          key={`possibletime-${i}`}>
          {t.from} - {t.to}
        </div>
      ))}
      {JSON.stringify(store.selectedDate)}
    </div>
  )
}))

export default BookingDayView