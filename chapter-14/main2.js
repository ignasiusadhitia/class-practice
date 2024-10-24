// S = Single Responsibility Principle & Encapsulation
// class Employee hanya punya satu tanggung jawab untuk menyimpan data karyawan

class Employee {
  // private property
  #name;
  #role;
  #salary;
  constructor(name, role, salary) {
    this.#name = name;
    this.#role = role;
    this.#salary = salary;
  }

  getDetails() {
    return `Name: ${this.#name}, Role: ${this.#role}, Salary: ${this.#salary}`;
  }
}

// O = Open/Closed Principle & Inheritance
// class Manager bisa menambahkan fitur baru dari class employee tanpa mengubah perilaku class employee
class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, "Manager", salary);
    this.teamSize = teamSize; // bentuk modifikasi dari class employee
  }
}

// L = Liskov Substitution Principle & Polymorphism
// setiap subclass manager bisa menggantikan superclass employee tanpa masalah
function printEmployeeDetails(employee) {
  console.log(employee.getDetails());
}

const employee = new Employee("John", "Developer", 5000); // parent class (super class)
const manager = new Manager("Jane", 8000, 10); // modifikasisi dari class employee

printEmployeeDetails(employee);
printEmployeeDetails(manager);

// I = Interface Segregation Principle
// simulasi class untuk memisahkan interface dari class lain dan sesuai kebutuhan
class Printable {
  print() {
    console.log("Printing...");
  }
}

class EmployeeReport extends Printable {
  constructor(employee) {
    super();
    this.employee = employee;
  }

  print() {
    // overrride method print dari class Printable
    console.log(`Printing Report for ${this.employee.getDetails()}`);
  }
}

const report = new EmployeeReport(employee);
report.print();

// D = Dependency Inversion Principle
// report service hanya memanggil printer, tidak peduli dari mana printer itu berasal
class ReportService {
  constructor(printer) {
    this.printer = printer;
  }

  generateReport() {
    this.printer.print();
  }
}

const print = new Printable();

const reportService = new ReportService(report);
reportService.generateReport();
