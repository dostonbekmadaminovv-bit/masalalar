// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function getAllNums(arr) {
//   let count = 0;
//   for (let i of arr) {
//     count += i;
//   }
//   return count;
// }
// console.log(getAllNums(nums));
//---------------------------------------------
// let nums = [1, "salom", 2, 3, 4, 5, "eplemz", 6, 7, 8, "ukam", 9, 10, 24];
// function getAllNums(arr) {
//   let count = 0;
//   for (let i of arr) {
//     if (typeof i == "number") count += i;
//   }
//   return count;
// }
// console.log(getAllNums(nums));
/////////////////////////////////////////
// let aboutMySelf = {
//   name: "Dosotnbek",
//   age: 20,
//   number: 998945631811,
//   adreess: {
//     country: "Uzbekistan",
//     region: "Andijon",
//     city: "Asaka",
//     village: "Mekhnatobod",
//   },
//   courses: ["IT", "Math", "Football"],
//   money: null,
//   future: "computer programmer",
//   isMerried: false,
//   interets: ["play football", "reading", "watch movies"],
// };
// console.log(aboutMySelf);
//---------------------------------------------
// eng qimmat mashinani ajratib oling
// eng arzon mashinani qaytari bersin
// qiymati 20000 qimmata bolgan mashinalrni
// ajratib bitta rrayga yigib qaytarsin
// color white bolganlarini ajratib bersin
// umumiy summani hisoblab bersin

//////////////////////////////////////
const cars = [
  { id: 1, name: "Chevrolet Gentra", price: 15000, color: "Oq" },
  { id: 2, name: "Chevrolet Cobalt", price: 12500, color: "Kulrang" },
  { id: 3, name: "BYD Song Plus", price: 32000, color: "Qora" },
  { id: 4, name: "Kia K5", price: 28000, color: "To'q ko'k" },
  { id: 5, name: "Hyundai Sonata", price: 27500, color: "Kumushrang" },
  { id: 6, name: "Toyota Camry", price: 35000, color: "Qora" },
  { id: 7, name: "BMW X5", price: 75000, color: "To'q kulrang" },
  { id: 8, name: "Mercedes-Benz E-Class", price: 80000, color: "Oq" },
  { id: 9, name: "Chevrolet Tracker", price: 19000, color: "Qizil" },
  { id: 10, name: "Tesla Model 3", price: 42000, color: "Moviy" },
];
// eng qimmat mashinani ajratib oling
// function maxPrice(arr) {
//   let maxPrice = 0;
//   let Car = null;
//   for (let i of arr) {
//     if (maxPrice < i.price) {
//       maxPrice = i.price;
//     }
//   }
//   for (let i of arr) {
//     if (maxPrice === i.price) {
//       Car = i;
//       return Car;
//     }
//   }
// }
// console.log(maxPrice(cars));
///===============================

// eng arzon mashinani qaytari bersin
// function minPrice(arr) {
//   let minPrice1 = 80000;
//   let car = null;
//   for (let i of arr) {
//     if (minPrice1 > i.price) {
//       minPrice1 = i.price;
//     }
//   }
//   for (let i of arr) {
//     if (minPrice1 === i.price) {
//       car = i;
//     }
//   }
//   return car;
// }
// console.log(minPrice(cars));
//=======================================
// qiymati 20000 qimmata bolgan mashinalrni
// ajratib bitta rrayga yigib qaytarsin
// function ajratbOl(arr) {
//   let natija = [];

//   for (let i of arr) {
//     if (i.price > 20000) {
//       natija.push(i);
//     }
//   }

//   return natija;
// }
// console.log(ajratbOl(cars));
//======================================
// color white bolganlarini ajratib bersin
// function rangi(arr) {
//   let rang = [];
//   for (let i of arr) {
//     if (i.color === "Oq") {
//       rang.push(i);
//     }
//   }
//   return rang;
// }
// console.log(rangi(cars));

///========================================
// umumiy summani hisoblab bersin
// function hisobla(arr) {
//   let umumiyNarx = 0;
//   for (let i of arr) {
//     umumiyNarx += i.price;
//   }
//   return umumiyNarx;
// }
// console.log(hisobla(cars));

