// Import stylesheets
import './style.css';

// Write Javascript code!

// let hoppy1 = 'fishing';
// let hoppy2 = 'cooking';
// let hoppy3 = 'playing';
// let hoppy4 = 'sleeping';
// let hoppy5 = 'thinking';

// let name = 'asmaa';
// let age = 30;
// let hoppies = ['fishing', 'cooking', 'playing', 'sleeping', 'thinking', 'sport', 'newww', 'asdff'];

// document.getElementById('name').innerText = name;
// document.getElementById('age').innerText = age;

// let hoppiesList = '';
// for(let i = 0; i < hoppies.length; i++){
//   let li = '<li>' + hoppies[i] + '</li>';
//   console.log(li);
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
// document.getElementById('btn').addEventListener('click', () => {

//   console.log('Logging....')

//   let name = document.getElementById('username').value;
//   let password = document.getElementById('password').value;

//   console.log(name)
//   console.log(password)
// });

// array number
// function add(numbers) {
// }
// add(numbers);

// primitives;
// let n1 = 1;
// let n2 = 2;

// let letters = 'abcdefghijklmnopqrstu';

// // console.log(letters.charAt(0));
// // console.log(letters.charAt(1));
// // console.log(letters.charAt(2));

// for (let i = 0; i < letters.charAt(); i++) {
//   console.log(i);
//   // console.log(letters.charAt(i));
// }

// let s = 'asmaa';
// let numbers = [10, 20, 30];

// let sum = 0;
//   for (let i = 0; i < numbers.length; ++i) {
//     sum = sum + numbers[i];
//   }
// console.log(sum)
// console.log(sum)
// console.log(sum)
// console.log(sum)
// console.log(sum)
// console.log(sum)
// console.log(sum)

// let numbers1 = [1, 2, 3];
// let numbers2 = [100, 200, 300];
// let numbers3 = [40, 50, 60];

/*
i = 0, number[0] = 10 
i = 1, number[1] = 20 
i = 2, number[2] = 30 
*/

// conditions

// let num = 5;
// if(num <= 5){
//   console.log('less than or equal five');
// }
// else{
//   console.log('not five')
// }

// num2 less or equal 10
// num2 less or equal 5   {1-5}
// num2 less or equal 0

// let num2 = 15;
// if (6 <= num2 && num2 <= 10) {
//   console.log('less or equal 10');
// }
// if (1 <= num2 && num2 <= 5) {
//   console.log('less or equal 5');
// }
// if (num2 <= 0) {
//   console.log('less or equal 0');
// }

// sol 2
// if (num2 <= 10 && num2 >= 6) {
//   console.log('6-10');
// } else {
//   // <= 5  and > 10
//   if (num2 > 10) {
//     console.log('invalid');
//   } else {
//     // <= 5
//     if (num2 > 0) {
//       //[1-5]
//       console.log('1 - 5');
//     } else {
//       // <= 0
//       console.log('<= 0');
//     }
//   }
// }

// let var1 = 2 + 4;
// let var2 = 2 < 4;  // true
// let var3 = '2 < 4'; // string

// // always if path
// if(true){

// }else{

// }

// let num = 14;
// let r = num % 2
// if(r===0){
//   console.log('even');
// }else{
//   console.log('odd');
// }

// let ar = [123, 12 ,12 ,12 ,21];
// for (let i = 0; i < ar.length; ++i) {
//   if (ar[i] % 2 === 0) {
//     console.log(ar[i] + ' even');
//   } else {
//     console.log(ar[i] + ' odd');
//   }
// }

// let numberList = '';
// document.getElementById('number_add').addEventListener('click', (e) => {
//   let numberToAdd = document.getElementById('number').value;
//   ar.push(numberToAdd);
//   numberList = ar
//     .map((ele) => `<li> ${ele} => ${ele % 2 === 0 ? 'even' : 'odd'} </li>`)
//     .join(' ');
//   document.getElementById('numbers-li').innerHTML = numberList;
//   document.getElementById('number').value = '';
// });

/*
Task 1: find number of array element less 10
input: ar = [?, ?, ?, .....]; 
output: n = elements less than or equal 10
example: 
ar = [3, 8, 10, 11, 15]
code
code
n = 3, which are {3, 8, 10}
*/

// for(let i = 1; i <= 3; ++i){
//   console.log(i);
// }
// console.log("--------------------");

