import React, { useContext } from "react";
import { TodosContext } from "../context/todoContext";

function TodoCheckAll() {
  const { todos, setTodos } = useContext(TodosContext);
  function checkAll() {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div className="button" onClick={checkAll}>
      Check All
    </div>
  );
}

export default TodoCheckAll;
