import React from "react";

function StudentTable({
  toggleModalForm,
  onGetStudentDetails,
  onDeleteStudent,
  onEditStudent,
  students,
}) {
  return (
    <div className="table-responsive">
      <table className="table caption-top table-hover table-bordered">
        <caption>List of Students</caption>
        <thead>
          <tr>
            <th scope="col" colSpan="4" className="px-3">
              <button
                className="btn btn-primary float-end fw-bold"
                onClick={toggleModalForm}
              >
                <i className="bi bi-plus-circle"></i> Add New
              </button>
            </th>
          </tr>
          {students.length > 0 ? (
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">NIM</th>
              <th scope="col">Actions</th>
            </tr>
          ) : (
            ""
          )}
        </thead>
        {students.length > 0 ? (
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.nim}</td>
                <td>
                  {/* Delete Button */}
                  <button
                    className="btn btn-outline-danger btn-sm float-end"
                    onClick={() => onDeleteStudent(student)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>

                  {/* Edit Button */}
                  <button
                    className="btn btn-outline-warning btn-sm mx-2 float-end"
                    onClick={() => onEditStudent(student)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>

                  {/* Detail Button */}
                  <button
                    className="btn btn-outline-primary btn-sm float-end"
                    onClick={() => onGetStudentDetails(student)}
                  >
                    <i className="bi bi-info-circle"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="4" className="text-center">
                No data available
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default StudentTable;
