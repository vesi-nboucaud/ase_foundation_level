import { MAX_PINS } from '../src/constants';
import { ScoreCalculator } from "../src/scorecalculator";

export class BowlingGame {

    private rolls: number[] = [];
    private currentRoll: number = 0;

    private scoreCalculator: ScoreCalculator = new ScoreCalculator();
    
    roll(pins: number): void {
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
}

const game = new BowlingGame();
game.roll(10);
game.roll(5);
game.roll(4);
console.log(game.launchCalculation());