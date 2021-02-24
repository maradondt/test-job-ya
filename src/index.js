import 'core-js';
import Board from './Board.js';
import parse from './utils/parsers.js';

export const generate = (m, n) => {
  const board = new Board(+m, +n);
  board.start();
};

export const file = (fileName) => {
  const string = parse(fileName);
  Board.getFromString(string).start();
};
