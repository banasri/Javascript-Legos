import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function splitAndTrimFruits(fruitString) {
  if (fruitString.trim() == "") {
    return [];
  }
  return fruitString.split(',').map((fruit) => fruit.trim()).filter((fruit) => fruit !== "");
}
const emptyString = "";
const fruitsOnlySeparators = ", , ,";
const fruitsNormal = "apple, banana , cherry ";

console.log(splitAndTrimFruits(emptyString)); // Output: []
console.log(splitAndTrimFruits(fruitsOnlySeparators)); // Output: []
console.log(splitAndTrimFruits(fruitsNormal)); // Output: ['apple', 'banana', 'cherry']

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
