const str = "Watch thapa technical1213 javascript course on youtube";

function findLongestWord1(str) {
  const array = str.split(" ");
  const words = array.sort((a, b) => a.length - b.length);
  return words.at(-1);
}

function findLongestWord2(str) {
  const array = str.split(" ");
  return array.reduce(
    (accum, current) => current.length > accum.length ? current : accum, "")
}
console.log(findLongestWord1(str));
console.log(findLongestWord2(str));