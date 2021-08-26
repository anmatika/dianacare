export namespace Rest {
  export type Appointment = {
    date: {
      year: number,
      month: number,
      date: number
    },
    time: string
  }

  export type User = {
    firstName: string,
    lastName: string
    email: string
    address?: string,
    city?: string,
    postalCode?: string
    phoneNumber?: string
  }
}