function isUpperCase(char) {
  // Method 1
  // const regex = /[A-Z]/;
  // return regex.test(char);
  // Method 2
  if (char === char.toUpperCase())
    return true;
  return false;
  // Method 3
  // if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  //   return true;
  // }
  // return false;
}

function isLowerCase(char) {
  //console.log(char.charCodeAt(0));
  // const regex = /[a-z]/;
  // return regex.test(char);
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 102) {
    return true;
  }
  return false;
}
console.log(isUpperCase("A"));
console.log(isUpperCase("a"));
console.log(isLowerCase("B"));
console.log(isLowerCase("b"));
