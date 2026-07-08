const assert = require('assert');
const { add, isEven } = require('../app');

assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');
assert.strictEqual(add(-1, 1), 0, '-1 + 1 should equal 0');
assert.strictEqual(isEven(2), true, '2 should be even');
assert.strictEqual(isEven(3), false, '3 should be odd');
assert.strictEqual(isEven(0), true, '0 should be even');

console.log('✅ All tests passed');
