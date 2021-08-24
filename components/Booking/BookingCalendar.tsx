import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { Store } from '../../types/Store';
import classNames from 'classnames';

const BookingCalendar = inject('store')(observer((props: any) => {
  const { store } = props
  console.log('booking calendar props', props)
  console.log('todolist', store.todoList)
  console.log('store.appointments', store.appointments)

  const [value, setValue] = useState<Date[] | null>(null)

  useEffect(() => {
    // if (store.appointments.length > 0) {
    //   const dates = store.appointments.map((ap: any) => {
    //     const parsed = JSON.parse(ap.startDate)
    //     const date = new Date(parsed)
    //     return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    //   })

    //   setValue(dates)
    // }
  }, [store.appointments])

  function getTileClassName(p: CalendarTileProperties): string {
    function isSameDay(datestring1: string, date2: Date) {
      const date1 = new Date(JSON.parse(datestring1))
      return date1.getDate() === date2.getDate()
    }

    const hasAppointments = store.appointments.some((a: Store.Appointment) => isSameDay(a.startDate, p.date))

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