// for(let i = 1; i <= 3; ++i){
//   console.log(i);
// }
// console.log("--------------------");
// for(let i = 1; i <= 3; ++i){
//   console.log(i);
// }
// console.log("--------------------");

// function inputs with default values
// function printNumbers(from, to = 3) {
//   console.log('from: ' + from);
//   console.log('to: ' + to);
//   for(let i = from; i <= to; ++i){
//     console.log(i);
//   }
//   console.log("--------------------");
// }

// printNumbers();

// function output
// function sum(num1, num2) {
//   let sumAns = num1 + num2;
//   return sumAns;
// }

// let ans = sum(5, 10);   // => 15
// console.log(ans);

// let ar = [5, 6, 7, 30, 40, 50];
// let n = 0;
// for (let i = 0; i < ar.length; ++i) {
//   if (ar[i] <= 10) {
//     n++;
//   }
// }
// console.log(n);

// let ar2 = [12, 3, 4, 10, 5];
// n = 0;
// for (let i = 0; i < ar.length; ++i) {
//   if (ar[i] <= 10) {
//     n++;
//   }
// }
// console.log(n);

// let ar3 = [3, 12, 53, 10, 1];
// n = 0;
// for (let i = 0; i < ar.length; ++i) {
//   if (ar[i] <= 10) {
//     n++;
//   }
// }
// console.log(n);
/*
function numberLessThan10(numbers) {
  let n = 0;
  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] <= 10) {
      n++;
    }
  }
  return n;
}

let nLessThan10 = numberLessThan10([6, 7, 30, 40, 76]);
nLessThan10 = numberLessThan10([6, 7, 30, 40, 76, 12, 3, 1, 3, 10]);
*/
// console.log(nLessThan10);

/* TASK 2
 Write function to return average of array
  input: array
  output: average of array elements
  // NOTE average = sum of elements / size

  for example: 
  [5, 10, 15]
  sum = 30
  average = 30 / 3 => 10 
 */

// function sum(ar) {
//   let s = 0;
//   for (let i = 0; i < ar.length; ++i) {
//     console.log('iteration: ' + i);
//     console.log(ar[i] + ar[i + 1]);
//     console.log(s);
//     s = ar[i] + ar[i + 1];
//   }
//   return s;
// }

// let ans = sum([10, 30]);
// console.log('final sum');
// console.log(ans);

/*
function getAr(){
  // get number from website
  // declare ar = [];
  // number push into ar, ar.push()
  // return ar;
  return [1, 2, 3];
}

function avr(myArr, size){
let ans = (myArr[0]+ myArr[1] + myArr [2])/size;
return ans;
}

let ar = getAr();
let no = avr(ar, 3);  // ans
console.log (no);


function avr(myArr) {
  let sum = 0;
  for (let i = 0; i < myArr.length; i++) {
    sum = sum + myArr[i];
  }
  console.log(newSum);
  let ans = 15 / myArr.length;
  return ans;
}

let aa = [1, 2, 3, 4, 5];
let arr = avr(aa);
console.log(arr);
*/

/*
Task 3
Get Even numbers 
create function getEven(ar) return array of numbers(evens)

for example: 
intput: [1,2,3,4,5,6]
 getEvens(ar) => output  [2, 4, 6]
 hint 
 ar = []
 if even, ar.push(num) // ar = [2, 4]



// Function Shapes


// Shape 1
function shape1(pram1, pram2) {
  let shape = pram1 + ':' + pram2;
  return shape;
}
let r1 = shape1('shape', 1);
console.log(r1);


// Shape 2
let shape2 = function (pram1, pram2) {
  let shape = pram1 + ':' + pram2;
  return shape;
};
let r2 = shape2('shape', 2);
console.log(r2);


// Shape 3
let shape3 = (pram1, pram2) => {
  let shape = pram1 + ':' + pram2;
  return shape;
};
let r3 = shape3('shape', 3);
console.log(r3);
*/

/*
*
**
***
****


let stars = (rows) => {
  let rowOfStars = '';
  for(let r = 1; r <= rows; ++r){
    rowOfStars = rowOfStars + '*';
    console.log(rowOfStars);
  }
}
*/

/*
create function search 
takes: array, key
returns: array index if found, -1 otherwise

for example: 
ar = [5, 2, 3, 7]
search(ar, 3) => 2
search(ar, 10) => -1
search(ar, 5) => 0
*/

