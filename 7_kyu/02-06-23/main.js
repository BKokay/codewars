// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

//var matches = ss.match(/\d+/g);

function sumOfIntegersInString(s){
    let integers = s.match(/\d+/g);

    if(integers){
      let arrOfNums = [];
      for(let i = 0; i < integers.length; i++){
       let num = parseInt(integers[i],0);
        arrOfNums.push(num);
       };
     let sum = arrOfNums.reduce((a,b) => a + b, 0); 
     return sum;
     } else if(integers == null){
       return 0;
      };
}

  let string = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"

  sumOfIntegersInString(string)