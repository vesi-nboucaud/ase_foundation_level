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
                    // Strike in a regular frame
                    nextFrame(frame + 1);
                } else if (rollNumber === 1) {
                    // First roll of the frame completed
                    promptRoll(frame, rollNumber + 1, pins);
                } else {
                    // Frame completed, move to the next
                    nextFrame(frame + 1);
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                promptRoll(frame, rollNumber, 0); // Retry on invalid input
            }
        }
    });
}

let tenthFrameRolls: number[] = [];

function handleTenthFrameRolls(rollNumber: number, pins: number): void {
    tenthFrameRolls.push(pins);

    if (rollNumber === 1) {
        if (pins === 10) {
            // Strike on first roll in 10th frame
            promptRoll(10, rollNumber + 1, 0);
        } else {
            // First roll in 10th frame, not a strike
            promptRoll(10, rollNumber + 1, pins);
        }
    } else if (rollNumber === 2) {
        if (tenthFrameRolls[0] === 10 || tenthFrameRolls[0] + pins === 10) {
            // Strike or spare in first two rolls of 10th frame
            promptRoll(10, rollNumber + 1, 0);
        } else {
            // Open frame in 10th frame
            endGame();
        }
    } else {
        // Third roll in 10th frame
        endGame();
    }
}

function nextFrame(frame: number): void {
    promptRoll(frame, 1, 0);
}

function endGame(): void {
    console.log(`Game over! Your final score is: ${game.launchCalculation()}`);
    rl.close();
}

console.log("Welcome to Bowling Game!");
nextFrame(1);
