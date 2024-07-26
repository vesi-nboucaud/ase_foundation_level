const QUnit = require('qunit');
const { RomanNumeral } = require('../roman_numerals'); // Assurez-vous que le chemin d'accès est correct

QUnit.module('RomanNumeral Tests', function() {

    QUnit.test('XVIII is roman so it should return false', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueArabic("XVIII"), false);
    });
    QUnit.test('XVIII is roman so it should return true', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueRoman("XVIII"), true);
    });
    QUnit.test('19 is arabic so it should return true', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueArabic(10), true);
    });
    QUnit.test('4 is arabic so it should return false', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.isValueRoman(10), false);
    });
    
    QUnit.test('CDXXXII should return 432', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.convertRomanToArabic("CDXXXII"), 432);
    });
    QUnit.test('432 should return CDXXXII', function(assert) {
        const sut = new RomanNumeral();
        assert.strictEqual(sut.convertArabicToRoman(432), "CDXXXII");
    });
});