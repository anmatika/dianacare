import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export default function CalendarPage() {
  const [value, setValue] = useState<Date[] | null>(null)

  useEffect(() => {
    setValue([
      new Date(2021, 7, 12),
      new Date(2021, 7, 3)])
  }, [])

  return (
    <Calendar
      value={value}
      onClickDay={(value: Date) => {
        console.log('clicked date', value)
      }}
      locale="fi-FI"
    />
  );
}
