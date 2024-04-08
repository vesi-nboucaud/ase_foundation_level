const QUnit = require('qunit');
const { Person } = require('../tda-sample'); // Assurez-vous que le chemin d'accès est correct

QUnit.module('MyClassName Tests', function() {

    QUnit.test('30 should return true to isAdult', function(assert) {
        const myPerson = new Person(30);
        assert.strictEqual(myPerson.isAdult(), true);
    });

    /* QUnit.test('2 should return 2, 3 should return 3', function(assert) {
        const my_constant_name = new MyClassName();
        assert.strictEqual(my_constant_name.my_function_1_name(2), 2);
        assert.strictEqual(my_constant_name.my_function_1_name(3), 3);
    }); */
});
