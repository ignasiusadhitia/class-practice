import React, { useContext } from "react";
import { AppContext } from "../App";

function TodoList() {
  const { lang, todos, handleTodoComplete, handleTodoDelete, handleTodoEdit } =
    useContext(AppContext);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <div>
            <button
              className="btn btn-outline-danger btn-sm me-2"
              onClick={() => handleTodoComplete(todo.id)}
            >
              {todo.completed
                ? lang === "en"
                  ? "Uncompleted"
                  : "Belum Selesai"
                : lang === "en"
                ? "Completed"
                : "Selesai"}
            </button>
            <button
              className="btn btn-outline-danger btn-sm me-2"
              onClick={() => handleTodoEdit(todo)}
            >
              {lang === "en" ? "Edit" : "Sunting"}
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleTodoDelete(todo.id)}
            >
              {lang === "en" ? "Delete" : "Hapus"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
