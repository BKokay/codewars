// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//P: an array and a value; could be strings or numbers or both
//R: return true if the array contains the value, false if not
//E: ([1, "happy", 9, 0 "the"], "happy") --> true
//P: iterate through the array and if array[i] === x, return true

function check(a, x){
    let result = false;
      for(i = 0; i < a.length; i++){
          if(a[i] == x){
              result = true;
          } 
      }
    return result
  }

//   function check(a,x){
//     return a.includes(x);
//   };