import last from 'lodash/last';

const directionMap = {
  E: (x, y, value) => ([x + value, y]),
  W: (x, y, value) => ([x - value, y]),
  S: (x, y, value) => ([x, y - value]),
  N: (x, y, value) => ([x, y + value]),
};

const executeCommand = (currentPosition, [direction, steps]) => {
  const visitedPlaces = [currentPosition];

  let i = steps;
  let lastPosition = currentPosition;

  while (i > 0) {
    const newPosition = directionMap[direction](lastPosition[0], lastPosition[1], 1);

    visitedPlaces.push(newPosition);

    lastPosition = newPosition;

    i -= 1;
  }

  return visitedPlaces;
};

const robotCleaner = (commands, initialPoint, route) => {
  if (commands === 0) return 0;

  let accumulator = [initialPoint];

  let i = 0;
  let lastPosition = initialPoint;

  while (i < commands) {
    const instructions = route[i];

    const visitedPlaces = executeCommand(lastPosition, instructions);

    accumulator = [...accumulator, ...visitedPlaces];

    lastPosition = last(visitedPlaces);

    i += 1;
  }

  return new Set(accumulator.map(([x, y]) => `${x}-${y}`)).size;
};

export default robotCleaner;
