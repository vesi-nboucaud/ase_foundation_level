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
        this.checkPinsRange(pins);
        this.recordRoll(pins);
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
    recordRoll(pins) {
        this.rolls[this.currentRoll++] = pins;
    }
    checkPinsRange(pins) {
        if (pins < 0 || pins > constants_1.MAX_PINS) {
            throw new Error(`Invalid number of pins: ${pins}. Must be between 0 and ${constants_1.MAX_PINS}.`);
        }
    }
    validateFrameScore(pins) {
        const frameIndex = Math.floor(this.currentRoll / 2);
        const isFirstRoll = this.currentRoll % 2 === 0;
        if (isFirstRoll) {
            return;
        }
        const previousRoll = this.rolls[this.currentRoll - 1];
        if (previousRoll + pins > constants_1.MAX_PINS) {
            throw new Error(`Invalid frame score: ${previousRoll + pins}. The total pins in a frame cannot exceed ${constants_1.MAX_PINS}.`);
        }
    }
}
exports.BowlingGame = BowlingGame;
