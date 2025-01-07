import { BowlingGame } from "../src/bowlinggame";
import { MAX_PINS } from '../src/constants';
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const game = new BowlingGame();

function promptRoll(frame: number, rollNumber: number): void {
    rl.question(`Frame ${frame}, Roll ${rollNumber}: Enter the number of pins knocked down (0-${MAX_PINS}): `, (input) => {
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
                    promptRoll(frame, rollNumber + 1);
                } else {
                    // Frame completed, move to the next
                    nextFrame(frame + 1);
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                promptRoll(frame, rollNumber); // Retry on invalid input
            }
        }
    });
}

function handleTenthFrameRollsOld(frame: number, rollNumber: number): void {
    const rollsInTenthFrame = game.getRolls().slice(18); // Rolls for the 10th frame
    const totalRolls = rollsInTenthFrame.length;

    if (totalRolls < 2) {
        // Ensure at least two rolls in the 10th frame
        promptRoll(frame, totalRolls + 1);
    } else if (
        rollsInTenthFrame[0] === MAX_PINS || // First roll is a strike
        rollsInTenthFrame[0] + rollsInTenthFrame[1] === MAX_PINS // Spare
    ) {
        // Allow a bonus roll if strike or spare occurs
        if (totalRolls < 3) {
            promptRoll(frame, totalRolls + 1);
        } else {
            endGame(); // End the game after 3 rolls in the 10th frame
        }
    } else {
        // No bonus roll allowed, end the game
        endGame();
    }
}

let tenthFrameRolls: number[] = [];
function handleTenthFrameRolls(rollNumber: number, pins: number): void {
    tenthFrameRolls.push(pins);
    console.log(pins + " here " + tenthFrameRolls)

    if (rollNumber === 1) {
        if (pins === 10) {
            // Strike on first roll in 10th frame
            promptRoll(10, rollNumber + 1);
        } else {
            // First roll in 10th frame, not a strike
            promptRoll(10, rollNumber + 1);
        }
    } else if (rollNumber === 2) {
        if (tenthFrameRolls[0] === 10 || tenthFrameRolls[0] + pins === 10) {
            // Strike or spare in first two rolls of 10th frame
            promptRoll(10, rollNumber + 1);
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
   /*  if (frame > 10) {
        endGame();
    } else { */
        promptRoll(frame, 1);
    //}
}

function endGame(): void {
    console.log(`Game over! Your final score is: ${game.launchCalculation()}`);
    rl.close();
}

console.log("Welcome to Bowling Game!");
nextFrame(1);
