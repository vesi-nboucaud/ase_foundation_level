const { test } = require("qunit");

class Cell {
    constructor (isAlive){
        this.isCellAlive = isAlive;
        this.cellNeighbors = new Map();
    }

    countLivingNeighborsOfCell(){
        return Array.from(this.cellNeighbors.values()).filter(neighbor => neighbor.isCellAlive).length;
    }

    addNeighborToCell(neighborCellId, neighborCell){
        this.cellNeighbors.set(neighborCellId, neighborCell);
    }

    computeCurrentCellStatus(){
        const numberOfLivingNeighbors = this.countLivingNeighborsOfCell();
        this.isCellAlive = numberOfLivingNeighbors === 3 || (this.isCellAlive && numberOfLivingNeighbors === 2);
    }

}
class SpaceManager {
    constructor() {
        this.cells = new Map();
    }

    addCellToSpace(cellId, cell) {
        this.cells.set(cellId, cell);
    }

    getCellFromSpace(cellId) {
        return this.cells.get(cellId);
    }

    updateCellSCurrenttatus(cellId) {
        const cell = this.getCellFromSpace(cellId);
        if (cell) {
            cell.computeCurrentCellStatus();
        }
    }

    updateAllCellsCurrentStatusInSpace() {
        this.cells.forEach((cell, cellId) => this.updateCellSCurrenttatus(cellId));
    }
}

module.exports = { Cell, SpaceManager };