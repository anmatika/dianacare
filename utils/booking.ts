import { Booking } from "../types/Booking";
import { Store } from "../types/Store";
import possibleBookingTimes from './booking.possibleTimes'
import { areDatesSame } from "./date";

/** Gets free booking times in given date
 * @param  {Store.Appointment[]} appointments
 * @param  {Date} currentDate
 * @returns {Booking.PossibleBookingTime[]} free booking times
 */
export function getBookingTimesLeftInDate(appointments: Store.Appointment[], currentDate: Date): Booking.PossibleBookingTime[] {
  const datesAppointments = appointments.filter((a: Store.Appointment) => areDatesSame(a.startDate, currentDate))

  const bookingTimesLeft = possibleBookingTimes.filter(p => {
    const appointmentDateHasThisPossibleTime = datesAppointments.some((a: Store.Appointment) => a.startTime === p.from.toString())
    if (appointmentDateHasThisPossibleTime) {
      return false;
    }

    return true
  })

  return bookingTimesLeft
}


export function isDateFullyBooked(appointments: Store.Appointment[], currentDate: Date): boolean {
  return getBookingTimesLeftInDate(appointments, currentDate).length === 0
}

/** Is the given time of given date booked
 * @param  {number} time
 * @param  {Date} selectedDate
 * @param  {Store.Appointment[]} appointments in store
 */
export function isBookedTime(time: string, selectedDate: Date, appointments: Store.Appointment[]) {
  const currentDateAppointments = appointments.filter((appointment: Store.Appointment) => {
    return areDatesSame(appointment.startDate, selectedDate)
  })

  const isBooked = currentDateAppointments.some((currentDateAppointment: Store.Appointment) => {
    return currentDateAppointment.startTime === time.toString()
  });

  return isBooked;
}