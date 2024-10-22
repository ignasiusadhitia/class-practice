/*
Sistem Pengelolaan Kendaraan Transportasi Umum
Buatlah sistem pengelolaan kendaraan transportasi umum yang mendukung beberapa jenis kendaraan seperti Bus, Taksi, dan Angkutan Kota (Angkot). Setiap kendaraan memiliki tarif berbeda dan cara perhitungan biaya yang unik:
1.	Bus:
a.	Tarif per kilometer adalah Rp 2.000.
b.	Memberikan diskon 15% jika jarak perjalanan lebih dari 50 km.
2.	Taksi:
a.	Tarif dasar adalah Rp 10.000 (fixed charge).
b.	Tarif per kilometer adalah Rp 3.500.
c.	Biaya perjalanan dihitung dengan menambahkan tarif dasar ke total biaya perjalanan.
3.	Angkot:
a.	Tarif tetap sebesar Rp 5.000 per perjalanan tanpa memperhitungkan jarak.
Tugas:
•	Buat class Transport sebagai class induk dengan method calculateFare(distance) untuk menghitung biaya perjalanan.
•	Buat subclass Bus, Taksi, dan Angkot yang mewarisi class Transport, masing-masing dengan logika perhitungan biaya spesifik.
•	Buat array berisi instance dari ketiga jenis kendaraan dan buat loop untuk menghitung serta menampilkan biaya perjalanan masing-masing untuk jarak 30 km dan 70 km.

*/

class Transport {
  constructor(type, pricePerKm) {
    this.type = type;
    this.pricePerKm = pricePerKm;
  }

  calculateFare(distance) {
    return this.pricePerKm * distance;
  }
}

class Bus extends Transport {
  constructor() {
    super("Bus", 2000);
  }

  calculateFare(distance) {
    let fare = super.calculateFare(distance);
    if (distance > 50) {
      fare *= 0.85; // diskon 15%
    }
    return fare;
  }
}

class Taxi extends Transport {
  constructor() {
    super("Taksi", 3500);
    this.fixedCharge = 10000;
  }

  calculateFare(distance) {
    return super.calculateFare(distance) + this.fixedCharge;
  }
}

class Angkot extends Transport {
  constructor() {
    super("Angkot", 5000);
  }

  calculateFare() {
    return this.pricePerKm;
  }
}

const transports = [new Bus(), new Taxi(), new Angkot()];

function displayFares(distance) {
  transports.map((transport) => {
    console.log(
      `Biaya perjalanan dengan${
        transport.type
      } dengan jarak ${distance} km, total biaya: Rp ${transport.calculateFare(
        distance
      )}`
    );
  });
}

console.log(
  "Sistem Pengelolaan Kendaraan Transportasi Umum\n=======================================\n"
);
displayFares(30);
console.log("============================================\n");
displayFares(70);
console.log("============================================\n\n");

/*
Sistem Pengelolaan Reservasi Hotel
Buat sistem reservasi hotel dengan beberapa tipe kamar, yaitu Standard Room, Deluxe Room, dan Suite Room, dengan aturan berikut:
1.	Standard Room:
a.	Harga per malam: Rp 500.000.
b.	Tidak ada fasilitas tambahan.
2.	Deluxe Room:
a.	Harga per malam: Rp 1.000.000.
b.	Termasuk sarapan gratis.
3.	Suite Room:
a.	Harga per malam: Rp 2.000.000.
b.	Memberikan diskon 10% jika menginap lebih dari 3 malam dan termasuk akses kolam renang gratis.
Tugas:
•	Buat class Room sebagai class induk dengan method calculateTotalPrice(nights) untuk menghitung total harga.
•	Buat subclass StandardRoom, DeluxeRoom, dan SuiteRoom yang mewarisi class Room dan menerapkan logika spesifik sesuai tipe kamar.
•	Buat array berisi beberapa contoh pemesanan kamar dan tampilkan total harga masing-masing untuk 2 dan 5 malam.

*/
class Room {
  constructor(type, pricePerNight, facility = []) {
    this.type = type;
    this.pricePerNight = pricePerNight;
    this.facility = facility;
  }

  calculateTotalPrice(nights) {
    return this.pricePerNight * nights;
  }
}

class StandardRoom extends Room {
  constructor() {
    super("Standard Room", 500000, ["Tidak ada fasilitas Tambahan"]);
  }
}

class DeluxeRoom extends Room {
  constructor() {
    super("Deluxe Room", 1000000, ["Sarapan gratis"]);
  }
}

class SuiteRoom extends Room {
  constructor() {
    super("Suite Room", 2000000);
  }

  calculateTotalPrice(nights) {
    if (nights > 3) {
      this.facility = [
        "Sarapan gratis",
        "Akses kolam renang gratis",
        "Diskon 10%",
      ];

      return super.calculateTotalPrice(nights) * 0.9;
    } else {
      this.facility = ["Sarapan gratis", "Akses kolam renang gratis"];
      return super.calculateTotalPrice(nights);
    }
  }
}

