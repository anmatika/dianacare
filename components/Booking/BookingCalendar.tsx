import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import Calendar from 'react-calendar';

const BookingCalendar = inject('store')(observer((props: any) => {
  const { store } = props
  console.log('booking calendar props', props)
  console.log('todolist', store.todoList)

  const [value, setValue] = useState<Date[] | null>(null)

  useEffect(() => {
    setValue([
      new Date(2021, 7, 12),
      new Date(2021, 7, 3)])
  }, [])

  return (
    <>
      {/* {store.todoList?.map((t, i) => <div key={i}> {t} </div>)} */}
      {JSON.stringify(store.selectedDate)}
      <Calendar
        value={value}
        onClickDay={(value: Date) => {
          console.log('clicked date', value)
          // store.addTodo(value.toDateString())
          store.selectDate(value)
        }}
        locale="fi-FI"
      />
    </>
  )
}))

export default BookingCalendar;