// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return a ** b
}
    
function subt(a,b){
    return a - b
}

// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"
// Notes
// A hyphen will separate the two letters in the string.
// You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).

//works but need to make to upppercase 

// const findLetter = (val) => {
//     const str = 'abcdefghijklmnopqrstuvwxyz'
//     const Str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const split = val.split('-')
//     const a = split[0]
//     const b = split[1]
//     if( a === b){
//         return a
//     }
//     if(str.includes(b)){
//         const letter1 = str.split(a) 
//         const str2 = letter1[1]
//         const letter2 = str2.split(b)
//         const result = a + letter2[0] + b
//        console.log(result)
//     } else if( Str.includes(b)){
//         const letter1 = Str.split(a) 
//         const str2 = letter1[1]
//         const letter2 = str2.split(b)
//         const result = a + letter2[0] + b
//        console.log(result)
//     }
// }

// findLetter('C-J')

function gimmeTheLetters(sp) {
    // Extract the first and last letters from the range
    const [start, end] = sp.split('-')
    // Convert the letters to their ASCII codes
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0)
    // Generate the string of letters
      let result = '';
      for (let i = startCode; i <= endCode; i++) {
          result += String.fromCharCode(i);
      }
  
      return result;
  }

  gimmeTheLetters('a-e')
  gimmeTheLetters('A-E')