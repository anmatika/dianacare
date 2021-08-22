import { types } from "mobx-state-tree";

const Store = types
  .model("Store", {
    selectedDate: types.maybeNull(types.Date),
    selectedTime: types.maybeNull(types.string)
  })
  .actions(self => {
    return {
      selectDate(date: Date) {
        self.selectedDate = date
      },
      selectTime(time: string) {
        self.selectedTime = time
      }
    };
  });

export default Store;