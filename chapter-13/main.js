/*
Sistem Rental Kendaraan dengan Membership dan Diskon Sederhana
Buat sebuah sistem rental kendaraan sederhana yang menggabungkan inheritance, object composition, dan class bawaan JavaScript.
Instruksi Tugas:
1.	Class Utama:
o	Buat class Kendaraan dengan properti:
	merek
	model
	tahun
o	Metode:
	infoKendaraan() untuk menampilkan informasi kendaraan.
2.	Inheritance:
o	Buat dua class turunan dari Kendaraan:
	Class Mobil dengan properti tambahan kapasitasPenumpang.
	Class Motor dengan properti tambahan jenisMotor.
3.	Object Composition:
o	Buat class Mesin dengan properti:
	jenis (contoh: Bensin, Diesel).
	tenagaKuda (contoh: 100 HP).
o	Gunakan komposisi dengan menambahkan objek Mesin ke dalam setiap instance Mobil dan Motor.
4.	Class Membership:
o	Buat class Membership dengan properti:
	namaMember
	tipeMembership (Gold, Silver, atau Bronze).
o	Metode diskonMember() untuk mengembalikan diskon:
	Gold: 15%
	Silver: 10%
	Bronze: 5%
5.	Class Rental:
o	Properti:
	kendaraan (instance dari Mobil atau Motor).
	member (instance dari Membership).
	tanggalRental (gunakan Date).
	lamaHari (ditentukan langsung saat rental dibuat).
o	Metode hitungTotal():
	Tarif harian:
	Mobil: Rp 100.000/hari.
	Motor: Rp 50.000/hari.
	Hitung total harga berdasarkan hari dan diskon membership.
6.	Built-in Class:
o	Gunakan Date untuk menampilkan tanggal rental.
Contoh Output:
Kendaraan: Toyota Avanza, Tahun: 2021
Jenis Mesin: Bensin, Tenaga: 120 HP
Member: Siti (Silver)
Tanggal Rental: Kamis, 24 Oktober 2024
Lama Rental: 3 hari
Total Harga: Rp 270000
*/

class Kendaraan {
  constructor(merek, model, tahun) {
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }

  infoKendaraan() {
    return `Kendaraaan: ${this.merek + " " + this.model}, Tahun:  ${
      this.tahun
    }`;
  }
}

class Mobil extends Kendaraan {
  constructor(merek, model, tahun, kapasitasPenumpang, mesin) {
    super(merek, model, tahun);
    this.kapasitasPenumpang = kapasitasPenumpang;
    this.mesin = mesin;
  }
}

class Motor extends Kendaraan {
  constructor(merek, model, tahun, jenisMotor, mesin) {
    super(merek, model, tahun);
    this.jenisMotor = jenisMotor;
    this.mesin = mesin;
  }
}

class Mesin {
  constructor(jenis, tenagaKuda) {
    this.jenis = jenis;
    this.tenagaKuda = tenagaKuda;
  }
}

class Membership {
  constructor(namaMember, tipeMembership) {
    this.namaMember = namaMember;
    this.tipeMembership = tipeMembership;
  }

  diskonMember(tipeMembership) {
    if (tipeMembership === "Gold") {
      return 0.85;
    } else if (tipeMembership === "Silver") {
      return 0.9;
    } else if (tipeMembership === "Bronze") {
      return 0.95;
    } else {
      return 1;
    }
  }
}

class Rental {
  constructor(kendaraan, member, lamaHari) {
    this.kendaraan = kendaraan;
    this.member = member;
    this.tanggalRental = new Date();
    this.lamaHari = lamaHari;
  }

  formatTanggal(tanggal) {
    return tanggal.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  }

  hitungTotal() {
    let totalHarga = 0;

    if (this.kendaraan instanceof Mobil) {
      totalHarga =
        this.lamaHari *
        100000 *
        this.member.diskonMember(this.member.tipeMembership);
    } else {
      totalHarga =
        this.lamaHari *
        50000 *
        this.member.diskonMember(this.member.tipeMembership);
    }

    return `${this.kendaraan.infoKendaraan()}\nJenis Mesin: ${
      this.kendaraan.mesin.jenis
    }, Tenaga ${this.kendaraan.mesin.tenagaKuda} HP\nMember: ${
      this.member.namaMember
    } (${this.member.tipeMembership})\nTanggal Rental: ${this.formatTanggal(
      this.tanggalRental
    )}\nLama Rental: ${this.lamaHari} hari\nTotal Harga: ${this.formatRupiah(
      totalHarga
    )}
    `;
  }
}
// merek, model, tahun, kapasitasPenumpang, mesin
const mesinMobil = new Mesin("Bensin", 120);
const mesinMotor = new Mesin("Diesel", 80);
const mobil = new Mobil("Toyota", "Avanza", "2021", 7, mesinMobil);
const motor = new Motor("Honda", "Beat", "2022", "Matic", mesinMotor);
const member = new Membership("Siti", "Silver");
const rental = new Rental(mobil, member, 3);
const rental2 = new Rental(motor, member, 4);
// console.log(rental.hitungTotal());
// console.log(rental2.hitungTotal());

