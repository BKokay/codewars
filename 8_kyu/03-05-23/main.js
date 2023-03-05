//Write code that will return a random letter from your name

const myName = "Brittany";

function randomLetterFromName(name){
    let randomLetter = name.charAt(Math.floor(Math.random() * name.length));
    console.log(randomLetter)
}

randomNumber(myName); 
