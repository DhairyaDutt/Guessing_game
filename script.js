let maximum = parseInt(prompt("Enter your maximum number"));

while(!maximum){
    maximum = parseInt(prompt("Enter Valid maximum number"));
}

let targetMax = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your guess!!"));
let count = 0;
while(parseInt(guess) !== targetMax){
    if(guess === 'q'){
        break;
    }
    if(guess<targetMax){
        guess = (prompt("Enter your guess again, its too low"));
    }
    else{
        guess = (prompt("Enter your guess again, its too high"));
    }
    count++
}
if(guess === 'q'){
    console.log("you quit")
} else{
    console.log(`you took ${count} guesses!!!!`);
}

