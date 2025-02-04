// function reverseString(str) {
// loop through the string 
// create a new variable to hold the reversed string
// add each character from the right to the new variable
//  exit the function
//  return the new variable

// function reverseString(str){
//     let reversedString = ''
//     for (let i = str.length - 1 ; i >=0 ; i--){
//     //    console.log(str[i])
//     reversedString = reversedString + str[i]
//     }
//     return reversedString
// }


// function reverseString(str){
//     return str.split('').reverse().join('')
// }

function reverseString(str){
    let reversedString = []
    for (let i = str.length - 1 ; i >=0 ; i--){
        reversedString.push(str[i])
    }
    return reversedString.join('')
}

console.log(reverseString(""));         // Expected: ""
console.log(reverseString("a"));        // Expected: "a"
console.log(reverseString("12345"));    // Expected: "54321"
console.log(reverseString("racecar"));  // Expected: "racecar" (Palindrome test)
console.log(reverseString("!@#$%"));    // Expected: "%$#@!"
