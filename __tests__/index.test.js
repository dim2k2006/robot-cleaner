import robotCleaner from '../src';

describe('robotCleaner', () => {
  test('Should clean 0 places.', () => {
    expect(robotCleaner(0, [10, 22], [['W', 0], ['E', 0]])).toBe(0);
  });

  test('Should clean 1 places.', () => {
    expect(robotCleaner(2, [10, 22], [['W', 0], ['E', 0]])).toBe(1);
  });

  test('Should clean 200001 places.', () => {
    expect(robotCleaner(2, [0, 0], [['W', 100000], ['S', 100000]])).toBe(200001);
  });

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
