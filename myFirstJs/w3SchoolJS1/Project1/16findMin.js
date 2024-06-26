function findMin(arr) {
  if (arr.length === 0) {
    return "Empty array!"
  }
  return Math.min(...arr);
}

console.log(findMin([5, 10, 2, 8]));
console.log(findMin([5, -3, 0, 12, -7]));
console.log(findMin([]));