

const gameLogic = require('./sum');

test('can make hit', () => {
  expect(gameLogic('A1')).toBe('hit');
});


