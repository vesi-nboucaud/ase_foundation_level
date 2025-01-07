"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreCalculator = void 0;
const constants_1 = require("../src/constants");
class ScoreCalculator {
    calculateScore(rolls) {
        let score = 0;
        let frameIndex = 0;
        for (let frame = 0; frame < constants_1.MAX_FRAMES; frame++) {
            if (frameIndex >= rolls.length) {
                break;
            }
            if (this.isStrike(rolls, frameIndex)) {
                score += this.calculateStrikeScore(rolls, frameIndex);
                frameIndex += 1;
            }
            else if (this.isSpare(rolls, frameIndex)) {
                score += this.calculateSpareScore(rolls, frameIndex);
                frameIndex += 2;
            }
            else {
                score += this.sumOfPinsInFrame(rolls, frameIndex);
                frameIndex += 2;
            }
        }
        return score;
    }
    isStrike(rolls, frameIndex) {
        var _a;
        return ((_a = rolls[frameIndex]) !== null && _a !== void 0 ? _a : 0) === constants_1.MAX_PINS;
    }
    isSpare(rolls, frameIndex) {
        var _a, _b;
        const firstRoll = (_a = rolls[frameIndex]) !== null && _a !== void 0 ? _a : 0;
        const secondRoll = (_b = rolls[frameIndex + 1]) !== null && _b !== void 0 ? _b : 0;
        return firstRoll + secondRoll === constants_1.MAX_PINS;
    }
    calculateStrikeScore(rolls, frameIndex) {
        var _a, _b;
        const bonusFirst = (_a = rolls[frameIndex + 1]) !== null && _a !== void 0 ? _a : 0;
        const bonusSecond = (_b = rolls[frameIndex + 2]) !== null && _b !== void 0 ? _b : 0;
        return constants_1.MAX_PINS + bonusFirst + bonusSecond;
    }
    calculateSpareScore(rolls, frameIndex) {
        var _a;
        const bonusRoll = (_a = rolls[frameIndex + 2]) !== null && _a !== void 0 ? _a : 0;
        return constants_1.MAX_PINS + bonusRoll;
    }
    sumOfPinsInFrame(rolls, frameIndex) {
        var _a, _b;
        const firstRoll = (_a = rolls[frameIndex]) !== null && _a !== void 0 ? _a : 0;
        const secondRoll = (_b = rolls[frameIndex + 1]) !== null && _b !== void 0 ? _b : 0;
        return firstRoll + secondRoll;
    }
}
exports.ScoreCalculator = ScoreCalculator;
