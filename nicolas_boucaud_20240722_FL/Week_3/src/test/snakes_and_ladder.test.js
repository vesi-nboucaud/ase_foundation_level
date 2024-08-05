const QUnit = require('qunit');
const { SnakesLadders } = require('../snakes_and_ladders.js');

QUnit.module('SnakesLadders Tests', function() {

    QUnit.test('Test random die', function(assert) {

        const sutSnakesLadders = new SnakesLadders();
        let sutResultDie = sutSnakesLadders.getRandomForDie()

        assert.ok(sutResultDie >= 1 && sutResultDie <=6, true, "Generated number should be between 1 and 6");
    });
/* 
    QUnit.test('Test', function(assert) {

        const sutSnakesLadders = new SnakesLadders();
        let sutDie1 = sutSnakesLadders.getRandomForDie()
        let sutDie2 = sutSnakesLadders.getRandomForDie()

        assert.strictEqual(sutSnakesLadders.play(), true, "");
    });
 */


});