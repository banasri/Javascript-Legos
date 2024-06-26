function removeDuplicate(arr) {
  // const newSet = new Set();
  // arr.forEach((item) => {
  //   newSet.add(item);
  // });

  // return Array.from(newSet);
  const newSet = [...new Set(arr)];
  console.log(newSet);
}

console.log(removeDuplicate([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicate([5, 6, 7, 7, 8, 8, 9]));
console.log(removeDuplicate([1, 2, 3, 4]));
console.log(removeDuplicate([]));