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
function minPrice(arr) {
  let minPrice1 = 80000;
  let car = null;
  for (let i of arr) {
    if (minPrice1 > i.price) {
      minPrice1 = i.price;
    }
  }
  for (let i of arr) {
    if (minPrice1 === i.price) {
      car = i;
    }
  }
  return car;
}
console.log(minPrice(cars));
