// qunit.config.js
const tsNode = require('ts-node');

tsNode.register({
  project: './tsconfig.json'
});

module.exports = {
  extensions: ['ts'],
  require: ['ts-node/register']
};