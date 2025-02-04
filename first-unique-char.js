// start a function
// read the input
// loop throughthe string
// check if the string is empty
// if the string is empty return -1
// else check if the string occurs only once
// if the string occurs only once return the index
// end

function firstUniqueChar(str) {
  if (str.length == 0) return -1;

  let charCount = {};

  for (char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqueChar(""));
console.log(firstUniqueChar("a"));
console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabbcc"));
console.log(firstUniqueChar("xyzxyzp"));
