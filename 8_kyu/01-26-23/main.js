//P: takes in a string  of words; all words will be separated by a space; will always have at least one element
//R: return an array made up of strings; [word + " " + wordCount]
//E: "The quick brown fox" --> ["The 3", "quick 5", "brown 5", "fox 3"]
//P: Create a function that takes in a string of words and returns an array including the word and letter count of the words

function countTheLetters(str){
    let arr = str.split(" ");
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] + " " + arr[i].length);
    }
    return newArr; 
}
countTheLetters("The quick brown fox")