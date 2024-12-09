/**
 * LATIHAN
 * ==================================================
 */

/**
 * 

1. Deklarasikan variabel berikut dengan tipe data yang sesuai:
1. Variabel username yang berisi string "Alice".
2. Variabel age yang berisi angka 25.
3. Variabel isAdmin yang berisi nilai boolean true.
4. Variabel colors yang berisi array string ["red", "green", "blue"].
*/

const myName: string = "Alice";
const age: number = 25;
const isAdmin: boolean = true;
const colors: string[] = ["red", "green", "blue"];

/**
 * 
2. Buat fungsi bernama multiply yang menerima dua parameter bertipe number dan mengembalikan hasil perkalian keduanya.
*/
const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

/**
 * 
3. Buat interface Car dengan properti:
1. brand (string)
2. model (string)
3. year (number)
Lalu, buat variabel bernama myCar yang sesuai dengan interface tersebut.
*/

interface Car {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Innova",
  year: 2024,
};

/**
 * 
4. Buat variabel bernama userId yang dapat bertipe string atau number. Berikan nilai awal "123".
*/

let userId: string | number;
userId = "123";
userId = 123;

/**
 * 
5. Buat class bernama Animal dengan properti name (string) dan method makeSound yang mencetak "Some generic sound". Lalu, buat instance dari class tersebut.
*/

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some generic sound");
  }
}

const cat = new Animal("Garong");
cat.makeSound();

/**
 * 
6. Buat class Dog yang mewarisi dari class Animal. Override method makeSound untuk mencetak "Woof!".
*/

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log("Woof!");
  }
}

/**
 * 
7. Buat fungsi generic bernama identity yang menerima satu parameter dan mengembalikan parameter tersebut.
*/
function identity<T>(value: T): T {
  return value;
}

const identityResult = identity<string>("Garong");

/**
 * 
8. Buat type alias Point untuk mendefinisikan objek dengan properti:
· x (number)
· y (number)
Lalu buat variabel pointA dengan nilai { x: 10, y: 20 }.
*/

type Point = {
  x: number;
  y: number;
};

const pointA: Point = {
  x: 10,
  y: 20,
};

/**
 * 
9. Buat class BankAccount dengan:
1. Properti private balance (number).
2. Method deposit untuk menambah saldo.
3. Method getBalance untuk mendapatkan saldo.
*/

class BankAccount {
  private balance: number;

  public deposit(amount: number): number {
    return this.balance + amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

/**
 * 
10. Buat interface User dengan properti:
1. id (readonly, number)
2. name (string)
Lalu buat variabel user dengan properti id: 1 dan name: "Alice".
*/

interface User {
  id: number;
  name: string;
}

let user: Readonly<User> = {
  id: 1,
  name: "Alice",
};

// user.id = 10;

/**
 * 
11. Buat interface Profile dengan properti:
1. name (string)
2. age (number)
Gunakan Partial untuk membuat variabel profileUpdate di mana semua properti opsional.
*/
interface Profile {
  name: string;
  age: number;
}

const profileUpdate: Partial<Profile> = {
  name: "John",
};

/**
 * 
12. Buat enum Role dengan nilai:
1. Admin
2. User
3. Guest
Lalu buat variabel currentRole dengan nilai Role.User.
*/

enum Role {
  Admin,
  User,
  Guest,
}

let currentRole = Role.User;

/**
 * 
13. Buat dua type alias Employee dan Manager, lalu gabungkan keduanya menggunakan intersection type.
*/
type Employee = {
  name: string;
};

type Manager = {
  managerId: number;
};

type ManagerOfFinance = Employee & Manager;

const managerOfFinance: ManagerOfFinance = {
  managerId: 3,
  name: "Jane",
};

/**
 * 
14. Buat sebuah objek person dengan properti opsional address. Gunakan optional chaining untuk mengakses city di dalam address.
*/

const person: {
  name: string;
  street: string;
  city?: string;
} = {
  name: "Jane",
  street: "Elm Street #13",
};

/**
 * 
15. Buat fungsi calculateDiscount yang menerima dua parameter:
1. price (number)
2. discount (number, default: 10)
Fungsi mengembalikan harga setelah diskon.
*/

const calculateDiscount = (price: number, discount: number = 10): number => {
  let myDiscount = (price * discount) / 100;
  return price - myDiscount;
};
