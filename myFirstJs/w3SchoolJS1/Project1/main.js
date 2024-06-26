import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// var
varX = 4;
console.log(varX);
var varX = 3;
console.log(varX);
//Declaring variables
let x;
var z;
console.log(x); // outputs : undefined
x = 6;
console.log(x); // outputs : 6

let y = 5;
y = 6; //Redeclaring let y = 6; give error.

//Concatenation of string
var z = "5" + 2 + 3;
console.log(z); // outputs : 523
z = 2 + 3 + "5";
console.log(z); // outputs : 55

//Block scope
{
  let a = 5;
  console.log(a); // outputs : 5
  var b = 6;
  console.log(b); // outputs : 6
}
//Uncaught ReferenceError: a is not defined
// ReferenceError: Cannot access 'd' before initialization
// console.log(d);
let a = 10;
let c = 5;
let d = a + c;
console.log(b); // outputs : 6
console.log(d);
// const array
const cars = ['Saab', 'Volvo', 'BMW'];
//cars = ['maruti']; //Uncaught TypeError: Assignment to constant variable.
// const object
const car = { type: "Fiat", model: "500", color: "white" };

//car = { type: "Volvo", model: "EX60", color: "red" }; //Uncaught TypeError: Assignment to constant variable.
// Bit-wise operator 
console.log("~5", ~5);
console.log("5^1", 5 ^ 1);
let x1 = 10;
x1 ^= 5; // x1 = x1 ^ 10; 0101 ^ 1010 = 1111 = 15 XOR bitwise ^
console.log("x1", x1); // outputs : 15

// Logical operators
let x2 = 100;
console.log("x &&= 5", x &&= 5);
console.log("x &&= 5", 100 && 5);
/* This is a comment */
/*
document.getElementById("inside").innerHTML = "Hello World!"
document.getElementById("inside").style.fontSize = "5em";
document.getElementById("inside").style.display = "none";
document.getElementById("inside").style.display = "block";
*/
// Specifying the window keyword is optional. window.alert(5 + 6)
//alert("Hi!");
{/* <button onClick="document.write(6+5)">Button</button> */ }
{/* <button onclick="print()">Print this Page</button> */ }
//JS Object
const person = {
  name: "John",
  age: 34,
  city: "New York",
};

let text = "";
for (let x in person) {
  text += person[x] + " ";
};
console.log("text", text);

delete person.age;
let textD = "";
for (let x in person) {
  textD += person[x] + " ";
};
console.log("text after delete age", textD);
// Create an Array
const myArray = Object.values(person);

// Display the Array
console.log("myArray", myArray);

//Object.entries
const fruits = { Bananas: 200, Apples: 300, Oranges: 400 }
let text1 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text1 += fruit + ": " + value + ' ';
}
console.log("text1", text1);
console.log("JSON.stringify()", JSON.stringify(person));
console.log("JSON.stringify()", JSON.stringify(fruits));
//Strings 
let xx = "John";
let yy = new String("John");
console.log("typeof(xx)", typeof (xx));
console.log("typeof(yy)", typeof (yy));
//String using object String
let xx1 = new String("John");  // x is an object
let yy1 = new String("John");  // y is an object
console.log("xx1 == yy1", xx1 == yy1); //false as objects cannot be compared
//String Methods
let text11 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("text11.length", text11.length);

//charAt()
let text12 = text11.charAt(4);
console.log("text11.charAt(-4)", text11.charAt(-4)); //does not give any output
console.log("text11.charAt(4)", text12);
console.log("text11.charCodeAt(4)", text11.charCodeAt(4));
console.log("text11.at(1)", text11.at(1));
// at() allows negative indexes while charAt() does not, at(-2) is same as at(str.length - 2)
console.log("text11.at(-2)", text11.at(-2));
console.log("text11[26]", text11[26]); // returns undefined
console.log("text11.charAt(26)", text11.charAt(26)); // returns an empty string
//text11[3] = "1";
//main.js:117 Uncaught TypeError: Cannot assign to read only property '3' of string 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// String Parts
//            0123456789012356789
let text13 = "Apple,.Banana,.Kiwi";
console.log("text13.slice(7,13)", text13.slice(7, 13)); // end not included
console.log("text13.slice(7)", text13.slice(7)); // if end is not given, start to end
console.log("text13.slice(-4)", text13.slice(-4)); // Kiwi

