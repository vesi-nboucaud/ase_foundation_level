const QUnit = require('qunit');
const { RomanNumeral } = require('../roman_numerals'); // Assurez-vous que le chemin d'accès est correct

QUnit.module('RomanNumeral Tests', function() {

    QUnit.test('VI should return true', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.testIfValueIsRoman("VI"), true);
    });

    QUnit.test('6 should return false', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.testIfValueIsRoman(6), false);
    });

    QUnit.test('XI should return 11', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.convertRomanToArabic("XI"), 11);
    });

    QUnit.test('IX should return 9', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.convertRomanToArabic("IX"), 9);
    });
});