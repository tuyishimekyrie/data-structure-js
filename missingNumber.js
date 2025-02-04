function missingNumber(input) {
    let n = input.length;
    let expectedSum = (n * (n + 1)) / 2;  // Sum of first n natural numbers
    let actualSum = input.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum; // The missing number
}

console.log(missingNumber([0, 1, 3])); // Expected: 2
console.log(missingNumber([1, 4, 3, 0, 2])); // Expected: 5
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8
console.log(missingNumber([0])); // Expected: 1
