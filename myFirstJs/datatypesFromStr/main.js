import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


let strNumber = "123.45";
let strBooleanTrue = "true";
let strBooleanFalse = "false";
let strDate = "2024-05-21";
let strArray = "apple,banana,cherry";

// Convert string to number
let number = Number(strNumber);
console.log(number); // Output: 123.45

// Convert string to integer
let integer = parseInt(strNumber, 10);
console.log(integer); // Output: 123

// Convert string to float
let float = parseFloat(strNumber);
console.log(float); // Output: 123.45

// Convert string to boolean
let booleanTrue = strBooleanTrue === "true";
let booleanFalse = strBooleanFalse === "false";
console.log(booleanTrue); // Output: true
console.log(booleanFalse); // Output: true

// Convert string to date
let date = new Date(strDate);
console.log(date); // Output: Tue May 21 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// Convert string to array
let array = strArray.split(",");
console.log(array); // Output: ["apple", "banana", "cherry"]

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
