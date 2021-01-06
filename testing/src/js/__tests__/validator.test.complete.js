import { isValidInn } from '../validators';

test('it should return true for valid inn', () => {
  const input = '7715964180';
  
  expect(isValidInn(input)).toBe(true);
});

test.each([
  ['true for valid organization Inn', '7715964180', true],
  ['false for invalid organization Inn', '7715964999', false],
])(('it should be %s'), (_, input, expected) => {
  expect(isValidInn(input)).toBe(expected);
});
