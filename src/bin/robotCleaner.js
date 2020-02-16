#!/usr/bin/env node

import readline from 'readline';
import toNumber from 'lodash/toNumber';
import robotCleaner from '..';

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

rl.on('line', cmd => input.push(cmd));

rl.on('close', () => {
  const [commandsParam, initialPointParam, ...routeParam] = input;

  const commands = toNumber(commandsParam);

  const initialPoint = initialPointParam
    .split(' ')
    .map(toNumber);

  const route = routeParam
    .map(path => [path.slice(0, 1), toNumber(path.slice(-1))]);

  const result = robotCleaner(commands, initialPoint, route);

  console.log(`=> Cleaned: ${result}`);

  process.exit(0);
});
