import React, { useContext, useMemo } from "react";
import { TodosContext } from "../context/todoContext";

function RemainingItems() {
  const { todos } = useContext(TodosContext);
  function remainingItemsCalculations() {
    return todos.filter((todo) => !todo.isComplete).length;
  }

  const remainingItems = useMemo(remainingItemsCalculations, [todos]);

  return <span>{remainingItems} items remaining</span>;
}

export default RemainingItems;
