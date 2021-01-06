import { containsText } from '../filter';

test('should pass test <- don\'t write name like this', () => {
  const text = 'Alex Petrov';
  const search = 'petrov';

  const result = containsText(text, search);
  expect(result).toBe(true);
});
