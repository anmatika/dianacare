
export namespace Store {
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