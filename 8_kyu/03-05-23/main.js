//Write code that will return a random letter from your name

const name = "Brittany";

function randomNumber(name){
    let randomLetter = name.charAt(Math.floor(Math.random() * name.length + 1));
    console.log(randomLetter)

}
