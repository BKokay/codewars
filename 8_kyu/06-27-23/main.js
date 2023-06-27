// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
//P: a string of numbers
//R: <5 === 0 >5 === 1
//E: ('45385593107843568') --> '01011110001100111'
//P: 1. turn the string into an array 2.1 iterate through the array 2.2 if else statement 3 revert back into string

function fakeBin(x){
    let binArray = [];
    let arr = x.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 5){
            binArray.push(0)
        } else{
            binArray.push(1);
        }
    };
    let binString = binArray.join('');
    return binString 
}

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }