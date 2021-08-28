import { observer, inject } from 'mobx-react'
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { Store } from '../../types/Store';
import classNames from 'classnames';
import { isDatesSame, isWeekend } from '../../utils/date';
import GetBookingTimesLeftInDate from '../../utils/booking';

const BookingCalendar = inject('store')(observer((props: any) => {
  const { store } = props
  console.log('booking calendar props', props)
  console.log('todolist', store.todoList)
  console.log('store.appointments', store.appointments)

  function getTileClassName(p: CalendarTileProperties): string {
    const hasAppointments = store.appointments.some((a: Store.Appointment) =>
      isDatesSame(a.startDate, p.date))

    const dateFullyBooked = GetBookingTimesLeftInDate(store.appointments, p.date).length === 0
    console.log('dateFullyBooked', dateFullyBooked, p.date.getDate())

    return classNames({
      'has-appointments': hasAppointments,
      'no-appointments': !hasAppointments,
      'fully-booked': dateFullyBooked
    })
  }

  function setDisabledTiles({ date }: any): boolean {
    const dateFullyBooked = GetBookingTimesLeftInDate(store.appointments, date).length === 0
    return isWeekend(date) || dateFullyBooked
  }

  return (
    <div>
      <Calendar
        onClickDay={(value: Date) => {
          store.selectDate(value)
        }}
        locale="fi-FI"
        tileClassName={getTileClassName}
        tileDisabled={setDisabledTiles}
      />
    </div>
  )
}))

export default BookingCalendar;