/**
 * Membuat Aplikasi Manajemen Toko dengan JavaScript

(OOP & SOLID Principles)

Siswa diminta membuat sebuah aplikasi manajemen toko sederhana menggunakan JavaScript dengan paradigma OOP dan menerapkan prinsip S.O.L.I.D. Aplikasi ini akan mengelola produk, transaksi, dan laporan penjualan.

Instruksi:

1. Buat class yang menangani beberapa entitas berikut:
a. Product: Mengelola informasi produk (nama, harga, stok).
b. Transaction: Mengelola pembelian produk dan menghitung total harga.
c. Report: Menyimpan laporan penjualan.

2. Gunakan OOP dengan benar:
a. Enkapsulasi: Beberapa properti tidak boleh diakses langsung (gunakan metode getter & setter).
b. Pewarisan: Jika ada entitas yang mirip, gunakan pewarisan (contoh: DigitalProduct bisa mewarisi dari Product).
c. Abstraksi: Buat metode abstrak yang perlu diimplementasikan pada subclass.
d. Polimorfisme: Gunakan polimorfisme pada metode yang bisa berbeda untuk subclass.

3. Terapkan prinsip S.O.L.I.D:
a. S (Single Responsibility): Setiap class hanya menangani satu tugas (misalnya, Product hanya untuk mengelola data produk).
b. O (Open/Closed): Pastikan class terbuka untuk ekstensi tapi tertutup untuk modifikasi.
c. L (Liskov Substitution): Pastikan subclass bisa menggantikan superclass tanpa masalah.
d. I (Interface Segregation): Klien tidak boleh dipaksa untuk bergantung pada antarmuka/interface yang tidak mereka gunakan.
e. D (Dependency Inversion): Pastikan class tidak langsung bergantung pada class lain, tapi pada abstraksi.


Contoh Output:

Transaksi 1: Laptop - Total: 30000000
Transaksi 2: E-book - Total: 50000
 */

// S = Single Responsibility Principle & Encapsulation
// class Product hanya punya satu tanggung jawab untuk menyimpan data produk
class Product {
  // private property
  #name;
  #price;
  #stock;
  constructor(name, price, stock) {
    this.#name = name;
    this.#price = price;
    this.#stock = stock;
  }

  get getProductName() {
    return this.#name;
  }

  get getProductPrice() {
    return this.#price;
  }

  get getProductStock() {
    return this.#stock;
  }

  getProductDetails() {
    return `Product Name: ${this.getProductName}, Price: ${this.getProductPrice}, Stock: ${this.getProductStock}`;
  }
}

// O = Open/Closed Principle & Inheritance
// class DigitalProduct bisa menambahkan fitur baru dari class Product tanpa mengubah perilaku class Product
class DigitalProduct extends Product {
  constructor(name, price) {
    super(name, price, "Unlimited");
    this.liscenseNumber = new Date().getTime();
  }

  getProductDetails() {
    // override method getProductDetails()
    return `Product Name: ${this.getProductName}, Price: ${this.getProductPrice}, Stock: ${this.getProductStock}, Liscense Number: ${this.liscenseNumber}`;
  }
}

function printProductDetails(product) {
  console.log(product.getProductDetails());
}

// L = Liskov Substitution Principle & Polymorphism
// setiap subclass DigitalProduct bisa menggantikan superclass Product tanpa masalah
const product1 = new Product("Laptop", 30000000, 10); // parent class (super class)
const product2 = new DigitalProduct("E-book", 50000); // modifikasisi dari class Product
printProductDetails(product1);
printProductDetails(product2);

class Transaction {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getProductName() {
    return this.product.getProductName;
  }

  total() {
    return this.product.getProductPrice * this.quantity;
  }
}

const transaction1 = new Transaction(product1, 1);
const transaction2 = new Transaction(product2, 1);

class Report {
  constructor() {
    this.reports = [];
  }

  addReport(transaction) {
    this.reports.push({
      product: transaction.getProductName(),
      total: transaction.total(),
    });
  }

  generateReports() {
    return this.reports.map(
      (report, index) =>
        `Transaksi ${index + 1} ${report.product} - Total: ${report.total}`
    );
  }
}

// I = Interface Segregation Principle
// simulasi class untuk memisahkan interface dari class lain dan sesuai kebutuhan
// D = Dependency Inversion Principle
// clas Print hanya memanggil printLists, tidak peduli dari mana printLists itu berasal
class Print {
  constructor(printLists) {
    this.printLists = printLists;
  }

  print() {
    console.log(this.printLists.join("\n"));
  }
}

const report = new Report();

report.addReport(transaction1);
report.addReport(transaction2);

const printLists = report.generateReports();

const printReport = new Print(printLists);
printReport.print();
