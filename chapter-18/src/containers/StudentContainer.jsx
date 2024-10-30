import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetails from "../components/StudentDetails";
import ToastMessage from "../components/ToastMessage";

class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetails: false,
    isEdit: false,
    students: [
      {
        name: "Alice Johnson",
        birthDate: "2000-05-15",
        nim: "17302874173925148",
        address: "123 Maple Street, Springfield",
        guardianName: "Robert Johnson",
      },
      {
        name: "Bob Smith",
        birthDate: "1999-11-22",
        nim: "17302874416887230",
        address: "456 Oak Avenue, Rivertown",
        guardianName: "Susan Smith",
      },
      {
        name: "Charlie Brown",
        birthDate: "2001-02-08",
        nim: "17302874538221755",
        address: "789 Pine Lane, Maplewood",
        guardianName: "Linda Brown",
      },
    ],
    currentStudent: {
      name: "",
      birthDate: "",
      nim: "",
      address: "",
      guardianName: "",
      errors: {
        name: "",
        birthDate: "",
        address: "",
        guardianName: "",
      },
    },
    showAlert: false,
    alertMessage: "",
    alertType: "success", // 'success' or 'danger'
  };

  toggleModalForm = () => {
    this.setState({
      modalForm: !this.state.modalForm,
      isEdit: false,
    });

    if (!this.isEdit) {
      this.setState({
        currentStudent: {
          name: "",
          birthDate: "",
          nim: this.generateNim(),
          address: "",
          guardianName: "",
          errors: {},
        },
      });
    }
  };

  toggleModalDetails = () => {
    this.setState({
      modalDetails: !this.state.modalDetails,
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
        errors: {
          ...prevState.currentStudent.errors,
          [name]: "",
        },
      },
    }));
  };

  generateNim = () => {
    const timestamps = Date.now().toString(); // get timestamp in miliseconds
    const randomNumber = Math.floor(1000 + Math.random() * 9000).toString(); // 4 digits random number
    return timestamps + randomNumber; // concatenate timestamp and random number
  };

  clearForm = () => {
    this.setState({
      currentStudent: {
        name: "",
        birthDate: "",
        nim: "",
        address: "",
        guardianName: "",
      },
    });
  };

  validateForm = () => {
    const { currentStudent } = this.state;
    const errors = {
      name: "",
      birthDate: "",
      address: "",
      guardianName: "",
    };

    let isValid = true;

    if (!currentStudent.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!currentStudent.birthDate) {
      errors.birthDate = "Birth date is required";
      isValid = false;
    }

    if (!currentStudent.address) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!currentStudent.guardianName) {
      errors.guardianName = "Guardian name is required";
      isValid = false;
    }

    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        errors,
      },
    }));

    return isValid;
  };

  closeToast() {
    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 3000);
  }

  handleAddStudent = () => {
    const { students, currentStudent } = this.state;
    this.setState({
      students: [...students, currentStudent],
      showAlert: true,
      alertMessage: "Student added successfully!",
      alertType: "success",
    });

    this.closeToast();
  };

  handleUpdateStudent = () => {
    const { currentStudent, students } = this.state;
    const index = students.findIndex(
      (student) => student.nim === currentStudent.nim
    );
    students[index] = currentStudent;
    this.setState({
      students,
      currentStudent: {
        name: "",
        birthDate: "",
        nim: "",
        address: "",
        guardianName: "",
        errors: {
          name: "",
          birthDate: "",
          address: "",
          guardianName: "",
        },
      },
      isEdit: false,
      showAlert: true,
      alertMessage: "Student updated successfully!",
      alertType: "success",
    });
    this.closeToast();
  };

  handleEditStudent = (student) => {
    this.setState({
      modalForm: true,
      currentStudent: student,
      isEdit: true,
    });
  };

  handleSubmit = () => {
    const { isEdit } = this.state;

    if (this.validateForm()) {
      if (isEdit) {
        this.handleUpdateStudent();
      } else {
        this.handleAddStudent();
      }
      this.toggleModalForm();
      this.clearForm();
    }
  };

  handleGetStudentDetails = (student) => {
    this.setState({
      modalDetails: true,
      currentStudent: student,
    });
  };

  handleDeleteStudent = (student) => {
    const { students } = this.state;
    const index = students.indexOf(student);
    students.splice(index, 1);
    this.setState({
      students,
      showAlert: true,
      alertMessage: "Student deleted successfully!",
      alertType: "success",
    });
    this.closeToast();
  };

  render() {
    return (
      <>
        <ToastMessage
          message={this.state.showAlert ? this.state.alertMessage : ""}
          type={this.state.alertType}
          onClose={() => this.setState({ showAlert: false })}
        />
        <StudentTable
          toggleModalForm={this.toggleModalForm}
          toggleModalDetails={this.toggleModalDetails}
          students={this.state.students}
          onGetStudentDetails={this.handleGetStudentDetails}
          onDeleteStudent={this.handleDeleteStudent}
          onEditStudent={this.handleEditStudent}
        />
        {this.state.modalForm && (
          <StudentForm
            onHandleSubmit={this.handleSubmit}
            toggleModal={this.toggleModalForm}
            student={this.state.currentStudent}
            handleInputChange={this.handleInputChange}
            isEdit={this.state.isEdit}
          />
        )}
        {this.state.modalDetails && (
          <StudentDetails
            toggleModal={this.toggleModalDetails}
            student={this.state.currentStudent}
          />
        )}
      </>
    );
  }
}

export default StudentContainer;
