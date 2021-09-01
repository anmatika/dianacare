import { storeAnnotation } from "mobx/dist/internal";
import { Booking } from "../types/Booking";
import { Store } from "../types/Store";
import possibleBookingTimes from './booking.possibleTimes'
import { isDatesSame } from "./date";

export function getBookingTimesLeftInDate(appointments: Store.Appointment[], currentDate: Date): Booking.PossibleBookingTime[] {
  const datesAppointments = appointments.filter((a: Store.Appointment) => isDatesSame(a.startDate, currentDate))

  const bookingTimesLeft = possibleBookingTimes.filter(p => {
    const appointmentDateHasThisPossibleTime = datesAppointments.some((a: Store.Appointment) => a.startTime === p.from.toString())
    if (appointmentDateHasThisPossibleTime) {
      return false;
    }

    return true
  })

  console.log('bookingtimes left', currentDate, bookingTimesLeft)

  return bookingTimesLeft
}

export function isDateFullyBooked(appointments: Store.Appointment[], currentDate: Date): boolean {
  const f = getBookingTimesLeftInDate(appointments, currentDate).length === 0
  return f;
}