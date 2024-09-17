
import { test } from 'qunit';
import { MyClassName } from '../src/my_program_name'; // Assurez-vous que le chemin d'accès est correct


    test('MyClassName Tests', assert => {
        const sut = new MyClassName();
        assert.equal(sut.my_function_1_name(1), 1, '1 should be equal to 1');
    });
/* QUnit.module('MyClassName Tests', function() {

    QUnit.test('1 should return 1', function(assert) {
        const sut = new MyClassName();
        assert.strictEqual(sut.my_function_1_name(1), 1);
    });

    QUnit.test('2 should return 2, 3 should return 3', function(assert) {
        const my_constant_name = new MyClassName();
        assert.strictEqual(my_constant_name.my_function_1_name(2), 2);
        assert.strictEqual(my_constant_name.my_function_1_name(3), 3);
    });
}); */
