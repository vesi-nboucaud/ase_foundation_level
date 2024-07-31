const QUnit = require('qunit');
const { Cell } = require('../cell.js');

QUnit.module('Cell Tests', function() {

    QUnit.test('Create alive cell', function(assert) {

        const sutCell = new Cell(true);

        assert.strictEqual(sutCell.isCellAlive, true, "Cell should be alive");
    });

    QUnit.test('Create dead cell', function(assert) {

        const sutCell = new Cell(false);

        assert.strictEqual(sutCell.isCellAlive, false, "Cell should be dead");
    });

    QUnit.test('Count living neighbors', function(assert) {

        const sutCellA = new Cell(true); 
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);
        const sutDeadCellD = new Cell(false);

        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.addNeighborToCell('D', sutDeadCellD);

        assert.strictEqual(sutCellA.countLivingNeighborsOfCell(), 2, "Cell should have two living neighbors");
    });

    QUnit.test('Count living neighbors when none', function(assert) {

        const sutCellA = new Cell(true);
        const sutDeadCellB = new Cell(false);
        const sutDeadCellC = new Cell(false);

        sutCellA.addNeighborToCell('B', sutDeadCellB);
        sutCellA.addNeighborToCell('C', sutDeadCellC);

        assert.strictEqual(sutCellA.countLivingNeighborsOfCell(), 0, "Cell should have zero living neighbors");
    });

    QUnit.test('Cell with less than 2 neighbors dies', function(assert) {

        const sutCellA = new Cell(true);
        const sutLivingCellB = new Cell(true);
        const sutDeadCellC = new Cell(false);

        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutDeadCellC);
        sutCellA.computeCellStatus()
        
        assert.strictEqual(sutCellA.isCellAlive, false, "Cell should dies");
    });

    QUnit.test('A living cell Cell with with two or three living neighbors survives', function(assert) {

        const sutCellA = new Cell(true);
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);

        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.computeCellStatus()
        
        assert.strictEqual(sutCellA.isCellAlive, true, "Cell should survive");
    });

    QUnit.test('A dead cell with with two living neighbors stay dead', function(assert) {

        const sutCellA = new Cell(false);
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);

        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.computeCellStatus();
        
        assert.strictEqual(sutCellA.isCellAlive, false, "Cell should stay dead");
    });
});