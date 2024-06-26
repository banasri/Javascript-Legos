function sumOfDigits(num) {
  // const arr = num.toString().split("");
  // return arr.reduce((accum, curr) => accum + Number(curr), 0);
  const arr = Array.from(num.toString(), Number);
  console.log(arr);
  return arr.reduce((accum, curr) => accum + curr, 0);
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));