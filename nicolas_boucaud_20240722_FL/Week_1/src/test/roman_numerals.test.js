const QUnit = require('qunit');
const { RomanNumeral } = require('../roman_numerals'); // Assurez-vous que le chemin d'accès est correct

QUnit.module('RomanNumeral Tests', function() {

    QUnit.test('X is roman so it should return true', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueRoman("X"), true);
    });

    QUnit.test('10 is arabic so it should return false', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueRoman(10), false);
    });

    QUnit.test('CDI is roman so it should convert it to 401', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.convertValue("CDI"), 401);
    });

    
});