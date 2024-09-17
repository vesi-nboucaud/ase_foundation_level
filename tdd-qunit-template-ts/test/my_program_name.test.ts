
import { test } from 'qunit';
import { MyClassName } from '../src/my_program_name'; // Make sure that the path is correct

test('1 should return 1', assert => {
    const sut = new MyClassName();
    assert.equal(sut.my_function_1_name(1), 1, '1 should be equal to 1');
});

test('2 should return 2', assert => {
    const sut = new MyClassName();
    assert.equal(sut.my_function_1_name(2), 2, '2 should be equal to 2');
});