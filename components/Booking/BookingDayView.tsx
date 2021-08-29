import { observer, inject } from 'mobx-react'
import possibleTimes from '../../utils/booking.possibleTimes'
import classnames from 'classnames'
import { Store } from '../../types/Store';

const BookingDayView = inject('store')(observer((props: any) => {
  const { store } = props;
  const { appointments, selectedDate, selectedTime } = store

  function bookTime(from: any, to: any) {
    console.log('booktime', from, to)
    store.selectTime(`${from}-${to}`)
  }

  if (store.selectedDate == null) return <div />

  function getClassNames(from: any, to: any) {
    const isSelectedTime = store.selectedTime === `${from}-${to}`
    const isBooked = isBookedTime(from, to)

    const classes = classnames({
      'border-2': true,
      'p-2': true,
      'rounded': true,
      'hover:bg-blue-100': !isSelectedTime,
      'bg-green-100': (isSelectedTime && !isBooked),
      'bg-gray-100': isBooked,
      'text-gray-300': isBooked,
      'cursor-not-allowed': isBooked,
      'cursor-pointer': !isBooked
    })

    return classes
  }

  function isBookedTime(from: number, to: number) {
    const isBooked = appointments.some((appointment: Store.Appointment) => {
      const appointmentStartDate = new Date(JSON.parse(appointment.startDate))
      if (appointmentStartDate.getDate() === selectedDate.getDate()) {
        return appointment.startTime === from.toString()
      }
    })

    return isBooked;
  }

  return (
    <div>

      <h2>Valitse kellonaika</h2>
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