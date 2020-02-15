import head from 'lodash/head';
import tail from 'lodash/tail';
import last from 'lodash/last';
import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';

const directionMap = {
  E: (x, y, value) => ([x + value, y]),
  W: (x, y, value) => ([x - value, y]),
  S: (x, y, value) => ([x, y - value]),
  N: (x, y, value) => ([x, y + value]),
};

const executeCommand = (currentPosition, [direction, steps], accumulator) => {
  if (steps === 0) return [...accumulator, currentPosition];

  const newPosition = directionMap[direction](currentPosition[0], currentPosition[1], 1);

  return executeCommand(newPosition, [direction, steps - 1], [...accumulator, currentPosition]);
};

const robotCleaner = (commandsCount, initialPoint, route) => {
  const iter = (commands, currentPosition, path, accumulator) => {
    if (commands === 0) return uniqWith(accumulator, isEqual).length;

    const instructions = head(path);
    const visitedPlaces = executeCommand(currentPosition, instructions, []);
    const lastPosition = last(visitedPlaces);

    return iter(commands - 1, lastPosition, tail(path), [...accumulator, ...visitedPlaces]);
  };

  return iter(commandsCount, initialPoint, route, []);
};

export default robotCleaner;
