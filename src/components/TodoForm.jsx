import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

function TodoForm(props) {
  const [todoInput, setTodoInput] = useState(""); // for form input
  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }
    props.addTodo(todoInput);
    setTodoInput(""); // when update make todo value blank
  }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder="Enter Data"
      />
    </form>
  );
}

export default TodoForm;
