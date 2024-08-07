const QUnit = require('qunit');
const { SnakesLadders } = require('../snakes_and_ladders.js');

QUnit.module('SnakesLadders Tests', function() {
    QUnit.test('Test add a new player', function(assert) {
        const sutNewGameOfSnakesLadders = new SnakesLadders();
        sutNewGameOfSnakesLadders.addPlayer("Player_1");
        assert.strictEqual(sutNewGameOfSnakesLadders.currentPlayer, "Player_1", "Current player should be player 1");
    });

    QUnit.test('Test roll a die', function(assert) {
        const sutNewGameOfSnakesLadders = new SnakesLadders();
        let sutNumberResultDie = sutNewGameOfSnakesLadders.getRandomForOneDie()
        assert.ok(sutNumberResultDie >= 1 && sutNumberResultDie <=6, true, "The random number should be between 1 and 6");
    });

    QUnit.test('Test roll both dies', function(assert) {
        const sutNewGameOfSnakesLadders = new SnakesLadders();
        let sutNumberResultDies = sutNewGameOfSnakesLadders.play();
        assert.ok(sutNumberResultDies >= 2 && sutNumberResultDies <= 12, true, "The random number should be between 2 and 12");
    });

   
});