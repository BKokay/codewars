//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

//P: takes in an array of numbers
//R: return the average (numbers added/ total number of nums)
//E: findAverage([1,1,1]), 1); (findAverage([1,2,3]), 2)
//P: create a function which iterates through an array and adds all of the numbers together. Then divide the total by the length of the array. 

function findAverage(array){

    if(array.length === 0 ){
        return 0
    }
    
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;

}
    
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }
