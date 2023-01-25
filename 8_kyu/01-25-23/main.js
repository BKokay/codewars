//Write a function that takes in a list or an array of numbers. The function should return the sum of any numbers from the list that are either greater than 10 or less than 5.
//P: takes in an array of nums; could me + or -
//R: return the sum of all the nums that are > 10 || < 5;
//E: [3, 1, 11, 12, 4, 5, 6, 7, 9] --> 3 + 1 + 11 + 12 + 4 = 31
//P: iterate through an array and sum the nums using a if statement that exludes numbers > 10 and < 5

function sumTheNums(arr){
    let total = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 10 || arr[i] < 5){
            total += arr[i];
        };
    }
    return total 
}