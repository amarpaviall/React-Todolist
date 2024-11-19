import { useState } from "react";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../App.css";
import "../reset.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish React Series",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "Go to Grocery",
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: "Do other thing",
      isComplete: false,
      isEditing: false,
    },
  ]);

  const [idFortodo, setIdFortodo] = useState(4); // for form input

  function addTodo(todo) {
    //using spread operator to add // Update todos with an array
    setTodos([
      ...todos,
      {
        id: idFortodo, // new id
        title: todo, //updated input
        isComplete: false,
        isEditing: false,
      },
    ]);

    //setIdFortodo(idFortodo + 1);
    setIdFortodo((prevIdFortodo) => prevIdFortodo + 1);
  }
  function deleteTodo(id) {
    //console.log("Deleting Todo for Id : " + id);
    setTodos([...todos].filter((todo) => todo.id !== id)); // create copy, filter out object and update state
  }

  function completeTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    //console.log(event.target.value);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }

        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function cancelEdit(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            markAsEditing={markAsEditing}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            deleteTodo={deleteTodo}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
