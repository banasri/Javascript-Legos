function sumOfSquares(arr) {
  // let sum = 0;
  // for (let i in arr) {
  //   console.log("for in loop", i);
  // }
  // for (let i of arr) {
  //   console.log("for of loop", i);
  // }

  const sum = arr.reduce((accum, item) =>
    accum += item * item
    , 0)
  console.log(sum);
  return sum;
}

console.log(sumOfSquares([1, 2, 3]));