/*
Sistem Kasir untuk Toko Sederhana dengan Diskon Membership
Buat sebuah sistem kasir untuk toko yang menghitung total harga pembelian dengan mempertimbangkan diskon membership. Tugas ini melibatkan pewarisan, komposisi objek, dan penggunaan format uang menggunakan built-in class JavaScript.
Instruksi Tugas:
1.	Class Barang:
o	Buat class Barang dengan properti:
	namaBarang
	harga
o	Metode: getInfoBarang() untuk menampilkan informasi barang.
2.	Class Keranjang (Composition):
o	Buat class Keranjang dengan properti:
	daftarBarang (array berisi instance Barang).
o	Metode:
	tambahBarang() untuk menambah barang ke dalam keranjang.
	totalHarga() untuk menghitung total harga semua barang dalam keranjang.
3.	Class Membership:
o	Buat class Membership dengan properti:
	namaMember
	tipeMembership (Gold, Silver, Bronze).
o	Metode diskonMember() untuk mengembalikan diskon:
	Gold: 20%
	Silver: 10%
	Bronze: 5%
4.	Class Transaksi:
o	Properti:
	keranjang (instance dari Keranjang).
	member (instance dari Membership).
o	Metode:
	hitungTotalAkhir() untuk menghitung harga akhir dengan diskon membership.
	Gunakan Intl.NumberFormat untuk memformat harga dalam Rupiah.
Contoh Output:
Member: Budi (Gold)
Daftar Barang:
Sepatu: Rp 500000
Tas: Rp 300000
Total Akhir: Rp720.000,00
*/
class Barang {
  constructor(namaBarang, harga) {
    this.namaBarang = namaBarang;
    this.harga = harga;
  }

  getInfoBarang() {
    return `${this.namaBarang}: Rp ${this.harga}`;
  }
}

class Keranjang {
  constructor(daftarBarang = []) {
    this.daftarBarang = daftarBarang;
  }

  tambahBarang(barang) {
    this.daftarBarang.push(barang);
  }

  totalHarga() {
    let total = 0;
    this.daftarBarang.forEach((item) => (total += item.harga));

    return total;
  }
}

class MembershipToko {
  constructor(namaMember, tipeMembership) {
    this.namaMember = namaMember;
    this.tipeMembership = tipeMembership;
  }

  diskonMember(tipeMembership) {
    if (tipeMembership === "Gold") {
      return 0.2;
    } else if (tipeMembership === "Silver") {
      return 0.1;
    } else if (tipeMembership === "Bronze") {
      return 0.05;
    } else {
      return 1;
    }
  }
}

class Transaksi {
  constructor(keranjang, member) {
    this.keranjang = keranjang;
    this.member = member;
  }

  formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  }

  hitungTotalAkhir() {
    let diskon =
      this.keranjang.totalHarga() *
      this.member.diskonMember(this.member.tipeMembership);

    let total = this.keranjang.totalHarga() - diskon;

    const daftarBarang = this.keranjang.daftarBarang;

    return `Member: ${this.member.namaMember} (${
      this.member.tipeMembership
    })\nDaftar Barang:\n${daftarBarang
      .map((item) => item.getInfoBarang())
      .join("\n")}\nTotal Akhir: ${this.formatRupiah(total)}`;
  }
}
const memberToko = new MembershipToko("Budi", "Gold");
const barang1 = new Barang("Sepatu", 500000);
const barang2 = new Barang("Tas", 300000);
const keranjang = new Keranjang();
keranjang.tambahBarang(barang1);
keranjang.tambahBarang(barang2);
// console.log(keranjang.totalHarga());
const transaksi = new Transaksi(keranjang, memberToko);
// console.log(transaksi.hitungTotalAkhir());
/*
Sistem Dompet Digital untuk Pembayaran Online
Buat sebuah sistem dompet digital yang dapat digunakan untuk transaksi pembayaran dengan fitur seperti top-up saldo dan pengurangan saldo. Sistem ini menggabungkan konsep inheritance, object composition, dan built-in class untuk memformat uang dan mencatat waktu transaksi.
Instruksi Tugas:
1.	Class Dompet:
o	Buat class Dompet dengan properti:
	saldo (berisi jumlah saldo awal, misal Rp 500.000).
o	Metode:
	topUp(nominal) untuk menambah saldo.
	bayar(nominal) untuk mengurangi saldo (jika saldo mencukupi).
	cekSaldo() untuk menampilkan saldo saat ini dalam format Rupiah (gunakan Intl.NumberFormat).
2.	Class Transaksi (Composition):
o	Buat class Transaksi dengan properti:
	dompet (instance dari Dompet).
	nominal (jumlah uang yang dibayar).
	jenisTransaksi (Top-up atau Pembayaran).
	tanggalTransaksi (gunakan class Date untuk mencatat waktu transaksi).
o	Metode infoTransaksi() untuk menampilkan informasi transaksi.
3.	Inheritance:
o	Buat class DompetPremium yang mewarisi dari Dompet dengan fitur tambahan:
	Setiap top-up mendapatkan bonus 5% dari nominal top-up.
Contoh Output
Saldo saat ini: Rp500.000,00
Top-up Rp 100000 berhasil!
Bonus Rp 5000 diterima!
Saldo saat ini: Rp605.000,00
Pembayaran Rp 200000 berhasil!
Saldo saat ini: Rp405.000,00
Pembayaran Rp 200000 pada Rabu, 23 Oktober 2024 pukul 03.00
*/
class Dompet {
  constructor(saldo = 500000) {
    this.saldo = saldo;
  }

  formatterRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  }

  topUp(nominal) {
    this.saldo += nominal;
    return `Top-up ${this.formatterRupiah(
      nominal
    )} berhasil!\n${this.cekSaldo()}`;
  }

  bayar(nominal) {
    if (this.saldo >= nominal) {
      this.saldo -= nominal;
      return `Pembayaran ${this.formatterRupiah(
        nominal
      )} berhasil!\n${this.cekSaldo()}`;
    } else {
      return `Saldo tidak mencukupi!\n${this.cekSaldo()}`;
    }
  }

  cekSaldo() {
    return `Saldo saat ini: ${this.formatterRupiah(this.saldo)}`;
  }
}

class DompetPremium extends Dompet {
  constructor(saldo, bonusTopUp = 0.05) {
    super(saldo);
    this.bonusTopUp = bonusTopUp;
  }

  topUp(nominal) {
    const bonus = nominal * this.bonusTopUp;
    this.saldo += nominal + bonus;
    return `Top-up ${this.formatterRupiah(
      nominal
    )} berhasil!\nBonus ${this.formatterRupiah(
      bonus
    )} diterima!\n${this.cekSaldo()}`;
  }
}

class TransaksiDompetDigital {
  constructor(dompet, nominal, jenisTransaksi) {
    this.dompet = dompet;
    this.nominal = nominal;
    this.jenisTransaksi = jenisTransaksi;
    this.tanggalTransaksi = new Date();
  }

  formatterTanggal(tanggal) {
    return tanggal.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }

  infoTransaksi() {
    if (this.jenisTransaksi === "Top-Up") {
      return `${this.dompet.topUp(this.nominal)}\nTop-Up ${
        this.nominal
      } pada ${this.formatterTanggal(this.tanggalTransaksi)}`;
    } else if (this.jenisTransaksi === "Pembayaran") {
      return `${this.dompet.bayar(this.nominal)}\nPembayaran ${
        this.nominal
      } pada ${this.formatterTanggal(this.tanggalTransaksi)}`;
    } else {
      return "Jenis Transaksi tidak valid!";
    }
  }
}

const dompet = new DompetPremium();
console.log(dompet.cekSaldo());
console.log(dompet.topUp(100000));
console.log(dompet.bayar(200000));
const transaksiDompetDigital = new TransaksiDompetDigital(
  dompet,
  200000,
  "Pembayaran"
);

console.log(transaksiDompetDigital.infoTransaksi());

const transaksiDompetDigital2 = new TransaksiDompetDigital(
  dompet,
  200000,
  "Pembayaran"
);
console.log(transaksiDompetDigital2.infoTransaksi());

const transaksiDompetDigital3 = new TransaksiDompetDigital(
  dompet,
  200000,
  "Pembayaran"
);
console.log(transaksiDompetDigital3.infoTransaksi());

const transaksiDompetDigital4 = new TransaksiDompetDigital(
  dompet,
  200000,
  "Top-Up"
);
console.log(transaksiDompetDigital4.infoTransaksi());
