const QUnit = require('qunit');
const { SnakesLadders } = require('../snakes_and_ladders.js');

QUnit.module('SnakesLadders Tests', function() {

    QUnit.test('Test random die', function(assert) {
        const sutNewGameOFSnakesLadders = new SnakesLadders();
        let sutResultDie = sutNewGameOFSnakesLadders.getRandomForDie()
        assert.ok(sutResultDie >= 1 && sutResultDie <=6, true, "Generated number should be between 1 and 6");
    });

    QUnit.test('Test add new player', function(assert) {
        const sutNewGameOFSnakesLadders = new SnakesLadders();
        sutNewGameOFSnakesLadders.addPlayer("Player1");
        assert.strictEqual(sutNewGameOFSnakesLadders.currentPlayer, "Player1", "Current player should be player 1");
    });
});