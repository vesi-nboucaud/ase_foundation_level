const { test } = require("qunit");

class SnakesLadders {
    constructor (){

        this.snakesLaddersBoard = this.initializeBoard();
        this.players = new Map();
        this.currentPlayer = null;
    }

    initializeBoard() {
        return new Map([
            [1, { ladderTo: null, snakeTo: null }],
            [2, { ladderTo: 38, snakeTo: null }],
            [3, { ladderTo: null, snakeTo: null }],
            [4, { ladderTo: null, snakeTo: null }],
            [5, { ladderTo: null, snakeTo: null }],
            [6, { ladderTo: null, snakeTo: null }],
            [7, { ladderTo: 14, snakeTo: null }],
            [8, { ladderTo: 31, snakeTo: null }],
            [9, { ladderTo: null, snakeTo: null }],
            [10, { ladderTo: null, snakeTo: null }],
            [11, { ladderTo: null, snakeTo: null }],
            [12, { ladderTo: null, snakeTo: null }],
            [13, { ladderTo: null, snakeTo: null }],
            [14, { ladderTo: null, snakeTo: null }],
            [15, { ladderTo: 26, snakeTo: null }],
            [16, { ladderTo: null, snakeTo: 6 }],
        ]);
    }

    rollOneDice(){
        return Math.floor(Math.random() * 6) + 1;
    }

    movePlayer(playerName) {
        const totalDiceRoll = this.rollOneDice() + this.rollOneDice();
        const player = this.players.get(playerName);
        let newPosition = player.position + totalDiceRoll;

        if (newPosition > 100) {
            newPosition = 100 - (newPosition - 100);
        }

        const squareInfo = this.snakesLaddersBoard.get(newPosition) || {};
        player.position = squareInfo.ladderTo || squareInfo.snakeTo || newPosition;

        return {
            playerName,
            totalDiceRoll,
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

module.exports = { SnakesLadders, Player };