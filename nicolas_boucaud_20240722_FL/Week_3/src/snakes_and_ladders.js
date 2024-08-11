const { test } = require("qunit");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class SnakesLadders {
    constructor() {
        this.snakesLaddersBoard = this.initializeBoard();
        this.players = new Map();
        this.currentPlayer = null;
    }

    initializeBoard() {
        return new Map([
            [1, { ladderTo: null, snakeTo: null }],
            [2, { ladderTo: 38, snakeTo: null }],
            [7, { ladderTo: 14, snakeTo: null }],
            [8, { ladderTo: 31, snakeTo: null }],
            [15, { ladderTo: 26, snakeTo: null }],
            [16, { ladderTo: null, snakeTo: 6 }],
            [21, { ladderTo: 42, snakeTo: null }],
            [28, { ladderTo: 84, snakeTo: null }],
            [36, { ladderTo: null, snakeTo: 44 }],
            [51, { ladderTo: 67, snakeTo: null }],
            [71, { ladderTo: 91, snakeTo: null }],
            [78, { ladderTo: null, snakeTo: 98 }],
            [87, { ladderTo: 94, snakeTo: null }],
            [89, { ladderTo: null, snakeTo: 68 }],
            [99, { ladderTo: null, snakeTo: 80 }]
        ]);
    }

    rollDice() {
        return this.rollASingleDice() + this.rollASingleDice();
    }

    rollASingleDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    calculateNewPosition(currentPosition, diceRoll) {
        let newPosition = currentPosition + diceRoll;
        if (newPosition > 21) {
            newPosition = 21;
        }
        return newPosition;
    }

    checkForSnakesOrLadders(position) {
        const squareInfo = this.snakesLaddersBoard.get(position) || {};
        return squareInfo.ladderTo || squareInfo.snakeTo || position;
    }

    movePlayer(playerName) {
        const player = this.players.get(playerName);
        const diceRoll = this.rollDice();
        let newPosition = this.calculateNewPosition(player.position, diceRoll);
        newPosition = this.checkForSnakesOrLadders(newPosition);

        player.position = newPosition;

        return {
            playerName,
            totalDiceRoll: diceRoll,
            newPosition: player.position,
        };
    }

    addPlayer(playerName) {
        this.players.set(playerName, new Player(playerName));
        if (!this.currentPlayer) {
            this.currentPlayer = playerName;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.position = 1;
    }
}

class Game {
    constructor() {
        this.snakesLadders = new SnakesLadders();
    }

    startGame() {
        rl.question("Please enter a name for player 1: ", (player1) => {
            this.snakesLadders.addPlayer(player1);

            rl.question("Please enter a name for player 2: ", (player2) => {
                this.snakesLadders.addPlayer(player2);

                this.playTurn();
            });
        });
    }

    playTurn() {
        const currentPlayer = this.snakesLadders.currentPlayer;
        const result = this.snakesLadders.movePlayer(currentPlayer);

        console.log(`${result.playerName} launched a ${result.totalDiceRoll} and now is at ${result.newPosition}`);

        if (result.newPosition === 21) {
            console.log(`${result.playerName} won the game!`);
            rl.close();
        } else {
            this.snakesLadders.currentPlayer = this.getNextPlayer(currentPlayer);
            rl.question("Press enter to go to next turn", () => {
                this.playTurn();
            });
        }
    }

    getNextPlayer(currentPlayer) {
        const players = Array.from(this.snakesLadders.players.keys());
        const nextIndex = (players.indexOf(currentPlayer) + 1) % players.length;
        return players[nextIndex];
    }
}

const game = new Game();
game.startGame();

module.exports = { SnakesLadders, Player };