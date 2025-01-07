import { module, test } from 'qunit';
import { ScoreCalculator } from '../src/scorecalculator';

module('ScoreCalculator Tests', () => {

    test('Initial game score should be 0', assert => {
        const sut = new ScoreCalculator();
        assert.equal(sut.calculateScore([0]), 0, 'Initial game score should be 0');
    });

    test('Score after one roll of 5 pins should be 5', assert => {
        const sut = new ScoreCalculator();
        assert.equal(sut.calculateScore([5]), 5, 'Score after one roll of 5 pins should be 5');
    });

    test('20 rolls of 0 pin should score 0', assert => {
        const sut = new ScoreCalculator();
        assert.equal(sut.calculateScore([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Sum of rolls of 0 should score 0');
    });
    
    test('Result for 12 strikes should score 300', assert => {
        const sut = new ScoreCalculator();
        
        assert.equal(sut.calculateScore([10,10,10,10,10,10,10,10,10,10,10,10]), 300, '12 strikes should score 300');
    });
    
    test('10 pairs of 4 and spare, with a final 6 should score 142', assert => {
        const sut = new ScoreCalculator();
        assert.equal(sut.calculateScore([4,6,4,6,4,6,4,6,4,6,4,6,4,6,4,6,4,6,4,6,6]), 142, '10 pairs of 4 and spare with a final 6 should return a score of 142');
    });

    test('10 strikes with a final 9 an 1 should score 289', assert => {
        const sut = new ScoreCalculator();
        assert.equal(sut.calculateScore([10,10,10,10,10,10,10,10,10,10,9,1]), 289, '10 strikes with a final 9 an 1 should score 289');
    });
});

