// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//Parameters: num, positive, whole, includes up to num. 
//Returns: Returns list - an array 
//Examples: function powersOfTwo(3){
// [(0**2), (1**2), (2**2), (3**2)] 
// [0, 1, 4, 9]
//}
//Pseudo Code: we need to loop through a function using a for loop, starting at zero, and moving all the way up to the number in the argument. Each iterations does the number to the power of two, and adds that number to an array

function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        result = 2 ** i //if I didn't set result here, nothing would happen 
        arr.push(result)
    }
    return arr
}


