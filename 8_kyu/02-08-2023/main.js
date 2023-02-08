// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let count = 0;
    for(let i=0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i] == true) {
            count += 1;
        }else if(arrayOfSheep[i] == null || arrayOfSheep[i] == undefined){
            count += 0;
        }else {
            count += 0;
        };
    }
    return count
  }