function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const total = arr.reduce((sum, item) => sum + item, 0);
  console.log(total);
  let average = total / arr.length;
  return average;
}

console.log(calculateAverage([5, 10, 2, 8])); 