import head from 'lodash/head';
import tail from 'lodash/tail';
import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';

const directionMap = {
  E: (x, y, value) => ([x + value, y]),
  W: (x, y, value) => ([x - value, y]),
  S: (x, y, value) => ([x, y - value]),
  N: (x, y, value) => ([x, y + value]),
};

const robotCleaner = (commandsCount, initialPoint, route) => {
  const iter = (commands, currentPosition, path, accumulator) => {
    if (commands === 0) return uniqWith(accumulator, isEqual).length;
    // if (commands === 0) return accumulator;

    const [direction, steps] = head(path);

    const newAccumulator = [...accumulator, currentPosition];

    if (steps !== 0) {
      return iter(
        commands,
        directionMap[direction](currentPosition[0], currentPosition[1], 1),
        [[path[0][0], path[0][1] - 1], ...tail(path)],
        newAccumulator,
      );
    }

    return iter(
      commands - 1,
      directionMap[direction](currentPosition[0], currentPosition[1], 0),
      tail(path),
      newAccumulator,
    );
  };

  return iter(commandsCount, initialPoint, route, []);
};

export default robotCleaner;
