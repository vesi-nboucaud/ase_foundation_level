const { test } = require("qunit");

class Cell {

    constructor(alive) {
        this.alive = alive;
        this.neighbors = new Map();
    }

    addNeighbor(id, neighborCell) {
        this.neighbors.set(id, neighborCell);
    }

    countLivingNeighbors() {
        return Array.from(this.neighbors.values()).filter(neighbor => neighbor.alive).length;
    }
}

module.exports = { Cell };