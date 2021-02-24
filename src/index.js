import Board from './Board.js';
import parse from './utils/parsers.js';

const app = (param = 'random') => {
  const dispatch = {
    random: (m, n) => new Board(m, n).start(),
    file: (fileName) => {
      const string = parse(fileName);
      return Board.getFromString(string).start();
    },
  };

  return dispatch[param];
};

export default app;
