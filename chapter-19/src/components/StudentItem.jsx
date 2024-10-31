import React from "react";

function StudentItem({ student, onEdit, onDelete }) {
  return (
    <div>
      <p>
        {student.name} - {student.class}
      </p>
      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
}

export default StudentItem;
