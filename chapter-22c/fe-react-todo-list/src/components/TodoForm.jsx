import React, { useContext } from "react";
import { AppContext } from "../App";

function TodoForm() {
  const { lang, input, handleInputChange, handleTodoSubmit } =
    useContext(AppContext);

  return (
    <form className="d-flex mb-3" onSubmit={handleTodoSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder={lang === "en" ? "Add todo..." : "Tambah todo"}
        value={input || ""}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-primary">
        {lang === "en" ? "Add" : "Tambah"}
      </button>
    </form>
  );
}

export default TodoForm;
