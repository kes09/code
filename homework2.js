//1.
let obj = {
 berlin: 'germany',
 Tbilisi: 'georgia',
 Kiev: 'ukraine'
 }

 let printInfo =  'Tbilisi ' + " " + 'is ' + obj.Tbilisi ;
 console.log(printInfo);

 
//  2.
for (let i = 5; i <= 100; i++) {
  console.log(i);
}
//3.
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for ( let x of array1){
  if ( x> 0 && x< 10){
    console.log(x);
  }
}
//4.
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let x of array2){
  if (x =5){
    console.log('არის')
      break;
    }
  }
//5.
let array3= [1, 2, 3, 4, 5];
let sum=0;
for (const item of array3) {
  sum += item;
}
console.log(sum); 

// 6.
let array4 = [1, 2, 3, 7, 6, 9];
let sum1=0;
for (const item of array4) {
  sum1 += item;
}
console.log(sum1/array4.length); 
//7.
let number1=  30;
switch(number1){
  case 5:
     console.log(5);
  break;
  case 10:
    console.log(10);
  break;
  default:
    console.log('სხვა რიცხვი');
}
// 8.
let array5 = [1, 2, 3, 7, 6, 9];
for (let item of array5) {
  if (item == 7) {
      continue
  }
  console.log(item);
}
