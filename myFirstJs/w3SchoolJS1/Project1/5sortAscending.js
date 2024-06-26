function sortAscending(array) {
  return array.sort((a, b) => a - b);
  //return array.sort((a, b) => a - b);
}

console.log(sortAscending([5, 3, 10, 8]));