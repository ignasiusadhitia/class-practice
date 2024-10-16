/**
Soal Palindrom
Buat sebuah fungsi bernama isPalindrome yang menerima satu parameter string dan mengembalikan true jika string tersebut adalah palindrom (dibaca sama dari depan dan belakang), dan false jika tidak. Fungsi ini harus mengabaikan huruf besar/kecil dan karakter selain huruf (misalnya tanda baca).
 */

/**
 * NOTE
 * ========
 * 1. Abaikan karakter selain huruf
 * 2. Abaikan huruf besar atau kecil
 * 3. Kembalikan `true` atau `false`
 */

function isPalindrome(string) {
  // regex untuk melakukan pengecekan apakah karakter tersebut adalah huruf
  const regex = /^[a-zA-Z]+$/;

  // variabel untuk menampung string yang sudah dibersihkan dari karakter selain huruf
  let newString = "";

  // bersihkan string dari karakter lain selain huruf
  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      newString += string[i];
    }
  }

  // ubah menjadi huruf kecil supaya mengabaikan huruf besar atau kecil
  const lowerCasedString = newString.toLowerCase();

  // buat variabel penampung untuk lowerCasedString yang dibalik
  let reversedString = "";

  // lakukan perulangan mundur untuk mendapatkan nilai lowerCasedString yang dibalik
  for (let i = lowerCasedString.length - 1; i >= 0; i--) {
    reversedString += lowerCasedString[i];

    // console.log(`Perulangan ke-${i}`)
    // console.log(`Nilai dari reversedString: ${reversedString}`)
  }

  // console.log(`Nilai reversedString: ${reversedString}, nilai lowerCasedString: ${lowerCasedString}`)

  return reversedString === lowerCasedString;
}

console.log("ada:", isPalindrome("ada"));
console.log("AdA:", isPalindrome("AdA"));
console.log("Ada1:", isPalindrome("Ada1"));
console.log("tiada:", isPalindrome("tiada"));

/**
   Buat sebuah fungsi bernama apakahAnagram yang menerima dua parameter, yaitu dua buah string. Fungsi ini harus mengembalikan nilai true jika kedua string tersebut adalah anagram (memiliki jumlah dan jenis huruf yang sama meskipun urutannya berbeda), dan mengembalikan false jika tidak. Fungsi harus mengabaikan perbedaan huruf kapital dan spasi.
  
   Contoh:
   apakahAnagram("listen", "silent") → true
   apakahAnagram("hello", "world") → false
   */

/**
 * 1. jenis dan jumlah huruf
 * 2. abaikan huruf kapital dan spasi
 */

function apakahAnagram(string1, string2) {
  // regex untuk melakukan pengecekan apakah karakter tersebut adalah huruf
  const regex = /^[a-zA-Z]+$/;

  // variabel untuk menampung string1 yang sudah dibersihkan dari karakter selain huruf
  let newString1 = "";

  // bersihkan string1 dari karakter lain selain huruf
  for (let i = 0; i < string1.length; i++) {
    if (regex.test(string1[i])) {
      newString1 += string1[i];
    }
  }

  // ubah newString1 menjadi huruf kecil
  const lowerCasedNewString1 = newString1.toLowerCase();
  // console.log(lowerCasedNewString1)

  // variabel untuk menampung string1 yang sudah dibersihkan dari karakter selain huruf
  let newString2 = "";

  // bersihkan string1 dari karakter lain selain huruf
  for (let i = 0; i < string2.length; i++) {
    if (regex.test(string2[i])) {
      newString2 += string2[i];
    }
  }

  // Ubah newString2 menjadi huruf kecil
  const lowerCasedNewString2 = newString2.toLowerCase();
  // console.log(lowerCasedNewString2)

  // variabel untuk menampung nama huruf dan berapa kali kemunculannya dalam string1
  let stringObj1 = {};

  // lakukan perulangan pada lowerCasedNewString1 untuk simpan huruf dan jumlah kemunculannya

  for (let i = 0; i < lowerCasedNewString1.length; i++) {
    let count = 1;

    stringObj1[lowerCasedNewString1[i]] = stringObj1.hasOwnProperty(
      lowerCasedNewString1[i]
    )
      ? count + 1
      : count;
  }

  // console.log(stringObj1)

  // variabel untuk menampung nama huruf dan berapa kali kemunculannya dalam string2
  let stringObj2 = {};

  // lakukan perulangan pada lowerCasedNewString2 untuk simpan huruf dan jumlah kemunculannya

  for (let i = 0; i < lowerCasedNewString2.length; i++) {
    let count = 1;

    stringObj2[lowerCasedNewString2[i]] = stringObj2.hasOwnProperty(
      lowerCasedNewString2[i]
    )
      ? count + 1
      : count;
  }

  // console.log(stringObj2)

  // cari jumlah key masing-masing objek jika berbeda langsung kembalikan false jika sama lanjutkan apakah pengecekan pasangan key value di stringObject1 sama dengan stringObject2

  const stringObject1Length = Object.keys(stringObj1).length;
  // console.log(stringObject1Length)

  const stringObject2Length = Object.keys(stringObj2).length;
  // console.log(stringObject2Length)

  if (stringObject1Length === stringObject2Length) {
    return Object.keys(stringObj1).every(
      (key) =>
        stringObj2.hasOwnProperty(key) && stringObj2[key] === stringObj1[key]
    );
  }

  return false;
}

console.log("listen, silent", apakahAnagram("listen", "silent"));
console.log("listeny silentw", apakahAnagram("listeny", "silentw"));
console.log("hello, world", apakahAnagram("hello", "world"));
