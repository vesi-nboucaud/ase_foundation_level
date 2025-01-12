"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bowlinggame_1 = require("../src/bowlinggame");
const constants_1 = require("../src/constants");
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const game = new bowlinggame_1.BowlingGame();
function promptRoll(frame, rollNumber, numberOfPinsLeftToKnockDown) {
    rl.question(`Frame ${frame}, Roll ${rollNumber}: Enter the number of pins knocked down (0-${constants_1.MAX_PINS - numberOfPinsLeftToKnockDown}): `, (input) => {
        const pins = parseInt(input, 10);
        try {
            game.roll(pins);
            console.log(`Added roll for frame ${frame}: ${pins}, Current rolls: ${game.getRolls().join(",")}`);
            if (frame === 10) {
                handleTenthFrameRolls(rollNumber, pins);
            }
            else {
                if (rollNumber === 1 && pins === constants_1.MAX_PINS) {
                    startNextFrame(frame + 1);
                }
                else if (rollNumber === 1) {
                    promptRoll(frame, rollNumber + 1, pins);
                }
                else {
                    startNextFrame(frame + 1);
                }
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                promptRoll(frame, rollNumber, 0);
            }
        }
    });
}
let tenthFrameRolls = [];
function handleTenthFrameRolls(rollNumber, pins) {
    tenthFrameRolls.push(pins);
    if (rollNumber === 1) {
        if (pins === 10) {
            promptRoll(10, rollNumber + 1, 0);
        }
        else {
            promptRoll(10, rollNumber + 1, pins);
        }
    }
    else if (rollNumber === 2) {
        if (tenthFrameRolls[0] === 10 || tenthFrameRolls[0] + pins === 10) {
            promptRoll(10, rollNumber + 1, 0);
        }
        else {
            endGame();
        }
    }
    else {
        endGame();
    }
}
function startNextFrame(frame) {
    promptRoll(frame, 1, 0);
}
function endGame() {
    console.log(`Game over! Your final score is: ${game.launchCalculation()}`);
    rl.close();
}
console.log("Welcome to Bowling Game!");
startNextFrame(1);
