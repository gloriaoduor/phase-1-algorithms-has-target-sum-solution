//Problem:
// I need to make a hasTargetSum function that checks if two
// numbers in an array add up to some target number.
// For example, if the array is [1,2,3,4] and the target number is 6,
// I know that 2 and 4 add up to 6, so I should return true. If I have the same 
// array and the target is 10, no two numbers in the array add up to 10,
// so I should return false.

//pseudocode
// iterate over the array of numbers
//   for the current number, identify a complementary number that adds to our target
//   (for example: if our number is 2, and the target is 5, the complementary number is 3)
//   iterate over the remaining numbers in the array
//     check if any of the remaining numbers is the complement
//       if so, return true
// if we reach the end of the array, return false

function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) return true;

    seenNumbers.add(number);
  }
  return false;
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
}

module.exports = hasTargetSum;