const QUnit = require('qunit');
const { Cell } = require('../cell.js');

QUnit.module('Cell Tests', function() {

    QUnit.test('1 should return 1', function(assert) {

        // Initialize cells, here we're just creating a simple example
        const sutCellA = new Cell(true); 
        const sutCellB = new Cell(false);
        const sutCellC = new Cell(true);

        sutCellA.addNeighbor('B', sutCellB);
        sutCellA.addNeighbor('C', sutCellC);

        assert.strictEqual(sutCellA.countLivingNeighbors(), 1, 'Uninitialized cell should be dead in a new grid');
    });
});