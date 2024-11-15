import { useState } from "react";
import "../App.css";
import "../reset.css";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish React Series",
      isComplete: false,
    },
    {
      id: 2,
      title: "Go to Grocery",
      isComplete: false,
    },
    {
      id: 3,
      title: "Do other thing",
      isComplete: false,
    },
  ]);

  const [todoInput, setTodoInput] = useState(""); // for form input
  const [idFortodo, setIdFortodo] = useState(4); // for form input

  function addTodo(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    //using spread operator to add // Update todos with an array
    setTodos([
      ...todos,
      {
        id: idFortodo, // new id
        title: todoInput, //updated input
        isComplete: false,
      },
    ]);

    setTodoInput(""); // when update make todo value blank

    //setIdFortodo(idFortodo + 1);
    setIdFortodo((prevIdFortodo) => prevIdFortodo + 1);
  }

  function handleInput(event) {
    setTodoInput(event.target.value);
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={todoInput}
            onChange={handleInput}
            className="todo-input"
            placeholder="Enter Data"
          />
        </form>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label">{todo.title}</span>
              </div>
              <button className="x-button">
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>
          <span>3 items remaining</span>
        </div>
        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