console.log("text13.substring(7,13)", text13.substring(7, 13)); // end not included
console.log("text13.substring(7,6)", text13.substring(7, 6)); // start>end, swapped
console.log("text13.substring(7,-6)", text13.substring(7, -6)); // same as   (7, 0)
console.log("text13.substring(7,0)", text13.substring(7, 0)); // 
console.log("text13.substring(7)", text13.substring(7)); // start to end
console.log("text13.substring(-4)", text13.substring(-4)); //values < 0 are treated as 0

console.log("text13.substr(7,6)", text13.substr(7, 6)); // Second parameter is length
console.log("text13.substr(7)", text13.substr(7)); // if end not given, start to end
console.log("text13.substr(-4)", text13.substr(-4)); // Kiwi

let txt1 = "5";
console.log('txt1.padStart(8, "0")', txt1.padStart(8, "0"));

let num = 6;
let txt2 = num.toString();
console.log('txt2.padStart(4, "0")', txt2.padStart(4, "0"));

//Replace
let text3 = "Please visit Microsoft and Microsoft!";
let newText3 = text3.replace('Microsoft', 'W3School');
console.log('newText3', newText3);
newText3 = text3.replace(/Microsoft/gi, 'W3School');
console.log('newText3', newText3);

let text4 = "I love cats. Cats are very easy to love. Cats are very popular.";
//text = text4.replaceAll(/Cats/, "Dogs"); // main.js:156 Uncaught 
//TypeError: String.prototype.replaceAll called with a non-global RegExp argument
//    at String.replaceAll

text = text4.replaceAll(/Cats/g, "Dogs").replaceAll(/cats/g, "dogs");
console.log(text);

text = "a,b,c,d,e,f";
const myArray1 = text.split(",");
console.log(myArray1); // ['a', 'b', 'c', 'd', 'e', 'f']
const myArrayA = text.split();
console.log(myArrayA); // ['a,b,c,d,e,f']
const myArray2 = text.split("");
console.log(myArray2);// ['a', ',', 'b', ',', 'c', ',', 'd', ',', 'e', ',', 'f']

//Search
text = "Please locate where 'locate' occurs!";
console.log('text.indexOf("locate")', text.indexOf("locate"));
console.log('text.lastIndexOf("locate", 20)', text.lastIndexOf("locate", 20));

console.log('text.search("locate")', text.search("locate"));
console.log('text.search(/locate/, 8)', text.search(/locate/, 21));

text = "The rain in SPAIN stays mainly in the plain";
const arr1 = text.match("ain");
console.log(arr1);
//['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
const arr2 = text.match(/ain/);
console.log(arr2);
//['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
const arr3 = text.match(/ain/gi);
console.log(arr3);
//['ain', 'AIN', 'ain', 'ain']
// matchAll()
let textC = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = textC.matchAll("Cats");
console.log(Array.from(iterator));

// includes()
text = "Hello world, welcome to the universe.";
console.log(text.includes("world", 12));

//JS numbers
console.log('typeof(NaN)', typeof (NaN));
console.log('typeof(Infinity)', typeof (Infinity));
//other bases
let myNum = 32;

console.log("myNum.toString(2)", myNum.toString(2));
console.log("myNum.toString(8)", myNum.toString(8));
console.log("myNum.toString(10)", myNum.toString(10));
console.log("myNum.toString(16)", myNum.toString(16));
console.log("myNum.toString(60)", myNum.toString(32));

let xBig = 1234567890123456789012345n;
let yBig = BigInt(1234567890123456789012345);

console.log('xBig', xBig + xBig);
console.log('typeof(xBig)', typeof (xBig));

console.log('xBig + myNum', xBig + BigInt(myNum));
let safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
safeInt = Number.MIN_SAFE_INTEGER
console.log(safeInt);

console.log(Number.isInteger(123456789));
console.log(Number.isSafeInteger(1234567890123456789012345));
//console.log("safeInt.isInteger()", safeInt.isInteger());
// TypeError: safeInt.isInteger is not a function
//at main.js:224:44
// Number methods
let float = 9.656656;
console.log('float.toExponential()', float.toExponential());
console.log('float.toExponential(2)', float.toExponential(2));
console.log('float.toExponential(4)', float.toExponential(4));
console.log('float.toExponential(1)', float.toExponential(1));


console.log('float.toFixed(2)', float.toFixed(2));
console.log('float.toFixed(4)', float.toFixed(4));
console.log('float.toFixed(0)', float.toFixed(0));
console.log('float.toFixed()', float.toFixed());

