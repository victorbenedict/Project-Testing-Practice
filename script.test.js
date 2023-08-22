const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} = require('./script'); 

test('capitalize', () => {
  expect(capitalize('test')).toBe('Test');
  expect(capitalize('123')).toBe('123');
  expect(capitalize('TEST')).toBe('TEST');
});

test('reverseString', () => {
  expect(reverseString('a')).toBe('a');
  expect(reverseString('Hello!')).toBe('!olleH');
  expect(reverseString('One, 2, three, 4')).toBe('4 ,eerht ,2 ,enO');
});

test('Calculator', () => {
  expect(calculator.add(5, 6)).toBe(11);
  expect(calculator.subract(12, 6)).toBe(6);
  expect(calculator.multiply(5, 6)).toBe(30);
  expect(calculator.divide(21, 7)).toBe(3);
});

test('caesarCipher', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const expectedOutput= 'bcdefghijklmnopqrstuvwxyza';

  expect(caesarCipher(alphabet, 1)).toBe(expectedOutput);
  expect(caesarCipher(alphabet.toUpperCase(), 1)).toBe(expectedOutput.toUpperCase());
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
  expect(caesarCipher("abc", 26)).toBe("abc");
});

test.only('analyzeArray', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });

  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0
  });

  expect(analyzeArray([5, 5, 5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 4
  });
});
