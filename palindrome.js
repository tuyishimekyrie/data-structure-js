// start function
// read the input from the user
// check if the input is empty
// if the input is empty, return true
//  else check if the input is palindrome
//  if the input is palindome , return true

// function palindrome(str) {
//   let cleanedString = str.toLowerCase().replace("/a-z0-9/g", "");
//   function reverseString(cleanedString) {
//     let reversedString = [];

//     for (let i = cleanedString.length - 1; i >= 0; i--) {
//       reversedString.push(cleanedString[i]);
//     }
//     return reversedString.join("");
//   }

//   if (cleanedString === "") {
//     return true;
//   }
//   return (
//     cleanedString.toLowerCase() === reverseString(cleanedString.toLowerCase())
//   );
// }


function palindrome(str) {
    let cleanedString= str.toLowerCase().replace('/a-z0-9/g','')

    return cleanedString === cleanedString.split('').reverse().join('')
}

console.log(palindrome("")); // Expected: true
console.log(palindrome("a")); // Expected: true
console.log(palindrome("12321")); // Expected: true
console.log(palindrome("racecar")); // Expected: true
console.log(palindrome("!@#$%")); // Expected: false
