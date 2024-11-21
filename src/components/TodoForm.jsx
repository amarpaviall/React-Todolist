import React, { useContext, useState } from "react";
import { TodosContext } from "../context/todoContext";

function TodoForm() {
  const { todos, setTodos, idFortodo, setIdFortodo } = useContext(TodosContext);
  const [todoInput, setTodoInput] = useState(""); // for form input
  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idFortodo, // new id
        title: todoInput, //updated input
        isComplete: false,
        isEditing: false,
      },
    ]);
    setIdFortodo((prevIdFortodo) => prevIdFortodo + 1);
    setTodoInput(""); // when update make todo value blank
  }
  return (
    <form action="#" onSubmit={addTodo}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder="Enter Todo Name"
      />
    </form>
  );
}

export default TodoForm;
