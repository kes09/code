//1.
let user = {
  firstName: 'giorgi',
  lastname: 'smith',
  age: 25,
  studentstatus: 'active'
}
console.log(user.studentstatus);
//2.
let names=['Mari', 'Keso', 'Tatia', 'Ano','Salome'];

for(let item=0; item<5; item++){
  console.log(names[item]);
}

let i=0;

while(i < names.lenght) {
  console.log(names[i]);
  i++;
}
//3.
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for(let item=0; item<11; item++){
  if(numbers[item] >5){
  console.log(numbers[item]);
  }
}

//4.
let userInfo = {
  name: 'giorgi',
  age:  20,
  studentstatus: 'active'
}

if (userInfo.age< 18 && userInfo.studentstatus=='active'){
  console.log('Hello');
} else if(userInfo.name=='Levani'){
  console.log('hello levani');
} else if (userInfo.age< 25 && userInfo.studentstatus=='active'){
  console.log('hello world');
}else {
  console.log('error')
}
//5.

let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
for(let i in array)
  if ( typeof array[i]=== "string"){
    console.log(array[i]);
  }

//6.
let arrayNumber = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];

for(let i=0; i< arrayNumber.length; i++){
  for (let n=0; n< arrayNumber[i].length; n++)
  if(arrayNumber[i][n] > 0)
  console.log(arrayNumber[i][n]);
}
//7.
let arrayNumbers = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for(let i=0; i< arrayNumbers.length; i++){
  if(arrayNumbers[i] %2== 0){
    console.log(arrayNumbers[i]);
  }
}

for(let i=0; i< arrayNumbers.length; i++){
  if(arrayNumbers[i] %2 != 0){
    console.log(arrayNumbers[i]);
  }
}
//8.
let users = [
  {username: 'giorgi', status: false},
  {username: 'levani', status: false},
  {username: 'anna', status: true}
]
for (let i=0; i< users.length; i++){
  if ( users[i].status== true){
    console.log(users[i]);
  }
}




