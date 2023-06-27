// DESCRIPTION:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

//P: take in an age as a parameter 
//R: return a drink based on age
//E: 13 --> "drink toddy"
//P: make a function that checks age and an if/else statement returning the correct drink 

function checkAge(age) {
    if(age < 14) {
        return("drink toddy")
    } else if (age < 18 && age > 13) {
        return("drink coke")
    } else if (age < 21 && age > 17) {
        return("drink beer")
    } else {
        return("drink whisky")
    }
}

const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

function peopleWithAgeDrinkTwo(age){
	if(age < 14)
		drink = 'toddy';
	else if(age < 18)
		drink = 'coke'
	else if(age < 21)
		drink = 'beer';
	else if(age => 21)
		drink = 'whisky';

	return 'drink ' + drink;
}