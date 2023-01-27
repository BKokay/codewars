    //P: takes in an array; compares array and if (x === y) >= 2, morning is a success
    //R: if >= 2 return true; else return false
    //E: ["coffee", "espresso", "espresso", "latte", "latte"] === true
    //P: take in an array of strings. If the string in position x is === to the string in position y, count +1. If count >= 2, return 2

    let count = 0;

    function wasMorningASuccess(drinks) {
       
      for(let i = 0; i < drinks.length; i++){
       if(drinks[i] === drinks[i-1]){
        count += 1;
       }
       console.log(count);
      }
      if(count >= 2){
        return true;
      } else {
        return false
      }
    }
    
    let monday = ["coffee", "espresso", "latte", "latte"] 
    
    wasMorningASuccess(monday)