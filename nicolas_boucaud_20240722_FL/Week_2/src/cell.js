const { test } = require("qunit");

class Cell {

    constructor(isAlive) {
        this.isCellAlive = isAlive;
        this.neighbors = new Map();
    }

    countLivingNeighbors() {
        return Array.from(this.neighbors.values()).filter(neighbor => neighbor.isCellAlive).length;
    }

    addASpecificNeighborToACell(cellId, neighborCell) {
        this.neighbors.set(cellId, neighborCell);
    }
}

module.exports = { Cell };