"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingGame = void 0;
class BowlingGame {
    constructor() {
        this.rolls = [];
        this.currentRoll = 0;
    }
    roll(pins) {
        if (pins < 0 || pins > 10) {
            throw new Error("Invalid number of pins. Must be between 0 and 10.");
        }
        this.rolls[this.currentRoll++] = pins;
    }
    //Necessary for IOSP
    /* launchCalculation(): void {
        let scoreResult = this.calculateScore();
        //this.printResult(scoreResult);
    } */
    calculateScore() {
        let score = 0;
        let frameIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) { // Strike case
                score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
                frameIndex += 1;
            }
            else if (this.isSpare(frameIndex)) { // Spare case
                score += 10 + this.rolls[frameIndex + 2];
                frameIndex += 2;
            }
            else { // Open frame case
                score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }
        return score;
    }
    isStrike(frameIndex) {
        return this.rolls[frameIndex] === 10;
    }
    isSpare(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }
}
exports.BowlingGame = BowlingGame;
const game = new BowlingGame();
game.roll(10); // Strike
game.roll(5);
game.roll(4);
console.log(game.calculateScore());
