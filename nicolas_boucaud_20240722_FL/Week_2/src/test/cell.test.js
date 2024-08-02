const QUnit = require('qunit');
const { Cell, SpaceManager } = require('../cell.js');

QUnit.module('Cell Tests', function() {

    QUnit.test('Create a living cell', function(assert) {

        const sutCell = new Cell(true);

        assert.strictEqual(sutCell.isCellAlive, true, "Cell should be alive");
    });

    QUnit.test('Add and retrieve a cell', function(assert) {
        let spaceManager = new SpaceManager();
        const sutCellA = new Cell(false);
        spaceManager.addCellToSpace('A',sutCellA);
        const retrievedCellFromSpace = spaceManager.getCellFromSpace('A');
        assert.strictEqual(retrievedCellFromSpace, sutCellA, "Added Cell should be retrieved");
    });

    QUnit.test('Create a dead cell', function(assert) {
        const sutCell = new Cell(false);
        assert.strictEqual(sutCell.isCellAlive, false, "Cell should be dead");
    });

    QUnit.test('Count living neighbors of a given cell', function(assert) {
        const sutCellA = new Cell(true); 
        const sutLivingCellB = new Cell(false);
        const sutLivingCellC = new Cell(true);
        const sutDeadCellD = new Cell(false);

        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.addNeighborToCell('D', sutDeadCellD);

        assert.strictEqual(sutCellA.countLivingNeighborsOfCell(), 1, "Cell should have one living neighbor");
    });

    QUnit.test('Living cell with with two up to three living neighbors survives', function(assert) {
        const sutCellA = new Cell(true);
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);
        const sutLivingCellD = new Cell(true);

        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.addNeighborToCell('D', sutLivingCellD);

        sutCellA.computeCurrentCellStatus()
        
        assert.strictEqual(sutCellA.isCellAlive, true, "Cell should survive");
    });

    QUnit.test('Cell with less than 2 neighbors dies', function(assert) {
        const sutCellA = new Cell(true);
        const sutDeadCellB = new Cell(false);
        const sutLivingCellC = new Cell(true);

        sutCellA.addNeighborToCell('B', sutDeadCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.computeCurrentCellStatus()
        
        assert.strictEqual(sutCellA.isCellAlive, false, "Cell should die");
    });

    QUnit.test('Cell without any neighbors dies', function(assert) {
        const sutCellA = new Cell(true);
    
        sutCellA.computeCurrentCellStatus();
        
        assert.strictEqual(sutCellA.isCellAlive, false, "Cell should die without any neighbors");
    });

    QUnit.test('Dead cell with less than three neighbors stays dead', function(assert) {
        const sutCellA = new Cell(false);
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);
    
        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
    
        sutCellA.computeCurrentCellStatus();
        
        assert.strictEqual(sutCellA.isCellAlive, false, "Dead cell should stay dead with less than three neighbors");
    });

    QUnit.test('Cell with exactly three neighbors becomes alive', function(assert) {
        const sutCellA = new Cell(false);
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);
        const sutLivingCellD = new Cell(true);


        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.addNeighborToCell('D', sutLivingCellD);

        sutCellA.computeCurrentCellStatus()
        
        assert.strictEqual(sutCellA.isCellAlive, true, "Cell should become alive with exactly 3 neighbors");
    });

    QUnit.test('Cell with more than three neighbors dies', function(assert) {
        const sutCellA = new Cell(true);
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);
        const sutLivingCellD = new Cell(true);
        const sutLivingCellE = new Cell(true);
    
        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        sutCellA.addNeighborToCell('D', sutLivingCellD);
        sutCellA.addNeighborToCell('E', sutLivingCellE);
    
        sutCellA.computeCurrentCellStatus();
        
        assert.strictEqual(sutCellA.isCellAlive, false, "Cell should die with four neighbors");
    });


    QUnit.test('Update cell status in SpaceManager', function(assert) {
        let spaceManager = new SpaceManager();
        const sutCellA = new Cell(true);
        const sutLivingCellB = new Cell(true);
        const sutLivingCellC = new Cell(true);

        sutCellA.addNeighborToCell('B', sutLivingCellB);
        sutCellA.addNeighborToCell('C', sutLivingCellC);
        
        spaceManager.addCellToSpace('A', sutCellA);
        spaceManager.addCellToSpace('B', sutLivingCellB);
        spaceManager.addCellToSpace('C', sutLivingCellC);
        spaceManager.updateCellSCurrenttatus('A');
        
        assert.strictEqual(sutCellA.isCellAlive, true, "Cell A should remain alive with two neighbors");
    });

});