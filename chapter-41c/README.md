```typescript
// tipe data dasar pada typescript
// string
const nama: string = "John doe";
// number

const age: number = 20;
// boolean
const isMarried: boolean = false;
const hobbies: string[] = ["Basket", "Coding", "Gaming"];
const numbers: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const mixed: (string | number | boolean)[] = ["John", 20, true];
const array: Array<string> = ["John", "Jane"];
// tipe data any
const any: any = "John";

// null dan undefined
const nullValue: null = null;
const undefinedValue: undefined = undefined;

const person: {
  name: string;
  age: number;
  isMarried: boolean;
} = {
  name: "John",
  age: 28,
  isMarried: true,
};

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
  greet(): string;
}

const person2: Person = {
  name: "John",
  age: 29,
  isMarried: false,
  greet() {
    return `Hello ${this.name}`;
  },
};

// tipe data yang khusus ada di typescript
// tuple: basicnya seperti array dengan length strict
const tuple: [string, number] = ["John", 20];

// enum, secara default nilainya 0
enum Direction {
  Up = 1, // diassign default valuenya
  Down,
}

console.log(Direction.Up);

enum Status {
  Active = "active",
  Inactive = "inactive",
}

console.log(Status.Active);

const status: number = 1;
if (Status.Active === "active") {
  console.log("Active");
} else {
  console.log("Inactive");
}

// function

function greet(name: string): string {
  return `Hello ${name}`;
}

const greet2 = (name: string): string => `Hello ${name}`;

function greet3(name: string): void {
  console.log(`Hello ${name}`);
}

function optional(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old`;
  } else {
    return `Hello ${name}`;
  }
}

// type alias, cocok untuk tipe data yang kompleks (lebih dari satu)
type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};

// union type (lebih dari satu tipe data)
let id: string | number;
id = "2";
id = 3;

// intersection type (menggabungkan tipe data)

type Admin = {
  adminId: number;
};

type User = {
  name: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  adminId: 1,
  name: "John",
};

// class pada typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

const dog = new Animal("Dog");
dog.makeSound();

// inheritance
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

// access modifier (public, private, protected)
class Persons {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(`Hello ${this.name}`);
  }
}

// generics (memungkinkan pembuatan tipe data yang fleksibel dan dinamis)
function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("John");
const result2 = identity<number>(20);
const result3 = identity<boolean>(true);

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}
const box = new Box<string>("John");

// Type Utility
// Partial, tipe data yang dipakai sebagian saja, ada yang optional
interface Person2 {
  name: string;
  age: number;
}

const person3: Partial<Person2> = {
  name: "John",
};

// readOnly, property yang dibuat hanya bisa dibaca saja
let readOnlyUser: Readonly<Person2> = {
  name: "John",
  age: 20,
};

readOnlyUser.name = "Jane";

// Pick
type Username = Pick<Person2, "name" | "age">; // string
const username: Username = {
  name: "John",
  // age: 35,
};
```
