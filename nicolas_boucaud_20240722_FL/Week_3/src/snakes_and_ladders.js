const { test } = require("qunit");

class SnakesLadders {
    constructor (isAlive){
        this.snakesLaddersInfo = new Map();
        [{
            "SquareNumber": 1,
            "LadderTo": "",
            "SnakeTo": ""
        },
        {
            "SquareNumber": 2,
            "LadderTo": 38,
            "SnakeTo": ""
        },
        {
            "SquareNumber": 3,
            "LadderTo": "",
            "SnakeTo": ""
        },
        {
            "SquareNumber": 4,
            "LadderTo": "",
            "SnakeTo": 6
        },
        {
            "SquareNumber": 3,
            "LadderTo": "",
            "SnakeTo": ""
        }]

        this.players = new Map();
        this.currentPlayer = null;
    }

    play(){
        const die1 = this.getRandomForOneDie();
        const die2 = this.getRandomForOneDie();

        const steps = die1 + die2;
        return steps;
    }

    getRandomForOneDie(){
        return Math.floor(Math.random() * 6) + 1;
    }

    addPlayer(playerName) {
        this.players.set(playerName, 1);
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

    moveTo(position) {
        this.position = position;
    }
}

module.exports = { SnakesLadders, Player };