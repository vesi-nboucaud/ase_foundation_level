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
            "SquareNumber": 16,
            "LadderTo": "",
            "SnakeTo": 6
        }]

        this.players = new Map();
        this.currentPlayer = null;
    }

    getRandomForOneDie(){
        return Math.floor(Math.random() * 6) + 1;
    }

    addPlayer(playerName) {
        this.players.set(playerName, 1);
        if (this.currentPlayer === null) {
            this.currentPlayer = playerName;
        }
    }


}

module.exports = { SnakesLadders };