// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.
//P: Takes in an array of numbers
//R: return the average (n1...n*/num of nums) rounded DOWN (math.floor)
//E: [75, 73, 83, 90, 74] --> 395/5 --> 79
//P: reduce() the sum of the number in the array into a variable. divide that number by array.length and save into a variable. math.floor() that number and return the result 

function getAverage(marks){
    let numerator = marks.reduce((a,b) => a+b, 0);
    let denominator = marks.length;
    let result = numerator/denominator;
    return Math.floor(result);
}

getAverage([75, 73, 83, 90, 74]);