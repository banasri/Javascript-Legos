import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function replaceStrWithinString(original, searchStr, replaceStr) {
  const regex = new RegExp(searchStr, 'gi');
  return original.replace(regex, replaceStr);
}

function removeSpecialCharacters(inputStr) {
  return inputStr.replace(/[^a-zA-Z0-9]/g, '');
}
const originalString = 'Hello World! The world is beautiful.';
const searchString = 'world';
const replaceString = 'Earth';
const resultString = replaceStrWithinString(originalString, searchString, replaceString);
console.log(resultString);

let inputString = "Hello&*World()Test";
let cleanedString = removeSpecialCharacters(inputString);
console.log("Original String: " + inputString);  // Output: Hello&*World()Test
console.log("Cleaned String: " + cleanedString);  // Output: HelloWorldTest
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