/*
create function union 
takes: array1, array2
returns: array consist of array1 elements + array2 elements

for example: 
ar1 = [1, 3, 5]
ar2 = [2, 4, 6]
union(ar1, ar2) => [1, 3, 5, 2, 4, 6]


function intersect(arra1, arra2) {
  let arra3 = [];

  for (let index = 0; index < arra1.length; index++) {
    for (let i = 0; i < arra2.length; i++) {
      if (arra1[index] === arra2[i]) arra3.push(arra1[index]);
    }
  }
  return arra3;
}

function inArray(key, ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === key) return true;
  }
  return false;
}

function subtract1(a1, a2) {
  let final = [];
  let commonAr = intersect([1, 2, 3], [2, 3, 4]);

  for (let index = 0; index < a1.length; index++) {
    let isInCommon = inArray(a1[index], commonAr);
    if (isInCommon !== true) {
      final.push(a1[index]);
    }
  }

  for (let index = 0; index < a2.length; index++) {
    let isInCommon = inArray(a2[index], commonAr);
    if (isInCommon !== true) {
      final.push(a2[index]);
    }
  }
  return final;
}

function subtract2(a1, a2) {
  let final = [];

  // 1, 2, 3
  for (let index = 0; index < a1.length; index++) {
    let currentElement = a1[index];
    let isEqualAnyElement = false;
    for (let index2 = 0; index2 < a2.length; index2++) {
      if (currentElement === a2[index2]) {
        isEqualAnyElement = true;
      }
    }
    if (isEqualAnyElement === false) {
      final.push(currentElement);
    }
  }

  for (let index = 0; index < a2.length; index++) {
    let currentElement = a2[index];
    let isEqualAnyElement = false;
    for (let index2 = 0; index2 < a1.length; index2++) {
      if (currentElement === a1[index2]) {
        isEqualAnyElement = true;
      }
    }
    if (isEqualAnyElement === false) {
      final.push(currentElement);
    }
  }
  return final;
}

function subtract2_Enhanced(a1, a2) {
  let ar1ElementsNotInAr2 = getDifferentElement(a1, a2);
  let ar2ElementsNotInAr1 = getDifferentElement(a2, a1);
  return ar1ElementsNotInAr2.concat(ar2ElementsNotInAr1);
}

// 1, 2, 3
function getDifferentElement(sourceAr, targetAr) {
  let final = [];
  // 1, 2, 3
  // 0, 2, 3
  for (let index = 0; index < sourceAr.length; index++) {
    let currentElement = sourceAr[index];
    let isEqualAnyElement = false;
    for (let index2 = 0; index2 < targetAr.length; index2++) {
      if (currentElement === targetAr[index2]) {
        isEqualAnyElement = true;
      }
    }
    if (isEqualAnyElement === false) {
      final.push(currentElement);
    }
  }
  return final;
}

let zoo = subtract2_Enhanced([1, 2, 3], [2, 3, 4]);
console.log(zoo);

let v1 = 5 + (((3 * 10) / 21) % 12) + 12;
let v2 = 8;

let b1 = 2 > 1 || 5 > 7;
let b2 = true || false || false;

b1 = 2 > 1 && 5 > 7;

b2 = false || (b1 && 2 < 1) || (false && true);

if (2 > 1 && 5 > 7) {
  console.log('in F');
} else {
  console.log('in else');
}

if (b1) {
  console.log('in F');
} else {
  console.log('in else');
}


function isCorrectPassword(providedPass, realPass){
  // providedPass = 'myabcd' 
  // userPass =     'mypasword'
  // providedPass[0] = m  ? search('mypasword', 'm') => 0
  // providedPass[1] = y  ? search('mypasword', 'y') => 1
  // providedPass[2] = a  ? search('mypasword', 'a') => 3
  
  for(let i = 0; i < providedPass.length; ++i){
    let resultIndex = search(realPass, providedPass.charAt(i));
    if(resultIndex != i){
      return false;
    }
  }
  return true;
}






 // search('mypasword', 'y') => 1
function search(str, char){
  for(let i = 0; i < str.length; ++i){
    if(str[i] == char){
      return i;
    }
  }
  return -1;
}

console.log(isCorrectPassword('myabcd', 'mypasword'))
console.log(isCorrectPassword('mypasworx', 'mypasword'))
console.log(isCorrectPassword('mypasword', 'mypasword'))


// OBJECT


 let n = 12, '' [] true   -> primitive data type, {} -> object -> complex type 



let ob = {
  variables,
  functtions
}


let myCar = {
  name: 'ford',
  seats: 5,

  moveTo(destination) {
    console.log('moving to ' + destination);
  },

  startCar() {
    console.log('started car');
  },

  printCarDetails() {
    return console.log('car is : ' + this.name + ',' + ' seats: ' + this.seats);
  },
};

myCar.printCarDetails();

function Car(name, seats) {
  this.name = name;
  this.seats = seats;

  this.moveTo = function (destination) {
    console.log('moving to ' + destination);
  };

  (this.startCar = function () {
    console.log('started car');
  }),
    (this.printCarDetails = function () {
      return console.log(
        'car name is : ' + this.name + ',' + ' seats: ' + this.seats
      );
    });
}

let myCar2 = new Car('toyta', 5);
myCar2.printCarDetails();

let myCar3 = new Car('lada', 7);
myCar3.printCarDetails();


// task
// create object CustomString has value, length, getValue(), getCustomStringLen()

let CustomString = {
  value: 'asmaa',
  length: 5,
  getValue(){
    return this.value;
  },
  getCustomStringLen(){
    return this.length;
  }
};

console.log(CustomString.value)


function CustomString(value, length) {
  this.value = value;
  this.length = length;

  this.getValue = function () {
    return this.value;
  };

  this.getCustomStringLen = function () {
    return this.length;
  };

  this.updateValue = function (newValue = 'newStr') {
    this.value = newValue;
    this.length = newValue.length;
  };

  // sara
  // concat('ammar')  => sara aamar
  this.concat = function (newString = 'ammar') {
    this.value = this.value + newString;
    this.length = this.length + newString.length;
  };

  this.getValueCapitals = function () {
    let resultValue = '';
    for (let i = 0; i < this.value.length; ++i) {
      let currentChar = this.value.charAt(i);
      resultValue = resultValue + currentChar.toUpperCase();
    }
    return resultValue;
  };

  this.getInShort = function () {
    let shortValue = '';
    let letters = 'aeiou';
    for (let i = 0; i < this.value.length; ++i) {
      let currentChar = this.value.charAt(i);
      if (!letters.includes(currentChar)) {
        shortValue = shortValue + currentChar;
      }
    }
    return shortValue;
  };
}

let daughter = new CustomString('sara', 4);
console.log(daughter.value + ', ' + daughter.length);

daughter.concat(' ammar');
console.log(daughter.getValue());

console.log(daughter.getInShort());

console.log(daughter.getValueCapitals());

let daughter2 = new CustomString('leen', 'leen'.length);

// TASK create Rectangular Object
// getWidth(), getHeight(), setWidth(newWidth), setHeight(newHeight), getArea(), getCircumference()

// step 1 create class
function Rect(width, height) {
  this.height = height;
  this.width = width;

  this.getArea = function () {
    return this.height * this.width;
  };
}

// step 2 create 50 objects
function getRects() {
  let ans = [];
  for (let i = 1; i <= 50; ++i) {
    let r = new Rect(i, i); // object
    ans.push(r);
  }

  return ans;
}

let rects = getRects();

// step 3  calculate 50 rects area

// return area of rects
function getRectsArea(rects) {
  // rects = 50 rects
  let sum = 0;
  for (let i = 0; i < rects.length; ++i) {
    sum = sum + rects[i].getArea();
  }
  return sum;
}

let area = getRectsArea(rects);

console.log(area);

// 1, 4, 9, 16, 25   .... 50*50

// Molto (weight), getPrice()    => 100 w / 10    => 10 price
// tesk calc price of 100 molto of 50 gm and 100 Motlto of 100 gm day

// getprice
function Molto(weight) {
  this.weight = weight;

  this.getPrice = function () {
    return this.weight / 10;
  };
}

//object of molto 50 g
function createMoltos(weight2) {
  let ar = [];
  for (let i = 1; i <= 100; ++i) {
    let all = new Molto(weight2); // weight2  = 100; new Molto(100)
    ar.push(all);
  }
  return ar;
}

let moltos100 = createMoltos(100);
let moltos50 = createMoltos(50);

let allMoltos = moltos100.concat(moltos50);
console.log(allMoltos);


function getMoltosPrice(moltos){
  let sum = 0;
  for(let i = 0; i < moltos.length; ++i){
    sum +=  moltos[i].getPrice();
  }
  return sum;
}


console.log(getMoltosPrice(allMoltos));


function Molto(weight, price) {
  this.weight = weight;
  this.price= price;

}


let v1 = 10; 
let v2 = v1; 
v2 = 20; 
console.log(v2);
console.log(v1);


console.log("************** OBJECTS *************")
let ob1 = new Molto(10, 1);
console.log(ob1.weight);

let ob2 = ob1;
console.log(ob2.weight);

ob2.weight = 20;
console.log(ob2.weight);


*/

