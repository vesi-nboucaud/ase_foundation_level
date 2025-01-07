import { MAX_PINS } from '../src/constants';
import { ScoreCalculator } from "../src/scorecalculator";

export class BowlingGame {

    private rolls: number[] = [];
    private currentRoll: number = 0;

    private scoreCalculator: ScoreCalculator = new ScoreCalculator();
    
    roll(pins: number): void {
        this.validatePins(pins);
        this.rolls[this.currentRoll++] = pins;
    } 

    getRolls(): number[] {
        return this.rolls;
    }

    launchCalculation(): number {
        let scoreResult = this.scoreCalculator.calculateScore(this.rolls);
        return scoreResult;
    }

    isTenthFrame(): boolean {
        return this.currentRoll >= 18;
    }
    
    private validatePins(pins: number): void {
        if (pins < 0 || pins > MAX_PINS) {
            throw new Error(`Invalid number of pins: ${pins}. Must be between 0 and ${MAX_PINS}.`);
        }
    }

    private validateFrameScore(pins: number): void {
        const frameIndex = Math.floor(this.currentRoll / 2);
        const isFirstRoll = this.currentRoll % 2 === 0;

        if (isFirstRoll) {
            return;
        }

        const previousRoll = this.rolls[this.currentRoll - 1];
        if (previousRoll + pins > MAX_PINS) {
            throw new Error(`Invalid frame score: ${previousRoll + pins}. The total pins in a frame cannot exceed ${MAX_PINS}.`);
        }
    }
}