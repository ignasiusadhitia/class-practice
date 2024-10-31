import React, { Component } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

class StudentContainer extends Component {
  // State yang menyimpan daftar siswa dan siswa yang sedang ditambahkan atau diedit
  state = {
    students: [], // Array yang menyimpan objek siswa (daftar siswa)
    currentStudent: {}, // Objek untuk menyimpan data siswa yang sedang diinput atau diedit
  };

  // Mengelola perubahan input di form
  handleChange = (event) => {
    const { name, value } = event.target; // Mendapatkan nama dan nilai dari input yang diubah
    this.setState({
      currentStudent: {
        // Memperbarui state currentStudent dengan data baru
        ...this.state.currentStudent,
        [name]: value, // Menggunakan nama input sebagai kunci (key) dan nilai (value) sebagai data
      },
    });
  };

  // Menambahkan siswa baru ke daftar students
  handleAddStudent = (event) => {
    event.preventDefault(); // Mencegah halaman memuat ulang saat form disubmit
    const newStudent = { ...this.state.currentStudent, id: Date.now() }; // Membuat objek siswa baru dengan ID unik

    this.setState((prevState) => ({
      students: [...prevState.students, newStudent], // Menambahkan siswa baru ke dalam array students
      currentStudent: {}, // Mengosongkan currentStudent agar form kosong setelah submit
    }));
  };

  // Memilih siswa untuk diedit, mengisi form dengan data siswa tersebut
  handleEditStudent = (student) => {
    this.setState({
      currentStudent: student, // Menyalin data siswa yang dipilih ke currentStudent
    });
  };

  // Memperbarui data siswa di daftar students
  handleUpdateStudent = (event) => {
    event.preventDefault(); // Mencegah halaman memuat ulang saat form disubmit
    const { students, currentStudent } = this.state;

    this.setState({
      // Mengganti data siswa yang diupdate di dalam array students
      students: students.map((student) =>
        student.id === currentStudent.id ? currentStudent : student
      ), // Menemukan siswa berdasarkan ID dan mengupdate data
      currentStudent: {}, // Mengosongkan currentStudent agar form kembali kosong
    });
  };

  // Menghapus siswa dari daftar students berdasarkan ID

  handleDeleteStudent = (id) => {
    this.setState((prevState) => ({
      students: prevState.students.filter((student) => student.id !== id), // Filter siswa yang bukan ID yang dihapus
    }));
  };

  render() {
    const { students, currentStudent } = this.state;
    const isEditing = !!currentStudent.id; // Menentukan apakah sedang dalam mode edit (jika ada ID di currentStudent)

    return (
      <div>
        <h1>Student Management</h1>
        <StudentForm
          student={currentStudent} // Kirim data siswa yang sedang diedit ke form
          onHandleChange={this.handleChange} // Event handler untuk perubahan input
          onHandleSubmit={
            isEditing ? this.handleUpdateStudent : this.handleAddStudent // Mengirim fungsi yang sesuai untuk submit
          }
        />
        <StudentList
          students={students} // Mengirim daftar siswa ke komponen StudentList
          onEdit={this.handleEditStudent} // Event handler untuk mengedit siswa
          onDelete={this.handleDeleteStudent} // Event handler untuk menghapus siswa
        />
      </div>
    );
  }
}

export default StudentContainer;
