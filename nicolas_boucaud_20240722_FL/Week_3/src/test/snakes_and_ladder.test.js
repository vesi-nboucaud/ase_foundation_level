const QUnit = require('qunit');
const { SnakesLadders } = require('../snakes_and_ladders.js');

QUnit.module('SnakesLadders Tests', function() {
    QUnit.test('Test adding a new player sets currentPlayer', function(assert) {
        const sutNewGameOfSnakesLadders = new SnakesLadders();
        sutNewGameOfSnakesLadders.addPlayer("Player_1");
        assert.strictEqual(sutNewGameOfSnakesLadders.currentPlayer, "Player_1", "Current player should be Player_1");
    });
    QUnit.test('Test adding a new player to the game', function(assert) {
        const sutNewGameOfSnakesLadders = new SnakesLadders();
        sutNewGameOfSnakesLadders.addPlayer("Player_1");
        assert.ok(sutNewGameOfSnakesLadders.players.has("Player_1"), "Player_1 should be added to the game");
    });
    QUnit.test('Test roll a die', function(assert) {
        const sutNewGameOfSnakesLadders = new SnakesLadders();
        let sutNumberResultDie = sutNewGameOfSnakesLadders.rollOneDice();
        assert.ok(sutNumberResultDie >= 1 && sutNumberResultDie <= 6, "The random number should be between 1 and 6");
    });
    QUnit.test('Test move a player', function(assert) {
        const sutNewGameOfSnakesLadders = new SnakesLadders();
        sutNewGameOfSnakesLadders.addPlayer("Player_1");
        let moveResult = sutNewGameOfSnakesLadders.movePlayer("Player_1");
        assert.ok(moveResult.newPosition >= 1 && moveResult.newPosition <= 100, "The player's new position should be between 1 and 100");
        assert.strictEqual(moveResult.playerName, "Player_1", "The player name should be Player_1");
        assert.ok(moveResult.totalDiceRoll >= 2 && moveResult.totalDiceRoll <= 12, "The total dice roll should be between 2 and 12");
    });
});