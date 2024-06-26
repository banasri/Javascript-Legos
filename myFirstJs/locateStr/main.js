import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function locateSubstring(text, substring) {
  const positions = [];
  let position = text.indexOf(substring);
  while (position != -1) {
    positions.push(position);
    position = text.indexOf(substring, position + 1);
  }
  return positions;
}

function locateSubstringMatchAll(text, substring) {
  const positions = [];
  const regex = new RegExp(substring, 'g');
  let matches = text.matchAll(regex);
  console.log(matches);
  for (const match of matches) {
    positions.push(match.index);
  }
  return positions;
}
function locateSubstringRegexExec(text, substring) {
  const positions = [];
  const regex = new RegExp(substring, 'g');
  let match;
  while ((match = regex.exec(text)) != null) {
    console.log(match);
    positions.push(match.index);
  }

  return positions;
}

const text = "This is a simple example. This example is just a sample.";
const substring = "example";
const positions = locateSubstring(text, substring);
const positions1 = locateSubstringMatchAll(text, substring);
const positions2 = locateSubstringRegexExec(text, substring);
console.log(positions);
console.log(positions1);
console.log(positions2);

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
