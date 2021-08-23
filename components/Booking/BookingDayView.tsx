import { observer, inject } from 'mobx-react'
import possibleTimes from './booking.possibleTimes'
import classnames from 'classnames'

const BookingDayView = inject('store')(observer((props: any) => {
  const { store } = props;
  function bookTime(from: any, to: any) {
    console.log('booktime', from, to)
    store.selectTime(`${from}-${to}`)
  }

  if (store.selectedDate == null) return <div />

  function getClassNames(from: any, to: any) {
    const isSelectedTime = store.selectedTime === `${from}-${to}`

    const classes = classnames({
      'border-2': true,
      'p-2': true,
      'rounded': true,
      'hover:bg-blue-100': !isSelectedTime,
      'bg-green-100': isSelectedTime,
      'cursor-pointer': true
    })

    return classes
  }

  return (
    <div>
      {possibleTimes.map((t, i: number) => (
        <div
          onClick={() => bookTime(t.from, t.to)}
          className={getClassNames(t.from, t.to)}
          key={`possibletime-${i}`}>
          {t.from} - {t.to}
        </div>
      ))}
    </div>
  )
}))

export default BookingDayView