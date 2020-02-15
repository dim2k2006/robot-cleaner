import robotCleaner from '../src';

describe('robotCleaner', () => {
  test('Should clean 4 places.', () => {
    expect(robotCleaner(2, [10, 22], [['E', 2], ['N', 1]])).toBe(4);
  });

  test('Should clean 6 places.', () => {
    expect(robotCleaner(2, [1, 0], [['W', 2], ['S', 3]])).toBe(6);
  });

  test('Should clean 5 places.', () => {
    expect(robotCleaner(2, [1, 0], [['W', 2], ['E', 4]])).toBe(5);
  });
});
