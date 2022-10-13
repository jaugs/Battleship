

const gameLogic = require('.index.js');

test('can make hit', () => {
  expect(gameLogic('A1')).toBe('hit');
});


