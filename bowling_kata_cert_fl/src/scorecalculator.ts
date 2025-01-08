import { MAX_PINS, MAX_FRAMES } from '../src/constants';

export class ScoreCalculator {

    calculateScore(rolls: number[]): number {
        return this.aggregateFrameScores(rolls);
    }
    
    private aggregateFrameScores(rolls: number[]): number {
        let score: number = 0;
        let frameIndex: number = 0;

        for (let frame = 0; frame < MAX_FRAMES; frame++) {
            if (frameIndex >= rolls.length) {
                break;
            }
            if (this.isStrike(rolls, frameIndex)) {
                score += this.calculateStrikeScore(rolls, frameIndex);
                frameIndex = this.incrementFrameIndexForStrike(frameIndex);
            } else if (this.isSpare(rolls, frameIndex)) {
                score += this.calculateSpareScore(rolls, frameIndex);
                frameIndex = this.incrementFrameIndexForSpareOrOpenFrame(frameIndex);
            } else {
                score += this.sumOfPinsInFrame(rolls, frameIndex);
                frameIndex = this.incrementFrameIndexForSpareOrOpenFrame(frameIndex);
            }
        }
        
        return score;
    }

    private incrementFrameIndexForSpareOrOpenFrame(frameIndex: number) {
        return frameIndex += 2;
    }

    private incrementFrameIndexForStrike(frameIndex: number) {
        return frameIndex += 1;
    }

    private isStrike(rolls: number[], frameIndex: number): boolean {
        return (rolls[frameIndex] ?? 0) === MAX_PINS;
    }

    private isSpare(rolls: number[], frameIndex: number): boolean {
        const firstRoll = rolls[frameIndex] ?? 0;
        const secondRoll = rolls[frameIndex + 1] ?? 0;
        return firstRoll + secondRoll === MAX_PINS;
    }

    private calculateStrikeScore(rolls: number[], frameIndex: number): number {
        const bonusFirst = rolls[frameIndex + 1] ?? 0;
        const bonusSecond = rolls[frameIndex + 2] ?? 0;
        return MAX_PINS + bonusFirst + bonusSecond;
    }

    private calculateSpareScore(rolls: number[], frameIndex: number): number {
        const bonusRoll = rolls[frameIndex + 2] ?? 0;
        return MAX_PINS + bonusRoll;
    }

    private sumOfPinsInFrame(rolls: number[], frameIndex: number): number {
        const firstRoll = rolls[frameIndex] ?? 0;
        const secondRoll = rolls[frameIndex + 1] ?? 0;
        return firstRoll + secondRoll;
    }
}