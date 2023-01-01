// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Parameters: an array, whole nums, negatives, positives, 
//returns: one number, of all the nums mult together. 
//examples: [5, 6, 2, 7] => 5 * 6 * 2 * 7 = 420 
//Pseudo code: Iterate through an array and multiply all the numbers together 

function grow(x) {
    let sum = 1
    x.forEach(element => {
        sum = element * sum
    }
    )
    return sum
}

//function grow(x){
//     return x.reduce((a, b)=> a * b,1);
// }

// const grow = (nums) => nums.reduce((product, num) => product * num, 1);