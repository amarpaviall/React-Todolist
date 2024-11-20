import { useEffect, useRef, useState } from "react";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../App.css";
import "../reset.css";

function App() {
  const [name, setName] = useState("");
  const nameInputEl = useRef(null);
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
        todo.isEditing = true;
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

  function remainingItems() {
    return todos.filter((todo) => !todo.isComplete).length;
  }

  function checkAll() {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;
      return todo;
    });
    setTodos(updatedTodos);
  }

  function clearCompleted() {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  }

  function filters(filter) {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  }

  useEffect(() => {
    //console.log("use effect");
    nameInputEl.current.focus(); // focus on current element that is name input
  }, []); // Empty dependency array means this runs once when mounted
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <div className="name-container">
          <h2>What is your Name?</h2>
          <form action="">
            <input
              type="text"
              ref={nameInputEl}
              className="todo-input"
              value={name}
              placeholder="Enter your name"
              onChange={(event) => setName(event.target.value)}
            />
          </form>
          {name && <p className="name-label">Hello, {name}</p>}
        </div>
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
            remainingItems={remainingItems}
            checkAll={checkAll}
            clearCompleted={clearCompleted}
            filters={filters}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
