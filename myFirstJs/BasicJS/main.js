import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

let array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, [9, 10]]
];
let flatArray = [];
function flattenArray(arr, depth = 1) {
  arr.forEach((arrItem) => {
    if (Array.isArray(arrItem) && depth > 0) {
      flattenArray(arrItem, depth - 1);
    } else {
      flatArray.push(arrItem);
    }
  });
  return flatArray;
}

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, (i) * 1000);
  }
}
a();

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
