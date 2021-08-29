import { types } from "mobx-state-tree";
import { Booking } from "../../types/Booking";
import { Store } from "../../types/Store";

const Appointment = types.model({
  id: types.number,
  startDate: types.string,
  startTime: types.string,
  endDate: types.string,
  endTime: types.string,
  userId: types.number
})

const Loading = types.model("Loading", {
  isLoading: types.boolean,
  text: types.string
})


const MobxStore = types
  .model("Store", {
    selectedDate: types.maybeNull(types.Date),
    selectedTime: types.maybeNull(types.string),
    appointments: types.array(Appointment),
    modalIsOpen: types.boolean,
    loading: types.maybeNull(types.frozen(Loading)),
    bookingPhase: types.enumeration<Booking.BookingPhase>(Object.values(Booking.BookingPhase))
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
      setLoading(loading: Store.Loading) {
        self.loading = loading
      },
      setBookingPhase(phase: Booking.BookingPhase) {
        self.bookingPhase = phase
      }
    };
  });



export default MobxStore;