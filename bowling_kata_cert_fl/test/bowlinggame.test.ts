import { module, test } from 'qunit';
import { BowlingGame } from '../src/bowlinggame'; // Make sure that the path is correct

module('BowlingGame Tests', () => {
    test('Initial game score should be 0', assert => {
        const sut = new BowlingGame();
        assert.equal(sut.launchCalculation(), 0, 'Initial game score should be 0');
    });

    test('Score after one roll (partial frame) of 5 pins should be 5', assert => {
        const sut = new BowlingGame();
        sut.roll(5);
        assert.equal(sut.launchCalculation(), 5, 'Score after one roll (partial frame) of 5 pins should be 5');
    });

    test('20 rolls of 0 pin should score 0', assert => {
        const sut = new BowlingGame();
        for (let i = 0; i < 20; i++) {
            sut.roll(0);
        }
        assert.equal(sut.launchCalculation(), 0, 'Sum of rolls of 0 should score 0');
    });

    test('Result for 12 strikes should score 300', assert => {
        const sut = new BowlingGame();
        for (let i = 0; i < 12; i++) {
            sut.roll(10);
        }
        assert.equal(sut.launchCalculation(), 300, '12 strikes should score 300');
    });

    test('10 pairs of 4 and spare, with a final 6 should score 142', assert => {
        const sut = new BowlingGame();
        for (let i = 0; i < 10; i++) {
            sut.roll(4);
            sut.roll(6)
        }
        sut.roll(6)
        assert.equal(sut.launchCalculation(), 142, '10 pairs of 4 and spare with a final 6 should return a score of 142');
    });

    test('10 pairs of 7 and miss should score 70', assert => {
        const sut = new BowlingGame();
        for (let i = 0; i < 10; i++) {
            sut.roll(7);
            sut.roll(0)
        }
        assert.equal(sut.launchCalculation(), 70, '10 pairs of 7 and miss should give a score of 70');
    });

    test('5 and spare followed by 3 should score 16', assert => {
        const sut = new BowlingGame();
        sut.roll(5);
        sut.roll(5);
        sut.roll(3);
        for (let i = 0; i < 17; i++) {
            sut.roll(0);
        }
        assert.equal(sut.launchCalculation(), 16, '5 and spare followed by 3 should give a score of 16');
    });

    test('Strike in the last frame with two bonus rolls of 2 and 5 should score 17', assert => {
        const sut = new BowlingGame();
        for (let i = 0; i < 9; i++) {
            sut.roll(0);
            sut.roll(0);
        }
        sut.roll(10);
        sut.roll(2);
        sut.roll(5);
        assert.equal(sut.launchCalculation(), 17, 'Strike in the last frame followed by 2 and 5 should give a score of 17');
    });

    test('Spare in the last frame followed by a bonus roll of 5 should score 15', assert => {
        const sut = new BowlingGame();
        for (let i = 0; i < 9; i++) {
            sut.roll(0);
            sut.roll(0);
        }
        sut.roll(5);
        sut.roll(5);
        sut.roll(5);
        assert.equal(sut.launchCalculation(), 15, 'Spare in the last frame followed by 5 should give a score of 15');
    });

    test('A strike followed by rolls of 3 and 4 should give a score of 24', assert => {
        const sut = new BowlingGame();
        sut.roll(10);
        sut.roll(3);
        sut.roll(4);
        for (let i = 0; i < 16; i++) {
            sut.roll(0);
        }
        assert.equal(sut.launchCalculation(), 24, 'A strike followed by 3 and 4 should give a score of 24');
    });

    test('A spare followed by a strike should give a score of 30', assert => {
        const sut = new BowlingGame();
        sut.roll(5);
        sut.roll(5);
        sut.roll(10);
        for (let i = 0; i < 17; i++) {
            sut.roll(0);
        }
        assert.equal(sut.launchCalculation(), 30, 'A spare followed by a strike should result in a score of 30');
    });
});