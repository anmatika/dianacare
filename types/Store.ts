import { Booking } from "./Booking"

export namespace Store {
  export type Model = {
    selectedDate: Date,
    selectedTime: string,
    appointments: Appointment[],
    modalIsOpen: boolean,
    loading: {
      isLoading: boolean,
      text: string
    },
    bookingPhase: Booking.BookingPhase
  }


  export type Appointment = {
    id: number,
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string,
    userId: number
  }

  export type Loading = {
    isLoading: boolean,
    text: string
  }
}