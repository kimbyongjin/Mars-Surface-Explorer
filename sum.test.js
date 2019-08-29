const sum = require('./sum');

test('1 plus 2 should equal three', () => {
  expect(sum(1, 2)).toBe(3);
});
