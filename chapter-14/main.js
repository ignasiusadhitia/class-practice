// OOP Principles
// 1. Encapsulation: ekspos hanya yang diperlukan oleh pengguna objek tersebut
class Student {
  #marks;
  constructor(name, marks) {
    this.name = name;
    this.#marks = marks;
  }

  getMarks() {
    console.log(`${this.name} Your marks is ${this.#marks}.`);
  }
}
const student = new Student("John", 90);
student.getMarks();

// 2. Abstraction: fokus pada penggunaan bukan pada detail implementasi
class StudentGrade {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  #getGrade() {
    if (this.marks > 90) {
      return "A";
    } else if (this.marks > 80) {
      return "B";
    } else if (this.marks > 70) {
      return "C";
    } else if (this.marks > 60) {
      return "D";
    } else {
      return "F";
    }
  }

  showGrade() {
    console.log(`Dear ${this.name}, your grade is: ${this.#getGrade()}`);
  }
}
const studentGrade = new StudentGrade("John", 90);
studentGrade.showGrade();

// 3. Polymorphism: subclass dapat menggunakan semua properti dan method dari superclass
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`Hello I'm ${this.name}. I'm ${this.age} years old.`);
  }
}

class GoodStudent extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

const goodStudent = new GoodStudent("John", 20);
goodStudent.getDetails();

// 4. Inheritance: subclass dapat mewarisi juga mengoverride properti dan method supperclass-nya

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`Hello I'm ${this.name}. I'm ${this.age} years old.`);
  }
}

class GoodStudent2 extends Person2 {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }

  getDetails() {
    console.log(
      `Hello I'm ${this.name}. I'm ${this.age} years old. I have ${this.marks} marks.`
    );
  }
}
const goodStudent2 = new GoodStudent2("John", 20, 90);
goodStudent2.getDetails();

// S.O.L.I.D
// 1. Single Responsibility Principle: setiap class hanya memiliki 1 tanggung jawab
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    console.log(`Product name: ${this.name}. Price: ${this.price}`);
  }
}

// 2. Open-Closed Principle: class terbuka untuk diperluas tetapi tertutup untuk modifikasi
class Car {
  constructor(name, vuelStatus) {
    this.name = name;
    this.vuelStatus = vuelStatus;
  }

  getVuelStatus() {
    console.log(`${this.name} vuel status: ${this.vuelStatus}`);
  }
}

class HybridCar extends Car {
  constructor(name, vuelStatus, batteryStatus) {
    super(name, vuelStatus);
    this.batteryStatus = batteryStatus;
  }

  getBatteryStatus() {
    console.log(`${this.name} battery status: ${this.batteryStatus}`);
  }
}

// 3. Liskov Substitution Principle: subclass dapat mengganti superclass tanpa mengubah perilaku program
class Vehicle2 {
  crash() {
    console.log("Crashed...");
  }
}

class Car2 extends Vehicle2 {
  crash() {
    console.log("Car is crashed...");
  }
}

class Bicycle extends Vehicle2 {
  crash() {
    console.log("Bicycle is crashed...");
  }
}

// 4. Interface Segregation Principle: klien tidak boleh dipaksa untuk menggunakan interface yang tidak mereka gunakan
class Printer {
  print() {
    console.log("Printing...");
  }
}

class Scanner {
  scan() {
    console.log("Scanning...");
  }
}

// 5. Dependency Inversion Principle: class tidak boleh bergantung pada detail, tetapi bergantung pada abstraksi
class Key {
  open() {
    console.log("Key is opening the door...");
  }
}

class Button {
  open() {
    console.log("Button is opening the door...");
  }
}

class Door {
  constructor(opener) {
    this.opener = opener;
  }

  openTheDoor() {
    this.opener.open();
  }
}
const key = new Key();
const button = new Button();
const door = new Door(key);
door.openTheDoor();
