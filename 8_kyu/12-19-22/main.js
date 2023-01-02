// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//Math.sqrt(a) or function sqrt(a){return a**2}
//sqrt the parameter and then add the results - reduce

function squareSum(numbers) {
    return numbers.reduce(
        (acc, current) => acc + current ** 2, 0)
};

console.log(squareSum([1, 2, 2])) //9