console.log('float.toPrecision()', float.toPrecision());
console.log('float.toPrecision(2)', float.toPrecision(2));
console.log('float.toPrecision(4)', float.toPrecision(4));
console.log('float.toPrecision(6)', float.toPrecision(6));

console.log(Number.parseInt(float));

// Arrays
const fruitArr = ["Banana", "Orange", "Apple", "Mango"];
console.log('fruitArr.toString()', fruitArr.toString());
console.log('fruitArr', fruitArr);
console.log('typeOf(fruitArr)', typeof (fruitArr));
fruitArr.forEach((item) => {
  console.log(item);
});
//Adding elements with high indexes can create undefined "holes" in an array:
fruitArr[6] = "Kiwi";
console.log(fruitArr.length);
for (let i = 0; i < fruitArr.length; i++) {
  console.log(fruitArr[i]);
}

//A Common Error
const points1 = [40]; // is not the same as:
const points2 = new Array(40);
console.log(points1);
console.log(points2);
console.log('Array.isArray(fruitArr)', Array.isArray(fruitArr));
console.log('fruitArr instanceof Array', fruitArr instanceof Array);

console.log("fruitArr[1]", fruitArr[1]);
console.log("fruitArr[-1]", fruitArr[-1]);
console.log("fruitArr.at(1)", fruitArr.at(1));
console.log("fruitArr.at(-1)", fruitArr.at(-1));

console.log('fruitArr.join("@")', fruitArr.join("@"));

const frt = ["Banana", "Orange", "Apple", "Mango"];
let frtPop = frt.pop();
console.log("frtPop", frtPop);
let frtPush = frt.push("Mango");
console.log("frtPush", frtPush);
console.log("frt", frt);
let frtShift = frt.shift();
console.log("frtShift", frtShift);
console.log("frt", frt);
let frtUnShift = frt.unshift("Banana");
console.log("frtUnShift", frtUnShift);
console.log("frt", frt);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys, "Avantika", "Anamika");
console.log('myChildren', myChildren);

const myArr = [[1, 2], [3, 4], [5, 6], [[7, 8], [9, 0]]];
console.log('myArr', myArr);
const myFlat = myArr.flat(2);
console.log('myArr', myArr);
console.log('myFlat', myFlat);
const output = [];
function flatten(arr, depth) {
  if (depth == -1) return;
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flatten(item, depth - 1);
    } else {
      output.push(item);
    }
  })
}
console.log('myArr', myArr);
flatten(myArr, 2);
console.log('myFlat', output);

const fruitSp = ["Banana", "Orange", "Apple", "Mango"];
const resSp = fruitSp.splice(1, 0, "Lemon", "Kiwi");
console.log('fruitSp', fruitSp);
console.log('resSp', resSp);

const frtInc = [1, 2, 3, NaN];
console.log(isNaN(frtInc[3]));
console.log(frtInc.includes(NaN));

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(x => x > 18);
let firstIdx = numbers.findIndex(x => x > 18);
console.log(first);
console.log(firstIdx);

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
let highIdx = temp.findLastIndex(x => x > 40);
console.log(high);
console.log(highIdx);

const fru = ["Banana", "Orange", "Apple", "Mango"];
//console.log('fru.sort()', fru.sort().reverse());
const fruSorted = fru.toSorted();
const fruReversed = fru.toReversed();
console.log('fru', fru);
console.log('fruSorted', fruSorted);
console.log('fruReversed', fruReversed);

const points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log('points', points);
points.sort(function (a, b) { return a - b });
console.log('points', points);
points.sort(function (a, b) { return b - a });
console.log('points', points);
points.sort(function () { return 0.5 - Math.random() });
console.log('points', points);

console.log('Math.min.apply(null, points)', Math.min.apply(null, points));
console.log('Math.max.apply(null, points)', Math.max.apply(null, points));

function myArrayMin(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(myArrayMin(points));

const carAll = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

carAll.sort(function (a, b) { return a.year - b.year });
console.log(carAll);
console.log("After sorting by year:", JSON.stringify(carAll));
console.log("After sorting by year:", JSON.parse(JSON.stringify(carAll)));
carAll.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x > y) return 1;
  if (x < y) return -1;
  return 0;
});
console.log(carAll);

//Every and some
const numbers1 = [45, 4, 9, 16, 25];
let allOver18 = numbers1.every(x => x > 18);
console.log(allOver18);
let someOver18 = numbers1.some(x => x > 18);
console.log(someOver18);

