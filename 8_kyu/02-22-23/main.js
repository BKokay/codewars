// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

//P takes in an array of numbers. Could me positive or negative. 
//R return null if the whole array is consecutive or the number that is non-consecutive if there is one
//E [1,2,3,4,6,7,8] -> retun 5  [1,2,3,4,5] -> return null
//P check to see if the array is positive or negative.  if the array is positive, iterate through the array and compare arr[i] + 1 with arr[i + 1]. If they're !==, return the arr[i + 1] else return null 

function firstNonConsecutive(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + 1 !== arr[i + 1]){
            return arr[i + 1];
        }
    }
    return null
}