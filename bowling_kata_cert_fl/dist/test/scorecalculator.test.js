"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qunit_1 = require("qunit");
const scorecalculator_1 = require("../src/scorecalculator");
(0, qunit_1.module)('ScoreCalculator Tests', () => {
    (0, qunit_1.test)('Initial game score should be 0', assert => {
        const sut = new scorecalculator_1.ScoreCalculator();
        assert.equal(sut.calculateScore([0]), 0, 'Initial game score should be 0');
    });
    (0, qunit_1.test)('Score after one roll of 5 pins should be 5', assert => {
        const sut = new scorecalculator_1.ScoreCalculator();
        assert.equal(sut.calculateScore([5]), 5, 'Score after one roll of 5 pins should be 5');
    });
    (0, qunit_1.test)('20 rolls of 0 pin should score 0', assert => {
        const sut = new scorecalculator_1.ScoreCalculator();
        assert.equal(sut.calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Sum of rolls of 0 should score 0');
    });
    (0, qunit_1.test)('Result for 12 strikes should score 300', assert => {
        const sut = new scorecalculator_1.ScoreCalculator();
        assert.equal(sut.calculateScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 300, '12 strikes should score 300');
    });
    (0, qunit_1.test)('10 pairs of 4 and spare, with a final 6 should score 142', assert => {
        const sut = new scorecalculator_1.ScoreCalculator();
        assert.equal(sut.calculateScore([4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 6]), 142, '10 pairs of 4 and spare with a final 6 should return a score of 142');
    });
    (0, qunit_1.test)('10 strikes with a final 9 an 1 should score 289', assert => {
        const sut = new scorecalculator_1.ScoreCalculator();
        assert.equal(sut.calculateScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 1]), 289, '10 strikes with a final 9 an 1 should score 289');
    });
});