const arrFrm = Array.from("123456");
console.log(arrFrm);

const fruitKs = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruitKs.keys();
for (let x of keys) {
  console.log(x);
}

const f = fruitKs.entries();
for (let x of f) {
  console.log(x);
}

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(months);
console.log(myMonths);
console.log(myMonths.with(1, 'February'));

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
// Dates
const dt = new Date();
console.log(dt);

const dt1 = new Date('2024-06-04');
console.log(dt1);

const dtS = new Date("oct 13, 2014");
console.log(dtS);

const dt2 = new Date(2024, 0, 32, 10, 30, 12, 12);
console.log(dt2);

const dt3 = new Date(2024, 0);
console.log(dt3);

const dt4 = new Date(2024);
console.log(dt4);

const newDate = new Date();
console.log('newDate.toString()', newDate.toString());
console.log('newDate.toDateString()', newDate.toDateString());
console.log('newDate.toUTCString()', newDate.toUTCString());
console.log('newDate.toISOString()', newDate.toISOString());

const today = new Date();
const yesday = new Date(2024, 5, 3);
const diff = today - yesday;
console.log(today);
console.log(yesday);
console.log(diff);
console.log(Date.parse(new Date()));

const date1 = new Date();
console.log('date1', date1);
console.log('date1.getFullYear()', date1.getFullYear());
console.log('date1.getMonth()', date1.getMonth());
console.log('date1.getDate()', date1.getDate());
console.log('date1.getDay()', date1.getDay());
console.log('date1.getHours()', date1.getHours());
console.log('date1.getMinutes()', date1.getMinutes());
console.log('date1.getMilliseconds()', date1.getMilliseconds());
console.log('date1.getTime()', date1.getTime());
console.log('date1.getTime()', Date.now());

console.log('date1', date1);
console.log('date1.setFullYear(2020)', date1.setFullYear(2020, 11, 12));
console.log('date1', date1);
console.log('date1.setFullYear(2020)', date1.setMonth(1));
console.log('date1', date1);

//Math
//round
console.log('Math.round(4.6)', Math.round(4.6));
console.log('Math.round(4.5)', Math.round(4.5));
console.log('Math.round(4.4)', Math.round(4.4));
//ceil
console.log('Math.ceil(4.9)', Math.ceil(4.9));
console.log('Math.ceil(4.7)', Math.ceil(4.7));
console.log('Math.ceil(4.4)', Math.ceil(4.4));
console.log('Math.ceil(4.2)', Math.ceil(4.2));
console.log('Math.ceil(-4.2)', Math.ceil(-4.2));
console.log('Math.floor(4.7)', Math.floor(4.7));
console.log('Math.floor(4.4)', Math.floor(4.4));
console.log('Math.floor(4.2)', Math.floor(4.2));
console.log('Math.floor(-4.2)', Math.floor(-4.2));

console.log('Math.pow(8, 2)', Math.pow(8, 2));
console.log('Math.abs(-4.7)', Math.abs(-4.7));
console.log('Math.sqrt(64)', Math.sqrt(64));
console.log('Math.min', Math.min(1, 10, 4, 5, 0.2));

//max not included
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//max included
function getRandomInt2(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));
console.log(getRandomInt2(1, 10));
let xs = 1;
switch (xs) {
  case 1:
    console.log("I am 1");
    break;
  case 2:
    console.log("I am 2");
    break;
  default:
    break;
};

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
}

const personx = { fname: "John", lname: "Doe", age: 25 };

for (let x in personx) {
  console.log(x, personx[x]);
}
const numbersR = [45, 4, 9, 16, 25];
let sum = numbersR.reduce((total, value) => {
  return total + value;
}, 100);

console.log("sum", sum);

numbersR.forEach(x => {
  console.log('Math.pow(x,2)', Math.pow(x, 2));
});

function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    }
  }
}
const n = myNumbers();
console.log("n", n);
console.log("n.next()", n.next().value);
console.log("n.next()", n.next().value);

// x

const myNums = {};
myNums[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) { done = true; }
      return { value: n, done: done }
    }
  }
}
for (let num of myNums) {
  console.log(num)
}
const letters = new Set(['a', 'b', 'c']);
for (let x of letters) {
  console.log(x)
}
const letters1 = new Set();
letters1.add('a');
letters1.add(1);
for (let x of letters1) {
  console.log(x)
}
console.log(typeof (letters));
console.log(letters instanceof Set); // true
console.log(letters instanceof Array); // false

