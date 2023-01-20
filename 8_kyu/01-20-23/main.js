//P: takes in an array of strings in format "x:y"
//R: return the total of x where: x>y x+3; x=y x+1; x<y x+0
//E: ["1:0", "2:0", "3:0", "4:0","2:1","3:1","4:1","3:2","4:2","4:3"] --> total points = 30
//P: take in an array of strings. Get position [0] and [2] of the arr[i]. If [0] > [2] total += 3; else if [0] = [2] total += 1 

function points(games){
    let total = 0;
    for(i=0; i < games.length; i++){
        if(games[i][0] > games[i][2]){
            total += 3
        };
        if (games[i][0] < games[i][2]){
            total += 1
        };
    }
    return total;
}

let gameOne = ["1:0", "2:0", "3:0", "4:0","2:1","3:1","4:1","3:2","4:2","4:3"];

points(gameOne)