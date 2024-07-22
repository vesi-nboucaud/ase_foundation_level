const QUnit = require('qunit');
const { RomanNumeral } = require('../roman_numerals'); // Assurez-vous que le chemin d'accès est correct

QUnit.module('RomanNumeral Tests', function() {

    QUnit.test('6 should return VI', function(assert) {
        const tst = new RomanNumeral();
        assert.strictEqual(tst.convertRomanToNumeral(6), "VI");
    });
});