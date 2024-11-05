let a = [1, [2, 3], [4, [5]]];
let b = flattenArray(a);
console.log(b);  // Output: [1, 2, 3, 4, 5]

function flattenArray(arr) {
  return arr.flat(Infinity);  // Flatten the array completely
}
