const { test } = require("qunit");

class GridManager {
    constructor() {
        this.cells = new Map();
    }

    addCell(cellId, cell) {
        this.cells.set(cellId, cell);
    }

    getCell(cellId) {
        return this.cells.get(cellId);
    }

    updateCellStatus(cellId) {
        const cell = this.getCell(cellId);
        if (cell) {
            cell.computeCellStatus();
        }
    }

    updateAllCellsStatus() {
        this.cells.forEach((cell, cellId) => this.updateCellStatus(cellId));
    }
}
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

    computeCellStatus(){
        const numberOfLivingNeighbors = this.countLivingNeighborsOfCell();
        if(numberOfLivingNeighbors < 2 || numberOfLivingNeighbors > 3){
            this.isCellAlive = false;
        }
        if((numberOfLivingNeighbors === 3)){
            this.isCellAlive = true;
        }
    }

}

module.exports = { Cell, GridManager };