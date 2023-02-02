function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true;  
  }
  return false;
}



// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i]
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true;
//     }
//   }
//   return false}

/* 
  Time complexity: O(n^2)
  Space Compexity: O(n)
*/

/* 
Initialize empty array called hasTargetSum
For each number in the array, subtract it from target sum and see if the resulting number is in the array
If the sum of the 2 elements is equal to the target sum; return true
Otherwise return false
*/

/*
  We start by creating a constant called seenNumbers and set it equal to an empty object
  As we are iterating over the array, the numbers that we have already iterated over will be passed into the object
  We then create a variable called complement which is equal to the targetSum - array[i]
  If one of the seenNumbers is equal to one of the complements, the function will return true
  Otherwise it will return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
