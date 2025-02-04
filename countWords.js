function countWords(string) {
  let str = string.toLowerCase().replace("^a-z0-9\s/g",'').split(' ').filter(Boolean);


  let charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount
}

console.log(countWords("")); // Expected: {}
console.log(countWords("a")); // Expected: { a: 1 }
console.log(countWords("ab")); // Expected: { a: 1, b: 1 }
console.log(countWords("ababcb")); // Expected: { a: 2, b: 3, c: 1 }
console.log(countWords("Ababcb")); // Expected: { a: 2, b: 3, c: 1 }
console.log(countWords("123123")); // Expected: { '1': 2, '2': 2, '3': 2 }
console.log(countWords("hello world hello"))
