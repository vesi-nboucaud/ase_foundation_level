import { BowlingGame } from "../src/bowlinggame";
import { MAX_PINS } from '../src/constants';
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const game = new BowlingGame();

function promptRoll(frame: number, rollNumber: number, numberOfPinsLeftToKnockDown: number): void {
    rl.question(`Frame ${frame}, Roll ${rollNumber}: Enter the number of pins knocked down (0-${MAX_PINS - numberOfPinsLeftToKnockDown}): `, (input) => {
        const pins = parseInt(input, 10);

        try {
            game.roll(pins);

            console.log(`Added roll for frame ${frame}: ${pins}, Current rolls: ${game.getRolls().join(",")}`); 

            if (frame === 10) {
                handleTenthFrameRolls(rollNumber, pins);
                
            } else {
                if (rollNumber === 1 && pins === MAX_PINS) {
                    startNextFrame (frame + 1);
                } else if (rollNumber === 1) {
                    promptRoll(frame, rollNumber + 1, pins);
                } else {
                    startNextFrame (frame + 1);
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                promptRoll(frame, rollNumber, 0);
            }
        }
    });
}

let tenthFrameRolls: number[] = [];

function handleTenthFrameRolls(rollNumber: number, pins: number): void {
    tenthFrameRolls.push(pins);

    if (rollNumber === 1) {
        if (pins === 10) {
            promptRoll(10, rollNumber + 1, 0);
        } else {
            promptRoll(10, rollNumber + 1, pins);
        }
    } else if (rollNumber === 2) {
        if (tenthFrameRolls[0] === 10 || tenthFrameRolls[0] + pins === 10) {
            promptRoll(10, rollNumber + 1, 0);
        } else {
            endGame();
        }
    } else {
        endGame();
    }
}

function startNextFrame (frame: number): void {
    promptRoll(frame, 1, 0);
}

function endGame(): void {
    console.log(`Game over! Your final score is: ${game.launchCalculation()}`);
    rl.close();
}

console.log("Welcome to Bowling Game!");
startNextFrame (1);