/*

//class car (consumtion) benzen/kelo ? .... 100 car with diffrent consumtion 1 = i ... car 100 consume 100l/kelo 
//function fill (tank)100 l 

//class
function car(consumtion){ 

this.consumtion = consumtion
this.tank = 0

this.fill = function(){
  let tank = 50;
  this.tank = tank;
}
}


//creation of 100 car 

function onehandredCar(){
  let carArray = []
  for (let i =1 ; i <= 100; ++i){
    let carObject = new car()
carArray.push(carObject)
  }
  return carArray

}
let array =onehandredCar())

// fill 100 tanks by 100L

function filling(){
  for (let i=0 ; i< array.length){

  }
}


function keybourd(butomNumber, color, language, madeCountry, lightOn, diatals) {
  this.butomNumber = butomNumber;
  this.color = color;
  this.language = language;
  this.madeCountry = madeCountry;
  this.lightOn = 0;

  this.diatals = diatals;

  this.getdiatals = function () {
    return (this.diatals = [
      this.butomNumber,
      this.color,
      this.language,
      this.madeCountry,
    ]);
  };

  this.getButomNumber = function () {
    return this.butomNumber;
  };

  this.getColor = function () {
    return this.color;
  };
  this.setLanguage = function (press) {
    this.language = press;
    if (press == 'on') console.log('arabic');
    else console.log(' eng');
  };

  this.getLanguage = function () {
    return this.language;
  };

  this.getMadeCountry = function () {
    return this.madeCountry;
  };

  this.setLightOption = function (lightOn) {
    this.lightOn = lightOn;
    if (lightOn == 1) {
      console.log('lightOn');
    } else {
      console.log('lightOff');
    }
  };

  this.getLightOption = function () {
    return this.lightOn;
  };
}

let k1 = new keybourd();

console.log(k1);

k1.setLightOption(0);
console.log(k1.getLightOption());
k1.setLanguage('on');


*/

