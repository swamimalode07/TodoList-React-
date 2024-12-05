import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./stylefortodo.css";


export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "sample", id: uuidv4(), done: false }]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return; // Prevent empty tasks
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), done: false },
    ]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => setNewTodo(event.target.value);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const Uppercasing = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, task: todo.task.toUpperCase() }))
    );
  };

  const toLower = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toLowerCase() } : todo
      )
    );
  };

  const MarkAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <h4>To-Do List</h4>
      <input
        placeholder="Add a Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>All Tasks</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => toLower(todo.id)}>To Lowercase</button>
            <button onClick={() => MarkAsDone(todo.id)}>
              {todo.done ? "Undo" : "Mark as Done"}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={Uppercasing}>Convert to Uppercase</button>
    </div>
  );
}
