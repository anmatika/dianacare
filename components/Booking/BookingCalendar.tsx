import { observer, inject } from 'mobx-react'
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { Store } from '../../types/Store';
import classNames from 'classnames';
import { addDays, isDatesSame, isWeekend, isYesterday } from '../../utils/date';
import { isDateFullyBooked } from '../../utils/booking';
import { Booking } from '../../types/Booking';

const BookingCalendar = inject('store')(observer((props: any) => {
  const { store } = props

  function getTileClassName(p: CalendarTileProperties): string {
    const hasAppointments = store.appointments.some((a: Store.Appointment) =>
      isDatesSame(a.startDate, p.date))

    return classNames({
      'has-appointments': hasAppointments,
      'no-appointments': !hasAppointments,
      'fully-booked': isDateFullyBooked(store.appointments, p.date),
      'yesterday': isYesterday(p.date)
    })
  }

  function setDisabledTiles({ date }: any): boolean {
    return isWeekend(date) || isDateFullyBooked(store.appointments, date)
  }

  return (
    <div>
      <h2>Valitse päivä</h2>
      <Calendar
        maxDate={addDays(new Date(), 365)}
        minDate={new Date()}
        minDetail="month"
        maxDetail="month"
        showNavigation={true}
        showNeighboringMonth={false}
        onClickDay={(value: Date) => {
          store.selectDate(value)
          store.setBookingPhase(Booking.BookingPhase.SELECT_TIME)
        }}
        value={store.selectedDate}
        locale="fi-FI"
        tileClassName={getTileClassName}
        tileDisabled={setDisabledTiles}
      />
    </div>
  )
}))

export default BookingCalendar;