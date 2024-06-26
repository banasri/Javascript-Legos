function isPowOf2(num) {
  // if (num === 1) return true;
  // for (let i = 1; i < 2 ** 20; i = i * 2) {
  //   if (num === i) {
  //     return true;
  //   } else if (num < i) {
  //     return false;
  //   }
  // }
  //console.log((num & (num - 1)));
  //console.log(num, num - 1);
  if ((num & (num - 1)) == 0) {
    return true;
  }
  return false;
}

console.log("isPowOf2(8)@", isPowOf2(8));
console.log("isPowOf2(7)", isPowOf2(7));
console.log("isPowOf2(15)", isPowOf2(15));
console.log("isPowOf2(16)", isPowOf2(16));
console.log("isPowOf2(17)", isPowOf2(17));
console.log("isPowOf2(512)", isPowOf2(512));
console.log("isPowOf2(513)", isPowOf2(513));
console.log("isPowOf2(514)", isPowOf2(514));
