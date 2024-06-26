import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function snakeToCamel(str) {
  return str.split("_").map((item, index) => {
    if (index == 0) {
      return item.toLowerCase();
    } else {
      return (item[0].toUpperCase() + item.slice(1).toLowerCase());
    }
  }).join("");
};

function camelToSnake(str) {
  //return str.replace(/([A-Z])/g, '_$1').toLowerCase();
  return str.replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
    .replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
};

let snakeStr = "this_is_a_snake_case";
let camelStr = snakeToCamel(snakeStr);
let camelCase = "thisIsMyCamelString";
console.log("snake case string", camelToSnake(camelCase));
console.log("camel case string", camelStr);

document.querySelector('#app').innerHTML = `
  <div>
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
