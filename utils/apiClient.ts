import { Booking } from "../types/Booking";

export function Client(store: any) {
  async function bookTime(data: Booking.BookingData) {
    const req = {
      user: data,
      appointment: {
        date: {
          year: store.selectedDate.getFullYear(),
          month: store.selectedDate.getMonth(),
          date: store.selectedDate.getDate()
        },
        time: store.selectedTime
      }
    }

    const res = await fetch('api/createAppointment', {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    return res;
  }

  return {
    bookTime
  }
}