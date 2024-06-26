import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function isValidPhoneNumber(phone) {
  //const regex        = /^(\+91-?)?(\d{10}$)/;
  //This pattern does not consider leading 0
  const phonePattern = /^(\+91-?)?(\d{10})$/;
  //This pattern considers leading 0
  const phonePattern2 = /^(?:\+91-?)?(0?)(\d{10})$/;
  return phonePattern2.test(phone);
}
function isValidUrl(url) {
  const urlPatter = /^(\https?:\/\/)/;
  return urlPatter.test(url);
}


const phone1 = "+91-8095210076";
const phone2 = "+918095210076";
const phone3 = "08095210076";
const phone4 = "+91-809521007";
const phone5 = "095210076";

console.log(isValidPhoneNumber(phone1)); //true
console.log(isValidPhoneNumber(phone2)); //true
console.log(isValidPhoneNumber(phone3));//true
console.log(isValidPhoneNumber(phone4));//false
console.log(isValidPhoneNumber(phone5));//false
const url = "http://www.wordcup.in";
console.log("url", isValidUrl(url));

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
