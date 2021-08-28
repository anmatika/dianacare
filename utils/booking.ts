import { Booking } from "../types/Booking";
import { Store } from "../types/Store";
import possibleBookingTimes from './booking.possibleTimes'
import { isDatesSame } from "./date";

export default function GetBookingTimesLeftInDate(appointments: Store.Appointment[], currentDate: Date): Booking.PossibleBookingTime[] {
  const datesAppointments = appointments.filter((a: Store.Appointment) => isDatesSame(a.startDate, currentDate))

  const bookingTimesLeft = possibleBookingTimes.filter(p => {
    const appointmentDateHasThisPossibleTime = datesAppointments.some((a: Store.Appointment) => a.startTime === p.from.toString())
    if (appointmentDateHasThisPossibleTime) {
      return false;
    }

    return true
  })

  return bookingTimesLeft
}