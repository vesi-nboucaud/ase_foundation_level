const QUnit = require('qunit');
const { Cell } = require('../cell.js');

QUnit.module('Cell Tests', function() {

    QUnit.test('Cell init alive', function(assert) {

        const sutCell = new Cell(true);

        assert.strictEqual(sutCell.isCellAlive, true, "Cell should be alive");
    });

    QUnit.test('Cell init dead', function(assert) {

        const sutCell = new Cell(false);

        assert.strictEqual(sutCell.isCellAlive, false, "Cell should be dead");
    });

    QUnit.test('Count living neighbors', function(assert) {

        const sutCellA = new Cell(true); 
        const sutCellB = new Cell(false);
        const sutCellC = new Cell(false);
        const sutCellD = new Cell(false);
        const sutCellE = new Cell(true);

        sutCellA.addASpecificNeighborToACell('B', sutCellB);
        sutCellA.addASpecificNeighborToACell('C', sutCellC);
        sutCellA.addASpecificNeighborToACell('D', sutCellD);
        sutCellA.addASpecificNeighborToACell('E', sutCellE);

        assert.strictEqual(sutCellA.countLivingNeighbors(), 1, "Cell should have two living neighbors");
    });
});