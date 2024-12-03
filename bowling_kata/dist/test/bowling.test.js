"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qunit_1 = require("qunit");
const bowling_1 = require("../src/bowling"); // Make sure that the path is correct
(0, qunit_1.test)('12 strikes should score 300 ', assert => {
    const sut = new bowling_1.BowlingGame();
    for (let i = 0; i < 12; i++) {
        sut.roll(10);
    }
    //const rolls = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
    assert.equal(sut.calculateScore(), 300, '12 strikes should give a score of 300');
});
(0, qunit_1.test)('10 pairs of 9 and miss should score 90', assert => {
    const sut = new bowling_1.BowlingGame();
    //const rolls = ['9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-'];
    for (let i = 0; i < 10; i++) {
        sut.roll(9);
        sut.roll(0);
    }
    assert.equal(sut.calculateScore(), 90, '10 pairs of 9 and miss should give a score of 90');
});
(0, qunit_1.test)('10 pairs of 5 and spare, with a final 5 should score 150', assert => {
    const sut = new bowling_1.BowlingGame();
    //const rolls = ['5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5'];
    for (let i = 0; i < 10; i++) {
        sut.roll(5);
        sut.roll(5);
    }
    sut.roll(5);
    assert.equal(sut.calculateScore(), 150, '10 pairs of 5 and spare, with a final 5 should give a score of 150');
});
(0, qunit_1.test)('All rolls are 0 should score 0', assert => {
    const sut = new bowling_1.BowlingGame();
    for (let i = 0; i < 20; i++) {
        sut.roll(0);
    }
    assert.equal(sut.calculateScore(), 0, 'All rolls of 0 should give a score of 0');
});
(0, qunit_1.test)('A perfect game of strikes should score 300', assert => {
    const sut = new bowling_1.BowlingGame();
    for (let i = 0; i < 12; i++) {
        sut.roll(10);
    }
    assert.equal(sut.calculateScore(), 300, 'A perfect game should give a score of 300');
});
(0, qunit_1.test)('5 and spare followed by 3 should score 16', assert => {
    const sut = new bowling_1.BowlingGame();
    sut.roll(5);
    sut.roll(5);
    sut.roll(3);
    for (let i = 0; i < 17; i++) {
        sut.roll(0);
    }
    assert.equal(sut.calculateScore(), 16, '5 and spare followed by 3 should give a score of 16');
});
(0, qunit_1.test)('Strike in the last frame with two bonus rolls should score correctly', assert => {
    const sut = new bowling_1.BowlingGame();
    for (let i = 0; i < 9; i++) {
        sut.roll(0);
        sut.roll(0);
    }
    sut.roll(10);
    sut.roll(5);
    sut.roll(3);
    assert.equal(sut.calculateScore(), 18, 'Strike in the last frame followed by 5 and 3 should give a score of 18');
});
(0, qunit_1.test)('Spare in the last frame followed by a bonus roll should score correctly', assert => {
    const sut = new bowling_1.BowlingGame();
    for (let i = 0; i < 9; i++) {
        sut.roll(0);
        sut.roll(0);
    }
    sut.roll(5);
    sut.roll(5);
    sut.roll(7);
    assert.equal(sut.calculateScore(), 17, 'Spare in the last frame followed by 7 should give a score of 17');
});
