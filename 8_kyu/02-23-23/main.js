// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num){
    let str = '';
      for(let i = 0; i < num; i++){
         str += `${i +1} sheep...`;
      }
    return(str)
  }
  
  countSheep(3)