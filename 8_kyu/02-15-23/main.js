// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//P: a, b which are numbers
//R: return an array of all the numbers between and including a & b
//E: 
// a = 1
// b = 4
// --> [1, 2, 3, 4]
//P: create an empty array. Use a for loop to iterate from a until b. push to the array each number


function between(a,b){
    let arr = [];
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    return arr 
}

between(1,4)
