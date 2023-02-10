// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

//P base , limit (numbers always +, never 0)
//R return an array of the values that are multiples of base up to the limit. If limit is a multiple, include limit
//E (3, 9) => [3, 6, 9]; (6, 9) => [6]; (4, 19) => [4, 8, 12, 16]
//P base * 1, base * 2, base * 3 ... up to Limit; add each to an array; if limit % base === 0, push limit to array

function findMultiples(integer, limit) {
    let arr = [];
    for(let i = 1; i <= limit/integer; i++){
        let mult = integer * i;
        arr.push(mult);
        }
    return arr   
}