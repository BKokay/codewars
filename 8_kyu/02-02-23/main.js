// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//P:will take in an array of numbers both + and - 
//R: return an array of [(+ sum), (- sum)]
//E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] --> [10, -65]
//P: loop through the array. If the input[i] > 0 {positives.push(input[i])} If the input[i] < 0 {negatives.push(input[i])} If the input[i] === [] || null { return []}; positivesSum = positives.reduce((a,b) => a + b, 0) "" negatives

function countPositivesSumNegatives(input){
    let positives = [];
    let negatives = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            positives.push(input[i]);
        } else if(input[i] < 0){
            negatives.push(input[i]);
        } else if(input === [] || input === null || input === +0 || input === 0 || input === -0){
            return [];
        }
    }
    let countPositives = positives.length;
    let sumNegatives = negatives.reduce((a,b) => a + b, 0);

    let returnedArray = [countPositives, sumNegatives];
    return returnedArray 
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
countPositivesSumNegatives(input)