/* create Math class
  has following properties: 
    - PI        // eg: let num  = Math.PI; 
  has following functions: 
    - add(x, y) => result     //  eg: Math.add(2,10) => 12
    - multiply(x,y) => result
  


function math() {
  this.PI = 3.14;

  this.add = function (x, y) {
    return x + y;
  };
  
  this.multiplty = function (x, y) {
    return x * y;
  };
  
  this.calcCircleArea = function (r) {
    return this.PI * r ** 2;
  };
  
  this.avrage = function (ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
      sum = sum + ar[i];
    }
   return (sum / ar.length);
  };

  this.factorial = function (n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res = res * i;
    }
    return res;
  };
}

function Rectngular(hieght, width) {
  this.width = width;
  this.hieght = hieght;

  this.getArea = function () {
    return this.width * this.hieght;
  };
  this.getWidth = function () {
    return this.width;
  };
  this.getHieght = function () {
    return this.hieght;
  };
  this.setwidth = function (nWidth) {
    this.width = nWidth;
    console.log(this.width);
  };
  this.setHieght = function (nHieght) {
    this.hieght = nHieght;
  };
  this.printDetails = function () {
    console.log(this.width, this.hieght);
  };
}

let n1 = 10;
let n2 = 20;

n2 = n1;
n2 = 15;

let r1 = new Rectngular(2, 3);

let r2 = new Rectngular(2, 3);

r2 = r1;

r2.setHieght(200);
console.log(r1.getHieght());

let s1 = 'str1';
let s2 = s1;

console.log(s2);
console.log(s1);

s2 = 'str2';

console.log(s2);
console.log(s1);



// let ar = MyAr;
function testAR(ar){
  ar[0] = 10;
}

let myAr = [1,2,3,4]; 


testAR(myAr);

console.log(myAr);
*/

// CALLBACKS
/*

function f1(parm1, parma2){
  parm1();
}

let f2  = function(){};


f1( () => { console.log(14) } , "str");


*/

console.log('started Timer');
// setInterval( ()=>{ console.log('1 seconds passed')} , 1000)
setTimeout(() => {
  console.log('2 seconds passed');
}, 2000);
setTimeout(() => {
  console.log('3 seconds passed');
}, 3000);
