function arraysAreEqual(arr1, arr2) {
  return arr1.every((val, index) => val === arr2[index]);
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));
console.log(arraysAreEqual([], []));