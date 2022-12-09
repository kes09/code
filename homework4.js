// 1.
let array = [5, 25, 89, 120, 36];
array.push('javascript','python');
array.unshift('html', 'CSS');
console.log(array.length);
array.shift();
array.pop();
console.log(array);

// 2.
let fruits = ['ფორთოხალი', 'ბანანი','მსხალი'];
console.log(fruits.length);
fruits.push('ვაშლი','ანანსი');
fruits.unshift('საზამთრო');
console.log(fruits.length);
console.log(fruits);
fruits.splice(2,0,'მანგო');
console.log(fruits);
fruits.shift();
fruits.pop();
console.log(fruits);
console.log(fruits.length);
// 3.
let array1 = [12, 25, 3, 6, 8, 14, 7, 23];
let map1 = array1.map(x => x / 3);
console.log(map1);
// 4.
let array3 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let numbers = array3.filter(element => typeof element === 'number');
console.log(numbers);
// 5.
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let result = languages.filter( (element) => element.length > 3);
console.log(result);

// 6.
// let item1 = [12, 'google', 32, null, 'yahoo', 25];
// let newArray = item1.map(function( element) {
//       return  element ;
//     })
// // let newArray = item1.map(element =>  element =='number');
// console.log(newArray);
// 7.
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let result1 = words.filter( (element) => element.includes('m') ||  element.includes('M')  );
console.log(result1);
// 8.
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function(item) {
  (sum += item)
});
console.log(sum);
// 9.
let numbers1 = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
let result2 = numbers1.filter( (element) => element >0 );
console.log(result2);
// 10.
let last =[1, 2, 3, 4, 5];
last.splice(3,0,'a','b', 'c');
console.log(last);