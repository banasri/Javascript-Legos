import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function extractFileNameAndExtension(filepath) {
  const filenameExtn = filepath.split('/').pop();
  console.log('filenameExtn', filenameExtn);
  const lastDotIndex = filenameExtn.lastIndexOf('.');
  const filename = filenameExtn.substring(0, lastDotIndex);
  console.log('filename', filename);
  const extention = filenameExtn.substring(lastDotIndex + 1);
  return { filename, extention };
}

const filePath = '/Users/test/Desktop/SomeMovie.mp4';
const { filename, extention } = extractFileNameAndExtension(filePath);
console.log('filename, fileExtension', filename, extention);

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
