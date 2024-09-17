"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qunit_1 = require("qunit");
const my_program_name_1 = require("../src/my_program_name"); // Assurez-vous que le chemin d'accès est correct
(0, qunit_1.module)('SnakesLadders Tests', () => {
    (0, qunit_1.test)('MyClassName Tests', assert => {
        const sut = new my_program_name_1.MyClassName();
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
});
//# sourceMappingURL=my_program_name.test.js.map