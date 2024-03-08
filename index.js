const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
let secretNum;
let checkGuess = (number) => {
    if(+number > secretNum){
        console.log("Really... too high... AGAIN!!!");
    } else if(+number < secretNum){
        console.log("You're killing me... too low... AGAIN!!!");
    } else if(+number === secretNum) {
        console.log(".... took you long enough ....");
    }
};

let askGuess = () => {
    rl.question("Guess a number ", (number) => {
        checkGuess(number);
        if(+number !== secretNum){
            askGuess();
        } else {
            rl.close();
        }
    });
};


let randomInRange = (min, max) => {
    secretNum = Math.floor(Math.random() * (max - min) + min);
}

console.log(randomInRange(1, 10));

// START GAME CALL!!!!!!
// askGuess();