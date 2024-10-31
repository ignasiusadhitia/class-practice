import React from "react";

function StudentForm({ student, onHandleChange, onHandleSubmit }) {
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name || ""}
        onChange={onHandleChange}
      />
      <input
        type="text"
        name="class"
        placeholder="Class"
        value={student.class || ""}
        onChange={onHandleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default StudentForm;
