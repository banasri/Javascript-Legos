function isPalindrome(string) {
  //  Regex - /\W/g selects all non word chars
  //  Regex - /[\W_]+/g selects all non word chars including _ , selects more than 1 occurence in one go. The + is more efficient when dealing with longer sequences of non-word characters since it processes them in a single step rather than one by one.
  const strWithoutPunctuation = string.toLowerCase().replace(/\W/g, "");
  console.log(strWithoutPunctuation);
  const strNew = strWithoutPunctuation.split("").reverse().join("");

  if (strNew == strWithoutPunctuation) {
    return true;
  }
  return false;
}

console.log('isPalindrome("heelo")', isPalindrome("heelo"));
console.log('isPalindrome("racecar")', isPalindrome("racecar"));
console.log('isPalindrome("A man,  plan, a canal, Panama")', isPalindrome("A man,  plan, a canal, Panama"));
