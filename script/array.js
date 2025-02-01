// In JavaScript arrays use numbered indexes.
// You should use use arrays when you want the element names to be numbers.

const cars = ["Bmw", "Koenisegg", "Toyota"];
cars[1] = "Buggati";
console.log(cars); //full array

const carss = [
    "Buggati",
    "Volvo",
    "BMW"
  ];
let carsss = carss[0]; // Acces the Buggati
let car = carss[carss.length - 1]; // Access the BMW

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
  
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon"); // Adds a new element to fruits
let fruit = fruits.pop; //  Mango
fruits.pop(); // Remove Mango
fruits.slice(1) // Remove Banana

// Array Elements Can Be Object
myArray[0] = Date.now; // Object
myArray[2] = myFunction; // Function
myArray[2] = myCars; // Array

cars.length // Returns the number of Elements
cars.sort() // Sorts the array

const drinks = ["Coffee", "Pure Water", "Tea", "Lemon Juice"];
drinks.toString(); // Coffee,Pure Water,Tea,Lemon Juice
let drink = drinks[2]; // Tea
drinks.join(" * "); // Coffee*Pure Water*Tea*Lemon Juice
fruits.copyWithin(2, 0); // Coffee,Pure Water,Coffee,Pure Water

const mobilePhone = ["Samsung", "Nokia", "Iphone", "Xiaomi"];
mobilePhone.shift(); // Nokia,Iphone,Xiaomi
let phone = mobilePhone.shift(); // return the value "Samsung"
mobilePhone.unshift("Infinix"); // Infinix,Samsung,Nokia,Iphone,Xiaomi
mobilePhone.splice(2, 0, "Motorolla", "Poco"); // Add Motorolla and Poco to the index 2 and 0 remove so it would be Samsung,Nokia,Iphone,Motorolla,Poco,Xiaomi you can change the 0.
mobilePhone.splice(0, 1); // Delete the index 0 of array
const splice = mobilePhone.toSpliced(0, 1); // This create new array so the old ones remain unchanged

const myStuff = drinks.concat(fruits); // concat two variable drinks and fruits
const allMyStuff = car.concat(fruits, drink); // concat three array

const myArray = [[1,2], [3,4], [5,6]]; // Nested array
myArray.flat(); // 1,2,3,4,5,6
myArray.flatMap(x => [x, x * 10]); // 1,10,2,20,3,30,4,40,5,50,6,60

array = [1, 2, 3, 4]
rest = [7, 2]

let result = array.filter(x => !rest.includes(x)); // [1, 3, 4] 
