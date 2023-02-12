// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    for(let i = 0; i < x.length; i++){
        return x[i]*2
    }
}

let test = [1, 2, 3]

maps(test)