const rooms = [new StandardRoom(), new DeluxeRoom(), new SuiteRoom()];
function displayTotalPrice(nights) {
  rooms.map((room) => {
    console.log(
      `Total harga untuk ${
        room.type
      } selama ${nights} malam: Rp ${room.calculateTotalPrice(nights)}.`
    );
    console.log(`Deskripsi fasilitas:\n${room.facility.join(", ")}.`);
  });
}
console.log(
  "\nSistem Pengelolaan Reservasi Hotel\n=======================================\n"
);
displayTotalPrice(2);
console.log("============================================\n");
displayTotalPrice(5);

/*
Sistem Inventarisasi Toko Elektronik
Buat sistem inventarisasi toko elektronik dengan beberapa jenis produk seperti Laptop, Smartphone, dan Tablet, di mana setiap produk memiliki cara berbeda dalam menentukan garansi dan harga jual:
1.	Laptop:
a.	Garansi: 2 tahun.
b.	Harga jual ditambahkan biaya pajak 10%.
2.	Smartphone:
a.	Garansi: 1 tahun.
b.	Mendapat diskon 5% jika dibeli lebih dari 1 unit.
3.	Tablet:
a.	Garansi: 6 bulan.
b.	Harga jual tetap tanpa pajak atau diskon.
Tugas:
•	Buat class Product sebagai class induk dengan method calculatePrice(quantity, basePrice) untuk menghitung harga total.
•	Buat subclass Laptop, Smartphone, dan Tablet dengan logika berbeda untuk perhitungan harga dan garansi.
•	Tampilkan informasi produk dan harga total untuk setiap jenis produk dalam array.

*/

class Product {
  constructor(type, warranty) {
    this.type = type;
    this.warranty = warranty;
  }

  calculatePrice(quantity, basePrice) {
    return quantity * basePrice;
  }
}

class Laptop extends Product {
  constructor() {
    super("Laptop", "2 Tahun");
  }

  calculatePrice(quantity, basePrice) {
    return Math.round(quantity * basePrice * 1.1);
  }
}

class Smartphone extends Product {
  constructor() {
    super("Smartphone", "1 Tahun");
  }

  calculatePrice(quantity, basePrice) {
    if (quantity > 1) {
      return quantity * basePrice * 0.95;
    } else {
      return quantity * basePrice;
    }
  }
}

class Tablet extends Product {
  constructor() {
    super("Tablet", "6 Bulan");
  }
}

const products = [new Laptop(), new Smartphone(), new Tablet()];

function displayProducts(price, quantity) {
  products.map((product) => {
    console.log(
      `Total yang harus dibayar untuk pembelian:\n ${quantity} buah ${
        product.type
      } dengan harga Rp. ${price} adalah Rp. ${product.calculatePrice(
        price,
        quantity
      )}.\n Anda mendapatkan garansi produk selama ${product.warranty}.`
    );
  });
}
console.log(
  "\nSistem Inventarisasi Toko Elektronik\n=======================================\n"
);
displayProducts(100000000, 2);
console.log("============================================\n\n");
displayProducts(30000000, 1);
console.log("============================================\n\n");

/*
Sistem Penilaian Akademik Online
Buat sistem penilaian akademik untuk dua jenis pengguna, yaitu Dosen dan Mahasiswa, dengan aturan berikut:
1.	Dosen:
a.	Dapat memberikan nilai kepada mahasiswa.
b.	Hanya dapat melihat dan mengedit nilai mahasiswa.
2.	Mahasiswa:
a.	Dapat melihat nilai yang diberikan oleh dosen.
b.	Tidak bisa mengubah nilai.
Tugas:
•	Buat class User sebagai class induk dengan method getRole() untuk menampilkan peran pengguna.
•	Buat subclass Dosen dan Mahasiswa dengan properti dan method tambahan yang sesuai.
•	Simulasikan interaksi di mana dosen memberikan nilai kepada mahasiswa, dan mahasiswa dapat melihat nilai tersebut tetapi tidak bisa mengubahnya.

*/

class User {
  constructor(role, grade) {
    this.role = role;
    this.grade = grade;
  }

  getRole() {
    return this.role;
  }

  setGrade(student, studentGrade) {
    if (this.role === "Dosen") {
      this.grade = studentGrade;
      student.grade = studentGrade;
      console.log(
        `${student.name} Grade is: ${student.grade} and successfully set!`
      );
    } else {
      console.log("Unauthorized access! You are not allowed to change grade!");
      return;
    }
  }

  showGrade(student) {
    if (this.role === "Dosen") {
      console.log(`${student.name} Grade is: ${student.grade}`);
    } else {
      console.log(`Dear ${student.name}, Your Grade is: ${student.grade}`);
    }
  }
}

class Dosen extends User {
  constructor() {
    super("Dosen");
  }
}

class Mahasiswa extends User {
  constructor(name) {
    super("Mahasiswa");
    this.name = name;
  }
}

console.log(
  "\nSistem Penilaian Akademik Online\n=======================================\n"
);

// Instantiate objects
const dosen = new Dosen();
const alice = new Mahasiswa("Alice");
const bob = new Mahasiswa("Bob");
dosen.setGrade(alice, 90);
dosen.setGrade(bob, 94);
dosen.showGrade(alice);
dosen.showGrade(bob);
alice.setGrade(alice, 85);
alice.showGrade(alice);
bob.showGrade(bob);
