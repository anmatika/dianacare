import React, { useState } from "react";
import { types } from "mobx-state-tree";
import { observer } from "mobx-react";

const Store = types
  .model("Store", {
    bookings: types.array(types.Date),
    selectedDate: types.maybeNull(types.Date)
  })
  .actions(self => {
    return {
      selectDate(date: Date) {
        self.selectedDate = date
      },
      addTodo(booking: any) {
        self.bookings.push(booking);
      },
      removeTodo(booking: any) {
        self.bookings.remove(booking);
      }
    };
  });

export default Store;