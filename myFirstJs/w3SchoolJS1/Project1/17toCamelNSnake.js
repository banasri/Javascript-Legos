function toCamelCase(str) {
  // str = "hello world baNasRi"

  return str.trim().toLowerCase().split(" ").map((elem, index) => {
    if (index !== 0) {
      return elem.charAt(0).toUpperCase() + elem.slice(1);
    } else {
      return elem;
    }
  }).join("");

}

function camelToSnake(str) {
  return str.replace(/([A-Z])([A-Z][a-z])/g, "$1_$2").
    replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

console.log(camelToSnake(toCamelCase("hello world baNasRi")));