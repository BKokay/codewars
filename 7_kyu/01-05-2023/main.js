// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

//P: takes in a string, and a separater, returns the string with the number of times each character shows up separated by the sep. 
//R: return a string, with each character separated by the sep
//E: 'hello', 0 => h0e0l0l0
//P: split the string, join using the sep, put it back together

function freqSeq(str, sep) {
    return str.split('').map(i => sep.split(i).length - 1).join(sep)
}