//set methods

console.log(letters.has('g'));
//The forEach() method invokes a function for each Set element:e
let letterstr = "";
letters.forEach(x => { letterstr += x });
console.log(letterstr);
letters.add(4);
letters.add('d');
letters.add(5);
const iterator1 = letters.values();

for (let val of iterator1) {
  console.log(val);
}
const iterator2 = letters.keys();
for (let val of iterator2) {
  console.log(val);
}

const iterator3 = letters.entries();
for (let entry of iterator3) {
  console.log(entry);
}

//JSON
const personz = { name: "John", age: 36, country: "US" };
console.log(JSON.stringify(personz));

const arrJsn = ["Banana", "Apple", "Orange", 1];
console.log(JSON.stringify(arrJsn));

//"use strict";
function myFunction() {
  //"use strict";
  console.log(this);
  return this;
}
console.log(myFunction());

let x5 = this;
console.log(x5);

// JS Objects
function Person(fname, lname, age, eye) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.eye = eye;
  this.nationality = "Indian";
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
}
const myFather = new Person("Mihir Lal", "Kabi", 72, "Black");
const myMother = new Person("Ganga", "Kabi", 78, "Black");
const mySister = new Person("Tanusri", "Chatterjee", 49, "Black");
const mySelf = new Person("Banasri", "Gupta", 46, "Black");

console.log(myFather);
console.log(myMother);
console.log(mySister);
console.log(mySelf);
console.log(Object.entries(mySelf));
console.log(mySelf.name());
// const newSelf = {};
// Object.assign(newSelf, mySelf);
// mySelf.age = 42;
// newSelf.age = 45;
// console.log(mySelf);
// console.log(newSelf);
const newSelf = Object.create(mySelf);
console.log(mySelf);
console.log(newSelf);

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const newPer = Object.fromEntries(entries);
console.log(newPer);

console.log(Object.keys(mySelf));
console.log(Object.values(mySelf));

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);

const groupBy = (array, keyFn) => {
  return array.reduce((result, item) => {
    const key = keyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {})
}

const result1 = groupBy(inventory, ({ type }) => type);
console.log(result1);


{
  const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
  ];
  function myCallback(item) {
    return item.quantity > 200 ? "ok" : "low";
  }
  const result = Object.groupBy(fruits, myCallback);
  console.log(result);
}

// JS Function
function sum1(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let xsum = sum1(4, 9, 16, 25, 29);
let xsumAll = sumAll(4, 9, 16, 25, 29);
console.log(xsum);
console.log(xsumAll);

//JS Classes

class Car {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return 'I have a ' + this.carName;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);

    this.model = model;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

// JS Async
// A callback is a function passed as an argument to another function.

function myCalculator(x, y, myCallback) {
  let result = x + y;
  myCallback(result);
}
function myDisplay(result) {
  console.log("result", result)
}

myCalculator(5, 7, myDisplay);

const myAllNumbers = [4, 1, -20, -7, 5, 9, -6];

const posNumbers = removeNegtive(myAllNumbers, (x) => x > 0);

function removeNegtive(array, callback) {
  let l = array.length;
  const result = [];
  for (const x of array) {
    if (callback(x)) {
      result.push(x);
    }
  }
  return result;
}
console.log("posNumbers", posNumbers);

// JS Promises
const samplePromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    const success = true; // Change to false to simulate a rejection

    if (success) {
      resolve("Operation completed successfully!");
      //console.log("samplePromise", samplePromise);
    } else {
      reject("Operation failed.");
      //console.log("samplePromise", samplePromise);
    }
  }, 2000);
});

console.log("samplePromise", samplePromise);

// Basic Promise

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ data: 12, message: "Async operation completed successfully!" });
      } else {
        reject("Async operation failed!");
      }
    }, 2000);
  });
}

doSomethingAsync().then((resp) => {
  console.log(resp.data);
  console.log(resp.message);
}).catch((err) => {
  console.log(err);
})

// JSON
{
  const arr = ["John", "Peter", "Sally", "Jane"];
  console.log("arr", arr);
  console.log("JSON.stringify(arr)", JSON.stringify(arr));
}
{
  const myJSON = '{"name":"John", "age":30, "car":null}';
  const myObj = JSON.parse(myJSON);

  for (let x in myObj) {
    console.log("x , Obj[x] : ", x, myObj[x]);
  }
}