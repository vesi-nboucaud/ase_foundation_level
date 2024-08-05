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
            "SquareNumber": 16,
            "LadderTo": 38,
            "SnakeTo": 6
        }]
    }

    getRandomForDie(){
        return Math.floor(Math.random() * 6) + 1;
    }

}

module.exports = { SnakesLadders };