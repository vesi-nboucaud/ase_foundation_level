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

    computeCellStatus(){
        let numberOfLivingCells = this.countLivingNeighborsOfCell();
        
        if(numberOfLivingCells < 2 || numberOfLivingCells > 3){
            this.isCellAlive = false;
        }

        if((numberOfLivingCells === 3)){
            this.isCellAlive = true;
        }
    }


























   /*  constructor(isAlive) {
        this.isCellAlive = isAlive;
        this.neighbors = new Map();
    }

    countLivingNeighbors() {
        return Array.from(this.neighbors.values()).filter(neighbor => neighbor.isCellAlive).length;
    }

    addASpecificNeighborToACell(cellId, neighborCell) {
        this.neighbors.set(cellId, neighborCell);
    } */
}

module.exports = { Cell };