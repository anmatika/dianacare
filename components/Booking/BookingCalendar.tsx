import { observer, inject } from 'mobx-react'
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { Store } from '../../types/Store';
import classNames from 'classnames';
import { isDatesSame } from '../../utils/date';

const BookingCalendar = inject('store')(observer((props: any) => {
  const { store } = props
  console.log('booking calendar props', props)
  console.log('todolist', store.todoList)
  console.log('store.appointments', store.appointments)

  function getTileClassName(p: CalendarTileProperties): string {

    const hasAppointments = store.appointments.some((a: Store.Appointment) =>
      isDatesSame(new Date(JSON.parse(a.startDate)), p.date))

    return classNames({
      'has-appointments': hasAppointments,
      'no-appointments': !hasAppointments
    })

  }

  return (
    <div>
      <Calendar
        onClickDay={(value: Date) => {
          store.selectDate(value)
        }}
        locale="fi-FI"
        tileClassName={getTileClassName}
      />
    </div>
  )
}))

export default BookingCalendar;