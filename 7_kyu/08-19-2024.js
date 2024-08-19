// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]
// PS: The input is guaranteed to be an integer in the range [0, 1000000]

//Parameters: We need a function that takes in an integer between 0 and 1000000
//Returns: an array of strings which are the the arguments number cut off at each digit
//Example: function turnIntIntoArray(420){} => ["4", "42", "420"] first, well make the int into a string, then we'll create a loop that goes through the string.length. For each loop, we'll split at the i and push it to an empty arr.
//Pseudocode: 1. set a variable to an empty array. 2. transform the argument to a string 3. initialize a loop with the string.length being the i < "" thing. 4. in the loop, split the string (or splice? ) so that it becomes just the first number as a string 5. push the output to the empty array. 6. return the array.

function createArrayOfTiers(num) {
  let nums = [];
  let numToString = num.toString();
  let thingToPush;

  for (let i = 0; i <= numToString.length - 1; i++) {
    thingToPush = numToString.slice(0, i + 1);
    nums.push(thingToPush);
  }
  return nums;
}

createArrayOfTiers(314);
