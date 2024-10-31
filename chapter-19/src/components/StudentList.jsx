import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div>
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;
