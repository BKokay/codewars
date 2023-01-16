// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
//P 
//R return the number of vowels in a string - number
//E 'the little lili' => 5 
//P Take in a string. split the string and filter out the vowels. count the number of vowels and return. 

function vowelCount(str) {
    let vowels = str.match(/[aeiou]/g); //an array of the included vowels
    if(vowels){
      return vowels.length;
    } else {
      return 0;
    }
}