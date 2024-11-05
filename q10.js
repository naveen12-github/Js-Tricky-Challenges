function calculateAverage(arr) {
    const total = arr.reduce((sum, value) => sum + value, 0);
    return arr.length ? total / arr.length : 0;
}

const inputArray10 = [1, 2, 3, 4, 5];
console.log(calculateAverage(inputArray10)); // Output: 3
