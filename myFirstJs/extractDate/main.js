import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const months = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04",
  May: "05", Jun: "06", Jul: "07", Aug: "08",
  Sep: "09", Oct: "10", Nov: "11", Dec: "12"
}
function extractAndFormatDate(str) {
  const regex = /(\d{2})([A-Za-z]{3})(\d{4})/;
  const match = str.match(regex);
  if (match) {
    const DD = match[1];
    const MM = months[match[2]];
    const YY = match[3].slice(-2);

    if (MM) {
      return `${DD}/${MM}/${YY}`;
    } else {
      return "No valid month string found!";
    }
    console.log('match');
  } else {
    return "No valid date string found!";
  }

}


const str = "Update11May2024";
const formattedDate = extractAndFormatDate(str);
console.log(formattedDate); // Output: 05/11/24


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
