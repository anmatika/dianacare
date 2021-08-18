import React, { useState } from "react";
import { types } from "mobx-state-tree";
import { observer } from "mobx-react";

const Store = types
  .model("Store", {
    todoList: types.array(types.string)
  })
  .actions(self => {
    return {
      addTodo(todo: any) {
        self.todoList.push(todo);
      },
      removeTodo(todo: any) {
        self.todoList.remove(todo);
      }
    };
  });

export default Store;