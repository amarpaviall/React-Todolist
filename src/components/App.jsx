import { useEffect, useMemo, useRef, useState } from "react";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../App.css";
import "../reset.css";
import useLocalStorage from "../hooks/useLocalStorage";
import { TodosContext } from "../context/todoContext";

function App() {
  //const [name, setName] = useState("");
  const [name, setName] = useLocalStorage("name", "");

  const nameInputEl = useRef(null);

  const [todos, setTodos] = useLocalStorage("todos", []);

  const [idFortodo, setIdFortodo] = useLocalStorage("idFortodo", 1); // for form input

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    //console.log("use effect");

    nameInputEl.current.focus(); // focus on current element that is name input
    //setName(JSON.parse(localStorage.getItem("name") ?? ""));
    return () => {
      // Cleanup logic here if needed
    };
  }, []); // Empty dependency array means this runs once when mounted

  function handleInputName(event) {
    setName(event.target.value);
    //localStorage.setItem("name", JSON.stringify(event.target.value));
  }

  function todosFiltered() {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  }
  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        idFortodo,
        setIdFortodo,
        filter,
        setFilter,
        todosFiltered,
      }}
    >
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
                onChange={handleInputName}
              />
            </form>
            {name && <p className="name-label">Hello, {name}</p>}
          </div>
          <h2>Todo App</h2>
          <TodoForm />
          {todos.length > 0 ? <TodoList /> : <NoTodos />}
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
