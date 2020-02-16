import head from 'lodash/head';
import tail from 'lodash/tail';
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

const robotCleaner = (commandsCount, initialPoint, route) => {
  const iter = (commands, currentPosition, path, accumulator) => {
    if (commands === 0) return new Set(accumulator.map(([x, y]) => `${x}-${y}`)).size;

    const instructions = head(path);

    const visitedPlaces = executeCommand(currentPosition, instructions);

    const lastPosition = last(visitedPlaces);

    return iter(commands - 1, lastPosition, tail(path), [...accumulator, ...visitedPlaces]);
  };

  return iter(commandsCount, initialPoint, route, []);
};

export default robotCleaner;
