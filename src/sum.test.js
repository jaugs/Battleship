

const caesarCipher = require('./sum');

test('works', () => {
  expect(caesarCipher('three', 1)).toBe('uisff');
});

test('a-z', () => {
  expect(caesarCipher('abcxyz', 1)).toBe('bcdyza');
});

test('captitals', () => {
  expect(caesarCipher('AbcXyz', 1)).toBe('bcdyza');
});

test('punctuation', () => {
  expect(caesarCipher('a.b!c', 1)).toBe('bcd');
});

