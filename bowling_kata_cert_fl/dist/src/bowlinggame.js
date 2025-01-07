"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingGame = void 0;
const constants_1 = require("../src/constants");
const scorecalculator_1 = require("../src/scorecalculator");
class BowlingGame {
    constructor() {
        this.rolls = [];
        this.currentRoll = 0;
        this.scoreCalculator = new scorecalculator_1.ScoreCalculator();
    }
    roll(pins) {
        this.validatePins(pins);
        this.rolls[this.currentRoll++] = pins;
        /*  this.validatePins(pins);
 
         if (this.isTenthFrame()) {
             const rollsInTenthFrame = this.rolls.slice(18); // Get rolls from the 10th frame
             if (rollsInTenthFrame.length >= 3) {
                 throw new Error("No more rolls are allowed in the 10th frame.");
             }
 
             this.rolls[this.currentRoll++] = pins;
             console.log(`Added roll for the 10th frame: ${pins}, Current rolls: ${this.rolls}`);
         } else {
             this.rolls[this.currentRoll++] = pins;
             console.log(`Added roll for frame ${Math.floor(this.currentRoll / 2) + 1}: ${pins}, Current rolls: ${this.rolls}`);
         }*/
    }
    getRolls() {
        return this.rolls;
    }
    launchCalculation() {
        let scoreResult = this.scoreCalculator.calculateScore(this.rolls);
        return scoreResult;
    }
    isTenthFrame() {
        return this.currentRoll >= 18;
    }
    validatePins(pins) {
        if (pins < 0 || pins > constants_1.MAX_PINS) {
            throw new Error(`Invalid number of pins: ${pins}. Must be between 0 and ${constants_1.MAX_PINS}.`);
        }
    }
}
exports.BowlingGame = BowlingGame;
const game = new BowlingGame();
game.roll(10);
game.roll(5);
game.roll(4);
console.log(game.launchCalculation());
