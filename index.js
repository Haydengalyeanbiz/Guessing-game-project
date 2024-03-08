const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
/*-------------------------------------------------------LIBRARIES------------------------------------------------------------------*/
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


let randomInRange =(min, max) =>{
    const minNumber = Math.ceil(min);
    const maxNumber = Math.floor(max);
    secretNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber); 
  }

let askRange = () => {
    rl.question("Gimme a LOW number ", (minNumber) => {
        rl.question("Gimme a HIGH number ", (maxNumber) => {
            randomInRange(minNumber, maxNumber);
        });
    });
};

// START GAME CALL!!!!!!
askGuess();