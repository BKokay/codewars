
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

//P takes in quantity and price, + numbers
//R returns the total price **do not need the total amount of free mangos! 
//E buy 3 mangos, price per mango is 2.99 => 2.99 + 2.99 = 5.98 
//  buy 5 @ $4 => 4+4+4+4 => 8 , 1 for free
//  buy 6 @ 4 => 4+4+4+4 => 8, 2 mangos for free
//P Function takes in a total number bought and the price per unit. if the total is divisible by 3, then return the result 

function mango(quantity, price) {
    let result = 0; 
    for (let i = 1; i <= quantity; i++){
        if(i % 3){
            result += price
        }
    }
    return result 
}

//const mango = (quantity, price) =>
    //(quantity - Math.floor(quantity/3)) * price