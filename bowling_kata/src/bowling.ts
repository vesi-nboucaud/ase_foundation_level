export class BowlingGame {
    
    private rolls: number[] = [];
    private currentRoll: number = 0;

    roll(pins: number): void {
        if (pins < 0 || pins > 10) {
            throw new Error("Invalid number of pins. Must be between 0 and 10.");
        }
        this.rolls[this.currentRoll++] = pins;
    }

    //Necessary for IOSP
    //Note: look for a way to have test coverage / plugin or so
    /* launchCalculation(): void {
        let scoreResult = this.calculateScore();
        //this.printResult(scoreResult);
    } */

    calculateScore(): number {
        let score: number = 0;
        let frameIndex: number = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) { // Strike case
                //Could be great to extract a method like "strikeCounting"
                score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
                frameIndex += 1;

            } else if (this.isSpare(frameIndex)) { // Spare case
                //Could be great to extract a method like "spareCounting"
                score += 10 + this.rolls[frameIndex + 2];
                frameIndex += 2;

            } else { // Open frame case
                //Could be great to extract a method like "normalCounting"
                score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }

        return score;
    }

    private isStrike(frameIndex: number): boolean {
        return this.rolls[frameIndex] === 10;
    }

    private isSpare(frameIndex: number): boolean {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }
}

const game = new BowlingGame();
game.roll(10); // Strike
game.roll(5);
game.roll(4);
console.log(game.calculateScore());