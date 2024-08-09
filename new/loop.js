const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
function toUpper(string) {
  return string.toUpperCase();
}
const upperCats = cats.map(toUpper);// all of them will be uppercase LEOPARD AND SO ON

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered); // ["Leopard", "Lion"]

for (const cat for cats) {
  console.log(cat); // will print Leopard, Serval and so on
}

let i = 0;
while(i < 3) { // 0 1 2 (counts from zero)
  console.log(i);
  i++;
} 

let i = 0;
do (
  console.log(i);
  i++;
) while (i < 3); // 0 1 2

for (let i = 0; i < 3; i++;) // 0 1 2 let are inline variable
console.log(i);

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if(!value) break; // if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely console.log
  sum += value;
}
console.log('Sum: ' + sum);

for(let i= 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  console.log(i); // 1, then 3, 5, 7, 9
}
