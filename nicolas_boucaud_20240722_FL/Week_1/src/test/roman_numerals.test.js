const QUnit = require('qunit');
const { RomanNumeral } = require('../roman_numerals'); // Assurez-vous que le chemin d'accès est correct

QUnit.module('RomanNumeral Tests', function() {

    QUnit.test('X is roman so it should return true', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueRoman("X"), true);
    });

    QUnit.test('X is roman so it should return false', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueArabic("X"), false);
    });

    QUnit.test('10 is arabic so it should return true', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueArabic(10), true);
    });

    QUnit.test('10 is arabic so it should return false', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueRoman(10), false);
    });

    QUnit.test('undefined should return false', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueRoman(), false);
    });

    QUnit.test('undefined should return false', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueArabic(), false);
    });

    QUnit.test('XVIII should return 18', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.convertRomanToArabic("XVIII"), 18);
    });

    QUnit.test('XVIII should return 18', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.convertArabicToRoman(8), "VIII");
    });
    
    
});