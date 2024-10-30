import React from "react";

function StudentForm({
  toggleModal,
  student,
  handleInputChange,
  onHandleSubmit,
  isEdit,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Form {isEdit ? "Edit" : "New"} Student
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggleModal}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                value={student.name || ""}
                onChange={handleInputChange}
                id="name"
                className={`form-control ${
                  student.errors?.name ? "is-invalid" : ""
                }`}
              />
              {student.errors?.name && (
                <div className="invalid-feedback">{student.errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="nim" className="form-label">
                NIM
              </label>
              <input
                type="text"
                name="nim"
                value={student.nim || ""}
                onChange={handleInputChange}
                id="nim"
                inputMode="numeric"
                className="form-control"
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                Birth Date
              </label>
              <input
                type="date"
                name="birthDate"
                value={student.birthDate || ""}
                onChange={handleInputChange}
                id="birthDate"
                className={`form-control ${
                  student.errors?.birthDate ? "is-invalid" : ""
                }`}
              />
              {student.errors?.birthDate && (
                <div className="invalid-feedback">
                  {student.errors.birthDate}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                name="address"
                value={student.address || ""}
                onChange={handleInputChange}
                id="address"
                className={`form-control ${
                  student.errors?.address ? "is-invalid" : ""
                }`}
              />
              {student.errors?.address && (
                <div className="invalid-feedback">{student.errors.address}</div>
              )}
            </div>

            <div>
              <label htmlFor="guardianName" className="form-label">
                Guardian Name
              </label>
              <input
                type="text"
                name="guardianName"
                value={student.guardianName || ""}
                onChange={handleInputChange}
                id="guardianName"
                className={`form-control ${
                  student.errors?.guardianName ? "is-invalid" : ""
                }`}
              />
              {student.errors?.guardianName && (
                <div className="invalid-feedback">
                  {student.errors.guardianName}
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="modal-footer mt-5">
          {isEdit ? (
            <button
              type="button"
              className="btn btn-warning"
              onClick={onHandleSubmit}
            >
              <i className="bi bi-pencil"></i> Update Student
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={onHandleSubmit}
            >
              <i className="bi bi-save"></i> Add Student
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
