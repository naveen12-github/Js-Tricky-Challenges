// Question 1: Reverse an Array
// Function that takes an array and returns it in reverse order

function reverseArray(arr) {
    return [...arr].reverse();  // Create a copy of the array and reverse it
  }
  
  const input = [1, 2, 3, 4, 5];
  const reversed = reverseArray(input);
  
  console.log(reversed);  // Output: [5, 4, 3, 2, 1]
  