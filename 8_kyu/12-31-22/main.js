// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//parameters: an array, neg and positive,
//returns: return an array or empty array
//example: [0, 3, -2, 4] => [-0, -3, 2, -4]
//pseudo code: take in an array, iterate through it, multiply by -1

function invert(array) {
    let result = array.map((x) => x * -1);
    return result;
}

//const invert = array => array.map(num => -num);

//function invert(array) {
//     return array.map(el => -el);
// }