///////////////////////////////////////////////////////   masalalar  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//71.Oddiy avtomobil 4ta yo’lovchi va 1ta havdovchini o’z ichiga
// olishi mumkin. Bundan kelib chiqib safarga chiqish uchun
// odamlar soni aniq bo’lsa funksiya kamida nechta avtomobil
// kerakligini qaytarsin.
// function sayohat(odamlar) {
//   return Math.ceil(odamlar / 5);
// }
// console.log(sayohat(5));
// console.log(sayohat(11));
// console.log(sayohat(0));
//===========================================
// 72.Funksiya tekshirisin, agar unga berilgan stringda bo’sh joy
// mavjud bo’lsa true qaytarsin, aks holda false.
// function boshJoy(str) {
//   if (str.includes(" ")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(boshJoy("hello"));
// console.log(boshJoy("hello, world"));
// console.log(boshJoy(" "));
// console.log(boshJoy(""));
// console.log(boshJoy(",./!@#"));
//====================================
// 73.Funksiya biron qutining olchamlari ma’lumotlarini object
// sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib
// bersin. Hajm = Balandlik * Eni * Uzunlik
// function hajm(quti) {
//   return (Hajm = quti.Balandlik * quti.Eni * quti.Uzunlik);
// }
// console.log(hajm({ Balandlik: 2, Eni: 5, Uzunlik: 1 }));
// console.log(hajm({ Balandlik: 4, Eni: 2, Uzunlik: 2 }));
// console.log(hajm({ Balandlik: 2, Eni: 3, Uzunlik: 5 }));
//====================================
// 74.Funksiya son1, son2 va massiv qabul qiladi. Funksiya ushbu
// massivni ichidan son1dan katta va son2dan kichik sonlarni
// ajratib olib yangi massiv qaytarsin. Bunda son1 doim son2dan
// kichik.
// function sonlar(son1, son2, arr) {
//   let yangiMassiv = [];
//   for (let i of arr) {
//     if (i > son1 && i < son2) {
//       yangiMassiv.push(i);
//     }
//   }
//   return yangiMassiv;
// }
// console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));
//=============================
// 75.Funksiya massiv qabul qiladi. Ushbu funksiya unga berilgan
// massiv elementlariga mos o’rinda joylashgan elementlarning
// turini saqlagan massiv qaytarsin.
// function turlar(arr) {
//   let result = [];
//   for (let i of arr) {
//     result.push(typeof i);
//   }
//   return result;
// }
// console.log(turlar([1, 2, "null", []]));
// console.log(turlar(["214", true, false, 2, 2.15, [], null]));
// console.log(turlar([21.1, "float", "array", ["I am array"], null, true, 214]));
//====================================
// 76.Funskiya string va number qabul qiladi. Funksiya ushbu
// stringni berilgan son miqdoricha qayta-qayta yozib natijani
// string ko’rinishida qaytarsin.
// function qaytarString(str, miqdor) {
//   if (typeof str !== "string") {
//     return "Not A String !!";
//   }

//   let yangiMiqdor = "";

//   for (let i = 0; i < miqdor; i++) {
//     yangiMiqdor += str;
//   }

//   return yangiMiqdor;
// }

// console.log(qaytarString("Mubashir", 2));
// console.log(qaytarString("Matt", 3));
// console.log(qaytarString(1990, 7));
//==========================================
// 77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa
// funksiya true qaytarsin, aks holda false.
// function koplik(str) {
//   if (str.includes("lar")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(koplik("daraxtlar"));
// console.log(koplik("meva"));
// console.log(koplik("odamlar"));
// console.log(koplik("o'quvchi"));
//============================================
// 78.Funksiya string qabul qiladi. Ushbu funksiya ushbu. stringni
// bosh va oxirgi harflarini birlashtirgan stringni qaytarsin
// function boshOxiri(str) {
//   return str[0] + str[str.length - 1];
// }

// console.log(boshOxiri("ganesh"));
// console.log(boshOxiri("kali"));
// console.log(boshOxiri("shiva"));
// console.log(boshOxiri("vishnu"));
// console.log(boshOxiri("durga"));
//============================================
// 79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini
// qu… qu… quyosh deb, daraxt so’zini da… da… daraxt deb, ya’ni
// boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini.
// Agar funksiya string kiritilsa xuddi shunday formatda string
// qaytarsin.
// function sozAytish(word) {
//   let qaytar = word.slice(0, 2);
//   return qaytar + "... " + qaytar + "... " + word;
// }

// console.log(sozAytish("incredible"));
// console.log(sozAytish("enthusiastic"));
// console.log(sozAytish("outstanding"));
//===========================================
// 80.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// ahvol("happy") ==> "Today, I am feeling happy"
// ahvol("sad") ==>"Today, I am feeling sad"
// ahvol()==> "Today, I am feeling neutral"
//--------------------- davomi
// function ahvol(holat = "neatural") {
//   return "Today,I am feeling " + holat;
// }
// console.log(ahvol("happy"));
// console.log(ahvol("sad"));
// console.log(ahvol());
