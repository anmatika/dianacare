import { types } from "mobx-state-tree";

const Appointment = types.model({
  id: types.number,
  startDate: types.string,
  startTime: types.string,
  endDate: types.string,
  endTime: types.string,
  userId: types.number
})


const Store = types
  .model("Store", {
    selectedDate: types.maybeNull(types.Date),
    selectedTime: types.maybeNull(types.string),
    appointments: types.array(Appointment),
    modalIsOpen: types.boolean,
    bookingConfirmed: types.boolean
  })
  .actions(self => {
    return {
      selectDate(date: Date) {
        self.selectedDate = date
      },
      selectTime(time: string) {
        self.selectedTime = time
      },
      setModalIsOpen(isOpen: boolean) {
        self.modalIsOpen = isOpen
      },
      setBookingConfirmed(isConfirmed: boolean) {
        self.bookingConfirmed = isConfirmed
      }
    };
  });

export default Store;