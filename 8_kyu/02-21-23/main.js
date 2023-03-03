//P: an array of strings 'sheep' and 'wolf'
//R: return "Pls go away and stop eating my sheep" if arr.length[i] is "wolf". Otherwise return "Oi! Sheep number [i]! You are about to be eaten by a wolf!"
//E: ["sheep", "sheep", "sheep", "wolf", "sheep"] -> "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//E: ["sheep", "sheep", "wolf"] -> "Pls go away and stop eating my sheep"
//P: Take in an array. maybe a switch case? case arr[i] === 'sheep' continue. case arr[i] === wolf: if arr[i] === arr.length - 1 -- return go away; else return sheep #(arr.length - [i]) is going to be eaten

function warnTheSheep(queue){
    let reversedQueue = queue.reverse();
    console.log(reversedQueue);
    reversedQueue.forEach(function(animal, i){
      if(animal === 'wolf'){
        if(i === 0) {
          "Pls go away and stop eating my sheep"
        } else if(i > 0) {
          `Oi! Sheep number ${[i]}! You are about to be eaten by a wolf!`
        };
      };
    });
}

let q1 = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'];

warnTheSheep(q1)

// if([i] === 0){
//     return("Pls go away and stop eating my sheep")
// } else {
//     return(`Oi! Sheep number ${[i + 1]}! You are about to be eaten by a wolf!`)
// };
// break;