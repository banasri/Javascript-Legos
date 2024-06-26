function countVowels(str) {
  // let count =
  //   str.split("").reduce((count, item) => {
  //     let char = item.toLowerCase();
  //     if (
  //       char === 'a' ||
  //       char === 'e' ||
  //       char === 'i' ||
  //       char === 'o' ||
  //       char === 'u'
  //     ) { count++ }
  //     return count;
  //   }, 0);
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arr = str.split("");
  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Helloo world"));
console.log(countVowels("ThE quIck brOwn fox "));