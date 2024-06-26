function countChar(str, char) {

  let count = 0;
  char = char.toLowerCase();
  str = str.toLowerCase();
  let pos = 0;
  while (pos !== -1) {
    pos = str.indexOf(char, pos + 1);
    if (pos !== -1) {
      count++
    }
  }
  return count;
}

function charCount(str, char) {
  char = char.toLowerCase();
  str = str.toLowerCase();
  const total = str.split("").reduce((accum, item) => {
    if (item === char) {
      accum++;
    }
    return accum;
  }, 0);
  return total;
}

console.log("MissIsipi", "I");
console.log(countChar("MissIsipi", "I"));
console.log('charCount("MissIsipi", "I")', charCount("MissIsipi", "I"));