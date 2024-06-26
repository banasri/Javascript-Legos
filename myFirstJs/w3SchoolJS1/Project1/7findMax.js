function findMax(array) {
  //return Math.max.apply(null, array);
  return Math.max(...array);
}

console.log("max of [ 1, 5, 3, 9, 2]", findMax([1, 5, 3, 9, 2]));
console.log("max of [ -11, -5, -2, -9, -3]", findMax([-11, -5, -2, -9, -3]));