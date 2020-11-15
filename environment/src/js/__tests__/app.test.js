import demo from '../app';

test('should work', () => {
  const value = 'demo';
  const result = demo(value);
  expect(result).toBe(value);
});
