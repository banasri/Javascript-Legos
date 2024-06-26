import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function countSubstringOccurrences(mainStr, subStr) {
  let count = 0;
  let pos = 0;
  while ((pos = mainStr.indexOf(subStr, pos)) !== -1) {
    count++;
    pos += subStr.length;
  }
  return count;
}

let mainString1 = "HelloHelloHello";
let substring1 = "Hello";
let occurrences1 = countSubstringOccurrences(mainString1, substring1);
console.log(`The substring "${substring1}" occurs ${occurrences1} times.`);  // Output: 3

let mainString2 = "abcabcabc";
let substring2 = "abc";
let occurrences2 = countSubstringOccurrences(mainString2, substring2);
console.log(`The substring "${substring2}" occurs ${occurrences2} times.`);  // Output: 3

let mainString3 = "ababababa";
let substring3 = "aba";
let occurrences3 = countSubstringOccurrences(mainString3, substring3);
console.log(`The substring "${substring3}" occurs ${occurrences3} times.`);  // Output: 2

let mainString4 = "aaaa";
let substring4 = "aa";
let occurrences4 = countSubstringOccurrences(mainString4, substring4);
console.log(`The substring "${substring4}" occurs ${occurrences4} times.`);

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
