export namespace Booking {
  export type PossibleBookingTime = {
    from: number,
    to: number
  }

  export enum BookingPhase {
    SELECT_DATE = "SELECT_DATE",
    SELECT_TIME = "SELECT_TIME",
    FILL_CONTACT = "FILL_CONTACT"
  }

  export type UserData = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  }
}