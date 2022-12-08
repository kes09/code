// 1.
function sum(...n) {
  let newSum = 0;
  for (let item of n) {
      if (item > 0) {
          newSum += item; 
      }
  }
  return newSum;
}

let resultSum = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(resultSum);
// 2.
function sum1(...numbers){
let newSum1 = 0;
for(let item of numbers){
  newSum1 +=item;
}
return newSum1;
}
let resultSum1= sum1(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultSum1);
// 3.
let user = {
firstname: 'giorgi',
lastname: 'saakadze',
age: 32,
isloggedin: true
}
function printNameUser(user) {
  if (user.isloggedin) {
      return user.firstname + " " + user.lastname;
  } else{
      return false;
  }
}
let resultFunction = printNameUser(user);
console.log(resultFunction);
// 4.
function max (...array){
console.log(Math.max(...array));
}

max(35,100,98,56,77,348,238);
// 5.
let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];

for (let item of array){
if (item.length > 4 && item.includes('av')) {
  console.log(item);
}
}

for ( i=0; i< array.length; i++){
if (array[i].length > 4 && array[i].includes('av')) {
  console.log(array[i]);
}
}
array.forEach(function(item) {
  if (item.length > 4 && item.includes('av')) {
      console.log(item);
  }
})