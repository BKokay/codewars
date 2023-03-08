// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//P: an array of "Keep", "Remove"
//R: return only the "Keep" elements, remove all the second elements
//E: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//P: if the element index is 1, 3, 5, 7, etc, you need to slice(index, 1) the element. Another way would be to push the element if its index is 0 or i%2 === 0 

const removeEveryOther = (arr) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i%2 === 0){
            newArr.push(arr[i]);
        };
    };
    return newArr; 
};



const myArr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];
removeEveryOther(myArr); 
const test = ['Hello', 'Hello', 'Hello Again'];
removeEveryOther(test)

// function removeEveryOther(arr){
//     return arr.filter(function(elem, index) {
//       return index % 2 === 0;
//     });
//   }

// function removeEveryOther(arr){
//     var newArr=[];
//   for (var i = 0; i < arr.length; i+=2){
//     newArr.push(arr[i]);
//     }
//   return newArr;
//   }