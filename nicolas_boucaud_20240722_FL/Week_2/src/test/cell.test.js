const QUnit = require('qunit');
const { Cell, GridManager } = require('../cell.js');

QUnit.module('Cell Tests', function() {

    QUnit.test('Create living cell', function(assert) {

        const sutCell = new Cell(true);

        assert.strictEqual(sutCell.isCellAlive, true, "Cell should be alive");
    });

    QUnit.test('Create dead cell', function(assert) {

        const sutCell = new Cell(false);
        assert.strictEqual(sutCell.isCellAlive, false, "Cell should be dead");
    });

    QUnit.test('Add and retrieve cell', function(assert) {
        let gridManager = new GridManager();
        const sutCellA = new Cell(false);
        gridManager.addCell('A',sutCellA);
        const retrievedCell = gridManager.getCell('A');
        assert.strictEqual(retrievedCell, sutCellA, "Cell should be retrieved");
    });

    QUnit.test('Count living neighbors', function(assert) {

        const sutCellA = new Cell(true); 
        const sutLivingCellB = new Cell(false);
        const sutLivingCellC = new Cell(true);
        const sutDeadCellD = new Cell(false);
        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.addNeighborToCell('D', sutDeadCellD);

        assert.strictEqual(sutCellA.countLivingNeighborsOfCell(), 1, "Cell should have one living neighbor");
    });

    QUnit.test('Cell with less than 2 neighbors dies', function(assert) {

        const sutCellA = new Cell(true);
        const sutDeadCellB = new Cell(false);
        const sutLivingCellC = new Cell(true);

        sutCellA.addNeighborToCell('B', sutDeadCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.computeCellStatus()
        
        assert.strictEqual(sutCellA.isCellAlive, false, "Cell should die");
    });

    QUnit.test('A living cell with with two | three living neighbors survives', function(assert) {

        const sutCellA = new Cell(true);
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);
        const sutLivingCellD = new Cell(true);

        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.addNeighborToCell('D', sutLivingCellD);
        sutCellA.computeCellStatus()
        
        assert.strictEqual(sutCellA.isCellAlive, true, "Cell should survive");
    });

});