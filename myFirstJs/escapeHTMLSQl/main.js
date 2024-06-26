import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39'
}
function escapeHtml(inputHTML) {
  return inputHTML.replace(/[<>&'"]/g, function (match) {
    return htmlEscapes[match];
  })
}
function escapeSql(str) {
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
    switch (char) {
      case "\0":
        return "\\0"; // Escapes the null character
      case "\x08":
        return "\\b"; // Backspace
      case "\x09":
        return "\\t"; // Tab
      case "\x1a":
        return "\\z"; // Substitute character
      case "\n":
        return "\\n"; // Newline
      case "\r":
        return "\\r"; // Carriage return
      case "\"":
      case "'":
      case "\\":
      case "%":
        return "\\" + char; // Escapes double quotes, single quotes, backslash, and percent
    }
  });
}
let inputString = '<script>"Hello& World"</script>';
let escapedString = escapeHtml(inputString);
console.log(escapedString);

let sqlString = 'SELECT * FROM users WHERE name = "John O\'Reilly" AND age > 25\0';
let escapedSqlString = escapeSql(sqlString);
console.log("Escaped SQL: " + escapedSqlString);

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
