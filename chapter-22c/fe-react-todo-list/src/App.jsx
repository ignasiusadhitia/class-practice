import React, { createContext, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "kerjakan praktek react",
      completed: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("en");
  const [editingId, setEditingId] = useState(null);

  const toggleLang = (lang) => {
    if (lang === "en") {
      setLang("id");
    }

    if (lang === "id") {
      setLang("en");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    if (!input) return;
    if (editingId) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingId ? { ...todo, text: input } : todo
        )
      );
      setEditingId(null);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          text: input,
          completed: false,
        },
      ]);
    }
    setInput("");
    event.target.reset();
  };

  const handleTodoDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleTodoComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTodoEdit = (todo) => {
    setInput(todo.text);
    setEditingId(todo.id);
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        input,
        todos,
        handleInputChange,
        handleTodoSubmit,
        handleTodoDelete,
        handleTodoEdit,
        handleTodoComplete,
      }}
    >
      <div className="container mt-5">
        <button onClick={() => toggleLang(lang)} className="btn btn-warning">
          {lang === "en" ? "ID" : "EN"}
        </button>
        <h1 className="text-center mb-4">
          {lang === "en" ? "Todo List" : "Daftar Todo"}
        </h1>
        <TodoForm />
        <TodoList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
