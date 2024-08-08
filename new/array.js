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

const car = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
  
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon"); // Adds a new element to fruits
let length = fruits.push("Kiwi" // 5
fruits.pop(); // Remove Mango
let fruit = fruits.pop; //  Mango

// Array Elements Can Be Object
myArray[0] = Date.now; // Object
myArray[2] = myFunction; // Function
myArray[2] = myCars; // Array

cars.length // Returns the number of Elements
cars.sort() // Sorts the array

const drinks = ["Coffee", "Pure Water", "Tea", "Lemon Juice"];
let size = drinks.length; // 4
drinks.toString(); // Coffee,Pure Water,Tea,Lemon Juice
let drink = drinks[2]; // Tea
drinks.join(" * "); // Coffee*Pure Water*Tea*Lemon Juice





